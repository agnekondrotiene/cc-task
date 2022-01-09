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
      className={`w-${width} px-11 py-3 block box-border bg-M1 shadow-button rounded-[3px] font-roboto not-italic font-black leading-[24px] uppercase text-small2 text-White tracking-[.07em]`}
      {...buttonProps}
    >
      {title}
    </button>
  );
};
