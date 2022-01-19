type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  width?: number | string;
  title: string;
};

export const Button = ({ width = "auto", title, ...buttonProps }: Props) => {
  return (
    <button
      className={`w-${width} py-[16px] mb-[24px] block box-border bg-GreenButton shadow-button rounded-[3px] font-sofiapro not-italic font-normal text-small2 text-White leading-[24px] uppercase  tracking-[.07em]`}
      {...buttonProps}
    >
      {title}
    </button>
  );
};
