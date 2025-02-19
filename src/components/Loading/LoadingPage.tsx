import React, { Suspense } from "react";
import { DefaultFallback } from "./LoadingFallback";

const LoadingPage: React.FC<{
  FallbackElement?: React.ReactNode;
  children?: React.ReactNode;
}> = ({ FallbackElement, children }) => (
  <Suspense fallback={FallbackElement ? FallbackElement : <DefaultFallback />}>
    {children}
  </Suspense>
);

export default LoadingPage;
