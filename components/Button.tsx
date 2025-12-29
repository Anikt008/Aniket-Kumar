import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  label: string;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline';
  className?: string;
  type?: 'button' | 'submit';
}

const Button: React.FC<ButtonProps> = ({ 
  label, 
  to, 
  onClick, 
  variant = 'primary',
  className = '',
  type = 'button'
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-200 outline-none";
  
  const variants = {
    primary: "bg-gray-900 text-white hover:bg-blue-600",
    outline: "border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className="inline-block">
        <span className={combinedStyles}>
          {label}
        </span>
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      {label}
    </button>
  );
};

export default Button;