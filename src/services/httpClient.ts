import axios, {
  AxiosInstance,
  AxiosError,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
  AxiosHeaders,
} from 'axios';

export interface ApiEnvelope<T> {
  success: boolean;
  data: T;
  message?: string;
}

//
// ─── ALLOWED HTTP METHODS ────────────────────────────────────────────────────────
//
export type HttpMethod = 'get' | 'delete' | 'post' | 'put' | 'patch';

//
// ─── HTTP CLIENT CLASS ───────────────────────────────────────────────────────────
//
export class HttpClient {
  private readonly instance: AxiosInstance;

  constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
      // bootstrap with a real AxiosHeaders instance so `.headers` is never undefined
      headers: new AxiosHeaders({
        'Content-Type': 'application/json',
      }),
    });

    // ─── REQUEST INTERCEPTOR ────────────────────────────────────────────────────
    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
        // ensure headers object exists
        if (!config.headers) {
          config.headers = new AxiosHeaders();
        }

        // inject auth token if present
        const token = localStorage.getItem('authToken');
        if (token) {
          (config.headers as AxiosHeaders).set('Authorization', `Bearer ${token}`);
        }
        return config;
      },
      (error: AxiosError) => Promise.reject(error)
    );
  }

  //
  // ─── GENERIC REQUEST METHOD WITH OVERLOADS ─────────────────────────────────────
  //

  // GET / DELETE (no body)
  public async request<T>(
    method: 'get' | 'delete',
    url: string,
    config?: Omit<AxiosRequestConfig, 'method' | 'url' | 'data'>
  ): Promise<T>;

  // POST / PUT / PATCH (with body)
  public async request<T, B = unknown>(
    method: 'post' | 'put' | 'patch',
    url: string,
    body: B,
    config?: Omit<AxiosRequestConfig, 'method' | 'url' | 'data'>
  ): Promise<T>;

  // Implementation
  public async request<T, B = unknown>(
    method: HttpMethod,
    url: string,
    bodyOrConfig?: B | AxiosRequestConfig,
    maybeConfig?: AxiosRequestConfig
  ): Promise<T> {
    const isBodyMethod = ['post', 'put', 'patch'].includes(method);
    const data = isBodyMethod ? (bodyOrConfig as B) : undefined;
    const config = isBodyMethod
      ? maybeConfig
      : (bodyOrConfig as AxiosRequestConfig);

    const response = await this.instance.request<ApiEnvelope<T>>({
      method,
      url,
      data,
      ...config,
    } as InternalAxiosRequestConfig);

    const envelope = response.data;
    if (!envelope.success) {
      throw new Error(envelope.message ?? 'API Error');
    }
    return envelope.data;
  }

  //
  // ─── CONVENIENCE SHORTCUTS ─────────────────────────────────────────────────────
  //

  public get<T>(
    url: string,
    config?: Omit<AxiosRequestConfig, 'method' | 'url' | 'data'>
  ): Promise<T> {
    return this.request('get', url, config);
  }

  public delete<T>(
    url: string,
    config?: Omit<AxiosRequestConfig, 'method' | 'url' | 'data'>
  ): Promise<T> {
    return this.request('delete', url, config);
  }

  public post<T, B = unknown>(
    url: string,
    body: B,
    config?: Omit<AxiosRequestConfig, 'method' | 'url' | 'data'>
  ): Promise<T> {
    return this.request('post', url, body, config);
  }

  public put<T, B = unknown>(
    url: string,
    body: B,
    config?: Omit<AxiosRequestConfig, 'method' | 'url' | 'data'>
  ): Promise<T> {
    return this.request('put', url, body, config);
  }

  public patch<T, B = unknown>(
    url: string,
    body: B,
    config?: Omit<AxiosRequestConfig, 'method' | 'url' | 'data'>
  ): Promise<T> {
    return this.request('patch', url, body, config);
  }
}

export const httpClient = new HttpClient('/api');
