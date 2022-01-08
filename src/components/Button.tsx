type Props = {
  width?: number | string;
  title: string;
  paddingX: number;
  paddingY: number;
};

export const Button = ({
  width = "auto",
  title,
  paddingX,
  paddingY,
}: Props) => {
  return (
    <button
      className={`w-${width} px-[${paddingX}px] py-[${paddingY}px] block box-border bg-M1 shadow-button rounded-[3px] font-roboto not-italic font-black leading-[24px] uppercase text-small2 text-White tracking-[.07em]`}
    >
      {title}
    </button>
  );
};
