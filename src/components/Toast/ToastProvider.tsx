import { ReactNode, useCallback, useState } from "react";
import { v4 as uuid } from "uuid";
import { ToastContext, Toast, Variant } from "@/context/toastContext";

type Props = { children: ReactNode };

export function ToastProvider({ children }: Props) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const hideToast = useCallback((id: string) => {
    setToasts((t) => t.filter((x) => x.id !== id));
  }, []);

  const showToast = useCallback((message: string, variant: Variant = "info") => {
    const id = uuid();
    setToasts((t) => [...t, { id, message, variant }]);
    setTimeout(() => hideToast(id), 4000);
  }, [hideToast]);

  return (
    <ToastContext.Provider value={{ toasts, showToast, hideToast }}>
      {children}
      <div className="fixed top-4 right-4 space-y-2 z-50">
        {toasts.map((t) => (
          <ToastItem key={t.id} toast={t} onClose={() => hideToast(t.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

type ToastItemProps = {
  toast: Toast;
  onClose: () => void;
};

export function ToastItem({ toast, onClose }: ToastItemProps) {
  const colors = {
    success: "bg-green-100 text-green-800",
    error:   "bg-red-100   text-red-800",
    info:    "bg-blue-100  text-blue-800",
    warning: "bg-yellow-100 text-yellow-800",
  } as const;

  return (
    <div
      className={`px-4 py-2 rounded-md shadow ${
        colors[toast.variant]
      } flex items-center justify-between`}
    >
      <span>{toast.message}</span>
      <button onClick={onClose} className="font-bold ml-2">
        ×
      </button>
    </div>
  );
}
