export const Button = ({ children, variant = "primary", isBold = false, className = '' }) => {
  return (
    <button
      className={`flex items-center justify-center p-4 rounded-[35px] text-xl leading-5 transition-all 
        ${variant === 'primary' 
          ? 'bg-primary text-white' 
          : 'bg-white text-primary border border-primary'
        } 
        ${isBold ? 'font-graphik-bold' : 'font-graphik'}
        ${className}
      `}
    >
      {children}
    </button>
  );
};