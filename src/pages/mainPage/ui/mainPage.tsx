import { Swapper } from "@/widgets";
import { FC } from "react";

export const MainPage: FC = () => {
  return (
    <section className="h-full w-full">
      <div className="mx-auto mt-10 h-[388px] max-w-[500px]">
        <Swapper />
      </div>
    </section>
  );
};
