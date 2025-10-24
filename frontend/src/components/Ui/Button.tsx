import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    className?: string;
}

 const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    className = '',
    ...props
 }) => {
    const baseStyles = 
    'px-4 py-2 flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
    
    const variantStyles = {
    // Primary: o botão roxo "+ New Lead"
    primary: 'bg-blue-400 text-white hover:bg-blue-600 focus:ring-purple-500', 
    // Secondary: para botões de ação menos destacados ou dentro de modais (Cancelar)
    secondary: 'bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200 focus:ring-gray-400', 
  };
  const classes = [
    baseStyles,
    variantStyles[variant],
    className,
  ].join(' ');
return (
   <button className={classes} {...props}>
    {children}
   </button>
 );
}

export default Button;