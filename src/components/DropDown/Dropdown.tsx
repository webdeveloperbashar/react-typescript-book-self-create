/* eslint-disable no-undef */
/* This example requires Tailwind CSS v2.0+ */
import { ChangeEvent } from 'react';
import { dropdownMenuItem } from '../../utils/FakeData/dropdownMenuItem';

interface IProps {
  label?: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  className: string;
  value?: string;
}
const Dropdown = ({ label, name, onChange, className, value }: IProps) => {
  return (
    <div className="w-full">
      <label htmlFor={label} className="text-gray-500">
        {label}
      </label>
      <select
        name={name}
        onChange={onChange}
        value={value}
        className={className}
      >
        {dropdownMenuItem.map((item) => (
          <option value={item.name} key={item.id}>
              {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Dropdown;
