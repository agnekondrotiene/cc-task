import { ProductInfo, ProductInfoProps } from "../ProductInfo";
import { ReactComponent as ArrowDown } from "assets/arrow-down.svg";

type Props = ProductInfoProps & {
  isExpanded: boolean;
  onClick: () => void;
};

export const VariantsHeader = (props: Props) => {
  const { isExpanded, onClick, ...productInfoProps } = props;
  return (
    <div className="flex justify-between items-center">
      <ProductInfo {...productInfoProps} />
      <span
        className="flex items-center gap-x-[10px] text-small2 text-M1 font-black"
        onClick={onClick}
      >
        Change
        <span className={isExpanded ? "rotate-180" : undefined}>
          <ArrowDown />
        </span>
      </span>
    </div>
  );
};
