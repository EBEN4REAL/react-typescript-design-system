import { useQuery } from '@tanstack/react-query';
import { httpClient } from '../../services/httpClient';

export interface User {
  id: string;
  name: string;
}

export function useUsers() {
  return useQuery<User[], Error>({
    queryKey: ['users'],
    queryFn: () => httpClient.get<User[]>('/users'),
  });
}
