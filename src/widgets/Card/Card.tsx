/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Card.scss";

interface CardProps {
  aboutCards?: Array<Record<string, any>>;
  variant?: "default" | "featured" | "testimonial";
}

const Card: React.FC<CardProps> = ({
  aboutCards = [],
  variant = "default",
}) => {
  return (
    <Container className="py-4">
      <Row className="g-4" xs={1} sm={1} md={2} lg={3} xl={3} xxl={3}>
        {aboutCards.map((card, idx) => (
          <Col key={idx} className="d-flex mb-4">
            <div className={`card card--${variant} h-100 w-100`}>
              {variant === "testimonial" ? (
                <>
                  {card.image && (
                    <img
                      src={card.image}
                      alt={card.name || card.title || "testimonial avatar"}
                      className="card__avatar"
                    />
                  )}
                  <h4 className="card__name">{card.name || card.title}</h4>
                  <p className="card__role">{card.role}</p>
                  <p className="card__testimonial-text">
                    "{card.testimonial || card.description}"
                  </p>
                </>
              ) : (
                <>
                  {card.icon && <div className="card__icon">{card.icon}</div>}
                  <h3 className="card__title">{card.title}</h3>
                  <p className="card__description">{card.description}</p>
                </>
              )}
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Card;
