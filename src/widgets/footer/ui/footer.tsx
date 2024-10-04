import { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="flex flex-row">
      <div className="relative ml-auto overflow-hidden rounded-[10px] border-2 border-border bg-card p-[10px] transition-transform ease-out hover:scale-105">
        <div className="relative h-[77px] w-[92px]">
          <img className="absolute w-full" src="/arbitrum.png" alt="Atbitrum" />
        </div>
        <a
          className="absolute inset-0"
          href="https://arbitrum.io/"
          target="_blank"
        />
      </div>
    </footer>
  );
};
