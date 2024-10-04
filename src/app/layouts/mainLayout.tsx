import { FC, PropsWithChildren, ReactNode } from "react";

interface MainLayoutProps extends PropsWithChildren {
  headerSlot?: ReactNode;
  footerSlot?: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({
  children,
  footerSlot,
  headerSlot,
}) => {
  return (
    <div className="flex h-screen w-full max-w-[1920px] flex-col bg-[url('/pirateBack.png')] bg-cover bg-bottom bg-no-repeat px-10 py-8">
      {headerSlot}
      <main className="h-full w-full">{children}</main>
      {footerSlot}
    </div>
  );
};
