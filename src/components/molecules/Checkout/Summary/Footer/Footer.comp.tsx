import { memo } from "react";

export const Footer = memo(() => {
  return (
    <div className="text-center space-y-2">
      <p className="text-xs text-muted-foreground">
        🔒 Dados protegidos e a transação é 100% segura
      </p>
      <p className="text-xs text-muted-foreground">✅ Garantia de 30 dias</p>
    </div>
  );
});

Footer.displayName = "Footer";
