const Button = ({ className, ...props }) => {
  return (
    <button
      className={`text-xl bg-sky-600 rounded-md font-bold
       py-2 px-4 text-white transition-all duration-150 opacity-1 hover:opacity-80 drop-shadow-lg active:drop-shadow-none ${className}`}
      {...props}
    ></button>
  );
};

export default Button;
