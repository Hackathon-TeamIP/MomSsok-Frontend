"use client";

import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";

export const QueryErrorBoundary = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary
      onReset={reset}
      fallbackRender={({ resetErrorBoundary }) => (
        <div className="grid min-h-full place-items-center bg-white px-6 pt-28">
          <p className="text-2xl font-semibold text-primary">Error</p>
          <h1 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            일시적인 오류가 발생했습니다.
          </h1>
          <p className="mt-3 leading-7 text-gray-500">
            잠시 후 다시 이용해주세요.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              onClick={() => resetErrorBoundary()}
              className="rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm"
            >
              다시 시도하기
            </button>
          </div>
        </div>
      )}
    >
      {children}
    </ErrorBoundary>
  );
};
