type Props = {
  name: string;
  id: string;
  options: string[];
};

export const Dropdown = ({ name, id, options }: Props) => {
  return (
    <div className="border border-solid rounded-[3px] border-Gray5 box-border p-[12px] w-full">
      <select
        className="font-sofiapro not-italic font-normal text-small2 text-Gray4 leading-[24px] focus:outline-none"
        name={name}
        id={id}
      >
        {options.map((option) => (
          <option
            key={option + Math.random()}
            value={option.toLocaleLowerCase()}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
