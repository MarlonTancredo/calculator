type Props = {
  operation: boolean;
  double: boolean;
  triple: boolean;
  click: any;
  label: string;
};

const Button = ({ operation, double, triple, click, label }: Props) => {
  return (
    <button
      className={`
      button 
      ${operation ? "operation" : ""} 
      ${double ? "double" : ""} 
      ${triple ? "triple" : ""}
    `}
      onClick={(e) => click && click(label)}
    >
      {label}
    </button>
  );
};

export default Button;
