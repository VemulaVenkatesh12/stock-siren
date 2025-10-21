import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Box, Typography, Paper } from "@mui/material";
import mentorImg from "../../assets/sachin.jpeg";

// Mentor data as a separate list (or array of objects)
const mentors = [
  {
    name: "SACHIN JADHAV",
    title: "Founder & CEO, Stock Siren Technologies Private Limited",
    description: `Hello everyone! I'm Sachin, a SEBI and NISM registered and
      certified research analyst. I have over 10 years of trading and
      investing experience, specializing in institutional stock trading.
      My educational background is rich in the finance domain, including
      an MBA in Finance, Financial Modelling and Valuation Analyst (FMVA)
      certification, and I am a CFA Level III candidate.`,
    badge: {
      code: "SEBI",
      label: "SEBI Registered Research Analyst",
      regNumber: "XXXXXXXXXXXXXXXXX",
    },
    image: mentorImg,
  },
];

const MentorSection: React.FC = () => (
  <Container>
    <Typography
      variant="h2"
      align="center"
      sx={{
        fontWeight: 700,
        mb: 4,
        color: "var(--text-primary)",
      }}
    >
      Meet Your Mentor
    </Typography>

    {mentors.map((mentor, index) => (
      <Paper
        key={index}
        elevation={3}
        sx={{
          borderRadius: 4,
          background: "rgba(130, 132, 137, 0.95)",
          p: { xs: 2, md: 6 },
          mb: 2,
          boxShadow: "0 10px 15px -3px rgba(247, 251, 247, 1)",
        }}
      >
        <Row>
          <Col md={7} xs={12}>
            <Typography
              variant="h3"
              sx={{ mb: 2, color: "var(--text-primary)" }}
            >
              {mentor.name}
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ fontWeight: 500, mb: 2, color: "var(--text-secondary)" }}
            >
              {mentor.title}
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              {mentor.description}
            </Typography>
            <Box
              sx={{
                background: "linear-gradient(90deg,#167c36 0%,#153e2c 100%)",
                borderRadius: 3,
                py: 2,
                px: 3,
                display: "inline-flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box
                component="span"
                sx={{
                  bgcolor: "var(--primary)",
                  borderRadius: "50%",
                  width: 32,
                  height: 32,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  color: "#fff",
                  fontSize: 18,
                }}
              >
                {mentor.badge.code}
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: 18,
                    fontWeight: 600,
                    lineHeight: 1,
                  }}
                >
                  {mentor.badge.label}
                </Typography>
                <Typography
                  sx={{
                    color: "var(--text-primary)",
                    fontWeight: 600,
                    fontSize: 21,
                  }}
                >
                  {mentor.badge.regNumber}
                </Typography>
              </Box>
            </Box>
          </Col>
          <Col
            md={5}
            xs={12}
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: 320 }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <img
                src={mentor.image}
                style={{
                  borderRadius: 24,
                  maxWidth: 320,
                  width: "100%",
                  boxShadow: "0 4px 24px rgba(0, 0, 0, 1)",
                }}
              />
            </Box>
          </Col>
        </Row>
      </Paper>
    ))}
  </Container>
);

export default MentorSection;
