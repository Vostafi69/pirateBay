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
    <div className="h-screen w-full">
      {headerSlot}
      <main>{children}</main>
      {footerSlot}
    </div>
  );
};
