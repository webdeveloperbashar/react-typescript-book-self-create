import React from 'react';

interface IProps {
  label?: string;
  type: string;
  name: string;
  className: string;
  value?: string;
  autoComplete?: string;
  required?: boolean;
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
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default Input;
