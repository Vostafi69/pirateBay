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
    <div className="font-TTFirsNeu relative flex h-screen w-full max-w-[1920px] flex-col px-10 py-8 after:absolute after:inset-0 after:-z-[1] after:bg-[url('/pirateBack.png')] after:bg-cover after:bg-bottom after:bg-no-repeat after:opacity-60">
      {headerSlot}
      <main className="h-full w-full">{children}</main>
      {footerSlot}
    </div>
  );
};
