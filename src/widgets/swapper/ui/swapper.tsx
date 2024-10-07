import { FC } from "react";
import { SwapperForm } from "./swapperForm";

export const Swapper: FC = () => {
  return (
    <div className="h-full w-full rounded-[40px] border-4 border-border bg-card px-6 py-8">
      <SwapperForm />
    </div>
  );
};
