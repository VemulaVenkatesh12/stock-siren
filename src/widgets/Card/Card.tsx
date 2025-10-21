import React from 'react';
import './Card.scss';

interface CardProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  image?: string;
  name?: string;
  role?: string;
  testimonial?: string;
  children?: React.ReactNode;
  variant?: 'default' | 'featured' | 'testimonial';
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
  image,
  name,
  role,
  testimonial,
  children,
  variant = 'default',
  className = '',
}) => {
  return (
    <div className={`card card--${variant} ${className}`}>
      {variant === 'testimonial' ? (
        <>
          <div className="card__testimonial-header">
            {image && (
              <img
                src={image}
                alt={name || title || 'testimonial avatar'}
                className="card__avatar"
              />
            )}
            <div>
              <h4 className="card__name">{name || title}</h4>
              <p className="card__role">{role}</p>
            </div>
          </div>
          <p className="card__testimonial-text">"{testimonial || description}"</p>
          {children && <div className="card__content">{children}</div>}
        </>
      ) : variant === 'featured' ? (
        <>
          {icon && <div className="card__icon">{icon}</div>}
          <h3 className="card__title">{title}</h3>
          <p className="card__description">{description}</p>
          {children && <div className="card__content">{children}</div>}
        </>
      ) : (
        <>
          {icon && <div className="card__icon">{icon}</div>}
          <h3 className="card__title">{title}</h3>
          <p className="card__description">{description}</p>
          {children && <div className="card__content">{children}</div>}
        </>
      )}
    </div>
  );
};

export default Card;
