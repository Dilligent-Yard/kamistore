import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyle = "px-8 py-5 text-[10px] font-mono tracking-[0.2em] uppercase transition-all duration-300 focus:outline-none flex items-center justify-center relative overflow-hidden group";
  
  const variants = {
    primary: "bg-white text-black hover:bg-neutral-200 border border-transparent",
    secondary: "bg-neutral-900 text-white hover:bg-neutral-800 border border-neutral-900",
    outline: "bg-transparent text-white border border-neutral-800 hover:border-white hover:text-white"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {/* Technical corner accents */}
      <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-current opacity-0 group-hover:opacity-100 transition-opacity"></span>
      <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-current opacity-0 group-hover:opacity-100 transition-opacity"></span>
      
      {children}
    </button>
  );
};