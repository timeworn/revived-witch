import React, { Suspense, useEffect, useState } from "react";

const Wrapper: React.FC<{
  onLoaded: () => void;
  children: React.ReactNode;
}> = ({ onLoaded, children }) => {
  useEffect(() => {
    onLoaded();
  }, [onLoaded]);

  return <>{children}</>;
};

const SuspenseWrapper: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [finishSuspense, setFinishSuspense] = useState(false);

  useEffect(() => {
    if (finishSuspense) {
      const timer = setTimeout(() => setIsLoading(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [finishSuspense]);

  return (
    <>
      <div
        className={`min-w-screen min-h-screen transition-opacity duration-1000 ${isLoading ? "opacity-100" : "pointer-events-none opacity-0"} fixed left-0 top-0 z-[99] flex items-center justify-center bg-black`}
      >
        {/* <video
          className="relative z-[99] h-screen w-screen"
          src={getImageUrl("rw/loading.mp4")}
          autoPlay={true}
          loop={true}
          preload="auto"
        /> */}
      </div>
      <Suspense>
        <Wrapper onLoaded={() => setFinishSuspense(true)}>{children}</Wrapper>
      </Suspense>
    </>
  );
};

export default SuspenseWrapper;
