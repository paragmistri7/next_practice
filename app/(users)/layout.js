import Navigation from "./components/navigation";
import "../globals.css";
import StoreProvider from "@/lib/storeProvider";
import { Suspense } from "react";

export default function RootLayout({ children }) {

  return (
    <html
      lang="en"
    >
      <body className="">
        <Navigation />
        <Suspense fallback={<div>Loading...</div>}>
          <StoreProvider>
            {children}
          </StoreProvider>
        </Suspense>
      </body>
    </html>
  );
}
