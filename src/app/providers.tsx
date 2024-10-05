import StoreProvider from "@/store/StoreProvider";
import { NextUIProvider } from "@nextui-org/react";

/**
 * Providers component
 * @param {React.ReactNode} children - The children to be wrapped by the Providers component
 * @returns {React.ReactNode} The Providers component
 */
export function Providers({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return (
    <StoreProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </StoreProvider>
  );
}
