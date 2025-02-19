import React from "react";

export const ProfileFallback: React.FC = () => (
  <div className="aspect-square h-full w-full animate-pulse rounded-box bg-gray-200 dark:bg-gray-700" />
);

export const DefaultFallback: React.FC = () => (
  <div className="not-prose z-40 mx-auto min-h-screen w-full rounded-md shadow">
    <div className="flex w-full animate-pulse flex-col gap-4">
      <div className="h-1/6 w-full rounded bg-slate-700" />
      <div className="h-1/12 w-3/4 rounded bg-slate-700" />
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-1h-1/12 rounded bg-slate-700" />
        <div className="col-span-2h-1/12 rounded bg-slate-700" />
      </div>
      <div className="h-1/12 w-full rounded bg-slate-700" />
      <div className="h-1/6 w-full rounded bg-slate-700" />
      <div className="h-1/12 w-full rounded bg-slate-700" />
      <div className="flex-1 space-y-6 py-1">
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-5">
            <div className="col-span-2h-1/12 rounded bg-slate-700" />
            <div className="col-span-1h-1/12 rounded bg-slate-700" />
          </div>
          <div className="h-4 rounded bg-slate-700" />
        </div>
      </div>
    </div>
  </div>
);

export const AudioFallback: React.FC = () => (
  <div className="aspect-square h-32 w-80 animate-pulse rounded-box bg-gray-200 dark:bg-gray-700" />
);
