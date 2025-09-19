import { Smartphone } from "lucide-react";

export const PixInfo = () => {
  return (
    <div className="mt-6 p-6 bg-green-50/50 rounded-lg border border-green-200">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-green-100 rounded-lg">
          <Smartphone className="h-5 w-5 text-green-600" />
        </div>
        <div className="text-sm">
          <p className="font-semibold text-green-800 mb-3">
            Como funciona o PIX:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-green-700">
            <li>Finalize seu pedido clicando no botão do Resumo</li>
            <li>Escaneie o QR Code ou copie o código PIX</li>
            <li>Confirme o pagamento no app do seu banco</li>
            <li>Pronto! Aprovação instantânea e produto liberado</li>
          </ol>
          <div className="mt-4 p-3 bg-green-100 rounded-lg">
            <p className="text-xs text-green-800 font-medium">
              💡 Dica: O PIX é mais rápido, seguro e você ainda ganha 5% de
              desconto!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
