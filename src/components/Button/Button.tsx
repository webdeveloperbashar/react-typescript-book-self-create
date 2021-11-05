
interface IProps {
    className?: string;
    innerValue?: any;
    modalSetOpen: (Boolean: boolean) => void;
}

const Button = ({className, innerValue,  modalSetOpen}: IProps) => {
  return (
    <>
      <button
        type='button'
        className={className}
        onClick={() => modalSetOpen(true)}
      >
          {innerValue}
      </button>
    </>
  );
};

export default Button;
