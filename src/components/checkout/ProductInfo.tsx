export type ProductInfoProps = {
  image: string;
  name: string;
  quantity: number;
  isActive?: boolean;
  size?: "small" | "large";
};

export const ProductInfo = ({
  image,
  name,
  quantity,
  isActive = false,
  size = "small",
}: ProductInfoProps) => {
  const isSmall = size === "small";

  return (
    <div className="flex items-center gap-x-[15px]">
      <img
        src={image}
        alt="Product"
        width={isSmall ? 40 : 72}
        height={isSmall ? 40 : 72}
        className={isActive ? "border border-solid border-M1" : undefined}
      />
      <span className={`${isSmall ? "text-small2" : "normal"} leading-[24px]`}>
        <span className="font-black">{quantity}x </span>
        <span className="font-normal">{name}</span>
        <span className="font-light">®</span>
      </span>
    </div>
  );
};
