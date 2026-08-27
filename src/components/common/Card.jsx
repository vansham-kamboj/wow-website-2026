import React from 'react';

const Card = ({ children, className = '', hoverEffect = true, glass = false, onClick, ...props }) => {
  const baseClasses = "relative overflow-hidden transition-all duration-300";
  const bgClass = glass ? "bg-[var(--color-bg-card-transparent)] backdrop-blur-[8px]" : "bg-white";
  const borderClass = glass ? "border border-[var(--color-border-card-glass)]" : "border border-gray-100";
  const shadowClass = "shadow-[var(--shadow-card-idle)]";
  const hoverClass = hoverEffect ? "hover:-translate-y-2 hover:shadow-[var(--shadow-card-hover)]" : "";
  const radiusClass = "rounded-[var(--radius-card,16px)]";
  
  // Optional default padding if the caller doesn't specify p-* classes
  const paddingClass = className.includes('p-') || className.includes('p[') ? '' : 'p-[var(--card-padding,2rem)]';

  return (
    <div 
      className={`${baseClasses} ${bgClass} ${borderClass} ${shadowClass} ${hoverClass} ${radiusClass} ${paddingClass} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
