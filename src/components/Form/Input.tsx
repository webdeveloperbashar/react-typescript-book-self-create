import React from 'react';

interface IProps {
  label?: string;
  type: string;
  name: string;
  className: string;
  value?: string;
}

const Input: React.FC<IProps> = ({ label, type, name, className, value }) => {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input type={type} name={name} className={className} value={value} />
    </>
  );
};

export default Input;
