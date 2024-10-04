import { ConnectWalletButton } from "@/features";
import { Logo } from "@/shared/ui/logo";
import { FC } from "react";

export const Header: FC = () => {
  return (
    <header className="flex flex-row items-center justify-between">
      <Logo />
      <ConnectWalletButton />
    </header>
  );
};
