import { ReactComponent as RemoveIcon } from "assets/remove_icon.svg";
import { useState } from "react";

export type ProductInfoProps = {
  image: string;
  name: string;
  quantity: number;
  isActive?: boolean;
  size?: "small" | "large";
  onRemove?: () => void;
};

export const ProductInfo = ({
  image,
  name,
  quantity,
  isActive = false,
  size = "small",
  onRemove,
}: ProductInfoProps) => {
  const [isShown, setIsShown] = useState(false);
  const isSmall = size === "small";

  return (
    <div
      className="flex items-center gap-x-[15px]"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <img
        src={image}
        alt="Product"
        width={isSmall ? 40 : 72}
        height={isSmall ? 40 : 72}
        className={isActive ? "border border-solid border-M1" : undefined}
      />
      <div className="flex flex-col relative">
        <span
          className={`${isSmall ? "text-small2" : "normal"} leading-[24px]`}
        >
          <span className="font-black">{quantity}x </span>
          <span className="font-normal">{name}</span>
          <span className="font-light">®</span>
        </span>
        {isShown && (
          <div
            className="flex items-baseline gap-x-[3px] font-sofiapro text-small text-M1 font-normal leading-[12px] absolute bottom-[-16px]"
            onClick={onRemove}
          >
            <RemoveIcon /> Remove
          </div>
        )}
      </div>
    </div>
  );
};
