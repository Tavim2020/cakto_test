import { CheckCircle, Lock, Shield } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="flex-1 flex flex-col gap-4">
      <div className="w-full flex items-center justify-center gap-2">
        <Shield className="h-6 w-6 text-green-600" />
        <span className="text-base font-medium text-foreground">
          Compra 100% segura e protegida
        </span>
      </div>

      <div className="flex-1 flex items-center justify-center gap-6">
        <div className="flex items-center gap-2">
          <Lock className="h-4 w-4 text-green-600" />
          <span className="text-sm text-muted-foreground">SSL 256-bit</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <span className="text-sm text-muted-foreground">
            Dados protegidos
          </span>
        </div>
      </div>
    </footer>
  );
};
