import React, { useState } from "react";

interface ISelect<T> {
  label: string;
  options: T[];
  onChange?: (value: T) => void;
  render?: (option: T, isSelected: boolean) => React.ReactNode;
}

function Select<T>({
  label,
  options,
  render,
  ...props
}: ISelect<T>): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const handleButtonClick = () => setIsOpen(!isOpen);
  const [selected, setSelectedOption] = useState<T | null>(null);

  return (
    <>
      <div className="bg-red-500 text-left">
        <label className="block">{label}</label>
        <button className="bg-amber-500 w-full" onClick={handleButtonClick}>
          Select Toggle
        </button>
        <div className="relative w-full">
          {isOpen && (
            <div className="bg-green-500 absolute top-0 w-full z-1">
              <input type="text" placeholder="Search..." className="w-full" />
              <div className="flex flex-col px-2 py-1">
                {options.map(
                  (option) => render && render(option, selected === option)
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Select;
