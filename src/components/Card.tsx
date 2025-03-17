
import React from 'react';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, children, icon, className = '' }) => {
  return (
    <div className={`relative bg-white rounded-xl border border-gray-200 p-6 shadow-sm transition-all hover:shadow-md animate-scale-in ${className}`}>
      {icon && (
        <div className="absolute -top-4 -right-4 bg-primary rounded-full p-2 text-white shadow-md">
          {icon}
        </div>
      )}
      {title && <h3 className="text-xl font-semibold mb-2">{title}</h3>}
      <div>{children}</div>
    </div>
  );
};

export default Card;
