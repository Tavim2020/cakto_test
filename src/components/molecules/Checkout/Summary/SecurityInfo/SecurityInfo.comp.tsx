import { CheckCircle, Lock, Shield, Star } from "lucide-react";
import { memo } from "react";

export const SecurityInfo = memo(() => {
  return (
    <div className="pt-4 border-t">
      <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
        <div className="flex items-center justify-center gap-1">
          <Shield className="h-3 w-3 text-green-600" />
          <span>Compra segura</span>
        </div>
        <div className="flex items-center justify-center gap-1">
          <Lock className="h-3 w-3 text-green-600" />
          <span>SSL 256-bit</span>
        </div>
        <div className="flex items-center justify-center gap-1">
          <CheckCircle className="h-3 w-3 text-green-600" />
          <span>Dados protegidos</span>
        </div>
        <div className="flex items-center justify-center gap-1">
          <Star className="h-3 w-3 text-yellow-500" />
          <span>Loja confiável</span>
        </div>
      </div>
    </div>
  );
});

SecurityInfo.displayName = "SecurityInfo";
