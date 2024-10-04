import { Button } from "@/shared/ui/button";
import { FC } from "react";

export const ConnectWalletButton: FC = () => {
  return (
    <Button className="h-[63px] rounded-[10px] border-none px-6 py-4 text-[26px] font-medium tracking-tight text-[#FEEFCD]">
      Connect wallet
    </Button>
  );
};
