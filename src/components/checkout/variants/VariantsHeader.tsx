import { ProductInfo, ProductInfoProps } from "../ProductInfo";
import { ReactComponent as ArrowDown } from "assets/arrow-down.svg";

type Props = ProductInfoProps;

export const VariantsHeader = (props: Props) => {
  return (
    <div className="flex justify-between items-center">
      <ProductInfo {...props} />
      <span className="flex items-center gap-x-[10px] text-small2 text-M1 font-black">
        Change
        <span className={props.isActive ? "rotate-180" : undefined}>
          <ArrowDown />
        </span>
      </span>
    </div>
  );
};
