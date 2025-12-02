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
  const baseStyle = "h-14 px-8 text-[10px] font-mono tracking-[0.25em] uppercase transition-all duration-300 focus:outline-none flex items-center justify-center relative overflow-hidden group";
  
  const variants = {
    primary: "bg-white text-black border border-white hover:border-neutral-200",
    secondary: "bg-neutral-900 text-white border border-neutral-800 hover:border-neutral-600",
    outline: "bg-transparent text-white border border-neutral-800 hover:border-white"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {/* Hover Background Shutter Effect */}
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-neutral-200 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] z-0"></div>
      )}
      {variant === 'outline' && (
        <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></div>
      )}
      
      {/* Content z-index adjustment */}
      <span className={`relative z-10 flex items-center gap-2 w-full justify-center ${variant === 'outline' ? 'group-hover:text-black transition-colors duration-300' : ''}`}>
        {children}
      </span>

      {/* Corner Accents */}
      <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-current opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
      <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-current opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
    </button>
  );
};

