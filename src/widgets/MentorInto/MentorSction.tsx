import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Box, Typography, Paper } from "@mui/material";
import mentorImg from "../../assets/sachin.jpeg";
import "./MentorSection.scss";

const mentors = [
  {
    name: "SACHIN JADHAV",
    title: "Founder & CEO, Stock Siren Technologies Private Limited",
    description: `Hello everyone! I'm Sachin, a SEBI and NISM registered and certified research analyst. 
    I have over 10 years of trading and investing experience, specializing in institutional stock trading.
    My educational background is rich in the finance domain, including an MBA in Finance, Financial Modelling 
    and Valuation Analyst (FMVA) certification, and I am a CFA Level III candidate.`,
    badge: {
      code: "SEBI",
      label: "SEBI Registered Research Analyst",
      regNumber: "XXXXXXXXXXXXXXXXX",
    },
    image: mentorImg,
  },
];

const MentorSection: React.FC = () => (
  <Container className="mentor-section">
    <Typography variant="h2" className="section-title">
      Meet Your Mentor
    </Typography>

    {mentors.map((mentor, index) => (
      <Paper key={index} elevation={3} className="mentor-card">
        <Row className="align-items-center">
          <Col
            md={{ span: 5, order: 2 }}
            xs={{ span: 12, order: 1 }}
            className="mentor-img-col"
          >
            <Box>
              <img src={mentor.image} alt={mentor.name} />
            </Box>
          </Col>

          <Col
            md={{ span: 7, order: 1 }}
            xs={{ span: 12, order: 2 }}
            className="mentor-text-col"
          >
            <Typography className="mentor-name">{mentor.name}</Typography>
            <Typography className="mentor-title">{mentor.title}</Typography>
            <Typography className="mentor-description">
              {mentor.description}
            </Typography>

            <Box className="mentor-badge">
              <Box className="badge-code">{mentor.badge.code}</Box>
              <Box className="badge-text">
                <Typography className="badge-label">
                  {mentor.badge.label}
                </Typography>
                <Typography className="badge-reg">
                  {mentor.badge.regNumber}
                </Typography>
              </Box>
            </Box>
          </Col>
        </Row>
      </Paper>
    ))}
  </Container>
);

export default MentorSection;
