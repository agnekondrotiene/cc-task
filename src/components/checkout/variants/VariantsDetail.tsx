import { Button } from "../../Button";
import { Variant } from "./Variant";

export const VariantsDetail = () => {
  return (
    <div className="flex flex-col gap-y-[7px]">
      <div>
        <Variant />
        <Variant />
        <Variant />
      </div>
      <div className="flex justify-end">
        <Button title="SAVE CHANGES" paddingX={45} paddingY={12} />
      </div>
    </div>
  );
};
