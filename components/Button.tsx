import React from 'react';

type ButtonBaseProps = {
  variant?: 'primary' | 'outline' | 'text';
  children: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
};

type ButtonAsButton = ButtonBaseProps & React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
type ButtonAsLink = ButtonBaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  fullWidth = false,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 rounded-full transition-all duration-300 font-sans tracking-wide text-sm md:text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ozzy-rose-dark cursor-pointer decoration-0";
  
  const variants = {
    primary: "bg-ozzy-rose hover:bg-ozzy-rose-dark text-ozzy-heading shadow-md hover:shadow-lg transform hover:-translate-y-0.5 border-none",
    outline: "border-2 border-ozzy-rose text-ozzy-heading hover:bg-ozzy-rose hover:text-white bg-transparent",
    text: "bg-transparent text-ozzy-text hover:text-ozzy-rose-dark underline-offset-4 hover:underline p-0 px-0 shadow-none hover:translate-y-0"
  };

  const widthClass = fullWidth ? 'w-full' : '';
  const combinedClassName = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;

  if ('href' in props && props.href) {
    return (
      <a className={combinedClassName} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button 
      className={combinedClassName}
      {...props as React.ButtonHTMLAttributes<HTMLButtonElement>}
    >
      {children}
    </button>
  );
};

export default Button;