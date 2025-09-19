import { Error } from "@/components/pages/Error";
import { roboto } from "@/fonts";
import { ToastComponent } from "@/lib/Toastify";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

import "./globals.css";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="pt-BR">
      <body
        className={`${roboto.className} antialiased min-h-dvh flex flex-col bg-white to-muted/20 min-w-80`}
      >
        <ErrorBoundary errorComponent={Error}>
          <ToastComponent />
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
};

export default RootLayout;
