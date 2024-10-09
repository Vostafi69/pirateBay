import { FC } from "react";

export const Logo: FC = () => {
  return (
    <div className="flex h-[96px] w-[268px] flex-row items-center justify-between overflow-hidden rounded-[15px] border-4 border-border bg-[url('/logoBack.png')] bg-cover bg-center p-4">
      <a className="relative block h-16 w-16" href="#">
        <img
          className="absolute w-full object-cover"
          src="/logo.svg"
          alt="PirateBay"
        />
      </a>
      <p className="font-PirataOne select-none text-[45px] font-normal tracking-tight text-[#352831]">
        PirateBay
      </p>
    </div>
  );
};
