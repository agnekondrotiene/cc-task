export type ProductInfoProps = {
  image: string;
  name: string;
  quantity: number;
  isActive?: boolean;
};

export const ProductInfo = ({
  image,
  name,
  quantity,
  isActive = false,
}: ProductInfoProps) => {
  return (
    <div className="flex items-center gap-x-[15px]">
      <img
        src={image}
        alt="Product"
        width={40}
        height={40}
        className={isActive ? "border border-solid border-M1" : undefined}
      />
      <span className="text-small2 leading-[24px]">
        <span className="font-black">{quantity}x </span>
        <span className="font-normal">{name}</span>
        <span className="font-light">®</span>
      </span>
    </div>
  );
};
