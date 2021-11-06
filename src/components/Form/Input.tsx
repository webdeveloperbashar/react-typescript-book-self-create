import React, { ChangeEvent } from 'react';

interface IProps {
  label?: string;
  type: string;
  name: string;
  className: string;
  value?: string;
  autoComplete?: string;
  required?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input = ({
  label,
  type,
  name,
  className,
  value,
  autoComplete,
  required,
  onChange,
  placeholder,
}: IProps) => {
  return (
    <>
      <div className="w-full">
        <label htmlFor={label}>{label}</label>
        <input
          name={name}
          type={type}
          autoComplete={autoComplete}
          required={required}
          className={className}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default Input;
