import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Box, Button, Typography, Paper } from "@mui/material";
import {
  CalendarToday,
  CreditCard,
  HelpOutline,
  Lock,
  Verified,
} from "@mui/icons-material";
import CustomTextField from "../../widgets/TextField/CustomTextField";
import logoImage from "../../assets/WhatsApp Image 2025-10-20 at 6.23.12 PM.jpeg";

const EnrollmentPage: React.FC = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\s/g, "");
    return cleaned.match(/.{1,4}/g)?.join(" ") || cleaned;
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\s/g, "");
    if (value.length <= 16 && /^\d*$/.test(value)) {
      setCardNumber(formatCardNumber(value));
    }
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length >= 2) {
      value = value.slice(0, 2) + " / " + value.slice(2, 4);
    }
    if (value.length <= 7) {
      setExpiryDate(value);
    }
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= 3 && /^\d*$/.test(value)) {
      setCvv(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Payment submitted");
  };

  return (
    <Box
      sx={{
        background: "var(--background-dark)",
        minHeight: "100vh",
        color: "var(--text-primary)",
        fontFamily: "var(--font-family)",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "var(--background-dark)",
          borderBottom: "1px solid var(--border-color)",
          zIndex: 999,
          width: "100%",
          px: { lg: 4 },
          // py: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            color: "white",
          }}
        >
          <img
            src={logoImage}
            alt="Stock Siren Logo"
            style={{
              width: 80,
              height: 80,
              objectFit: "contain",
              marginRight: 12,
            }}
          />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              fontSize: "1.4rem",
              letterSpacing: "-0.015em",
              lineHeight: 1.2,
              color: "white",
              position: "relative",
              userSelect: "none",
            }}
          >
            STOCK
            <Box
              component="span"
              sx={{
                color: "var(--primary)",
                fontWeight: 700,
                mx: 0.5,
                position: "relative",
              }}
            >
              SIREN
              <Box
                component="span"
                sx={{
                  position: "absolute",
                  top: -8,
                  left: "60%",
                  bgcolor: "var(--primary)",
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  display: { xs: "none", sm: "inline-block" },
                }}
              />
            </Box>
          </Typography>
        </Box>
        <Typography
          sx={{
            color: "var(--text-tertiary)",
            fontSize: 14,
            display: { xs: "none", sm: "block" },
          }}
        >
          Siren to Your Financial Freedom.
        </Typography>
      </Box>

      <Box sx={{ height: "64px" }} />

      {/* Main Content */}
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Paper
              elevation={6}
              sx={{
                background: "var(--card-bg)",
                p: { xs: 1, md: 3 },
                borderRadius: "20px",
                border: "1px solid var(--border-color)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
              }}
            >
              {/* Shield Icon */}
              <Box textAlign="center">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <circle
                    cx="40"
                    cy="40"
                    r="40"
                    fill="rgba(var(--primary), 0.1)"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="32"
                    fill="rgba(var(--primary), 0.15)"
                  />
                  <path
                    d="M40 20C40 20 28 24 28 28V38C28 46 34 52 40 56C46 52 52 46 52 38V28C52 24 40 20 40 20Z"
                    stroke="var(--primary)"
                    strokeWidth="2.5"
                    fill="none"
                  />
                  <path
                    d="M34 38L38 42L46 34"
                    stroke="var(--primary)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Box>

              <Typography
                variant="h4"
                sx={{
                  color: "var(--text-primary)",
                  fontWeight: 600,
                  textAlign: "center",
                  mb: 1.5,
                }}
              >
                Complete Your Enrollment
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  color:
                    "var(--text-secondary)" /* Use --text-secondary instead of #999999 */,
                  mb: 4,
                }}
              >
                Securely checkout with Razorpay
              </Typography>

              {/* Course Info */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "var(--background-dark)",
                  borderRadius: "8px",
                  p: 2,
                  mb: 4,
                  flexDirection: { xs: "column", sm: "row" },
                  gap: { xs: 2, sm: 0 },
                }}
              >
                <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      color: "var(--text-primary)",
                    }}
                  >
                    Stock Market Mastery Course
                  </Typography>
                  <Typography
                    sx={{
                      color: "var(--text-tertiary)",
                      fontSize: 13,
                    }}
                  >
                    Total amount to be paid
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                  }}
                >
                  $500.00
                </Typography>
              </Box>

              {/* Payment Form */}
              <Box component="form" onSubmit={handleSubmit}>
                {/* Card Number */}
                <CustomTextField
                  label="Card Number"
                  placeholder="0000 0000 0000 0000"
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                  inputMode="numeric"
                  maxLength={19} // including spaces
                  startIcon={<CreditCard />}
                />

                <Row className="g-3">
                  <Col xs={12} sm={6}>
                    <CustomTextField
                      label="Expiry Date"
                      placeholder="MM / YY"
                      value={expiryDate}
                      onChange={handleExpiryChange}
                      maxLength={7}
                      startIcon={<CalendarToday />}
                    />
                  </Col>
                  <Col xs={12} sm={6}>
                    <CustomTextField
                      label="CVV"
                      placeholder="***"
                      value={cvv}
                      onChange={handleCvvChange}
                      inputMode="numeric"
                      maxLength={3}
                      endIcon={<HelpOutline />}
                    />
                  </Col>
                </Row>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 4,
                    background: "var(--primary)",
                    color: "#000000",
                    fontSize: "16px",
                    fontWeight: 600,
                    padding: "16px",
                    borderRadius: "10px",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background:
                        "linear-gradient(135deg, var(--primary) 0%, var(--text-tertiary) 100%)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  Pay Securely
                </Button>

                {/* Security Badges */}
                <Row className="mt-4 text-center justify-content-center">
                  <Col xs="auto">
                    <Box
                      className="d-flex align-items-center gap-2"
                      sx={{
                        color: "var(--text-tertiary)",
                      }}
                    >
                      <Lock sx={{ fontSize: 16 }} />
                      <Typography variant="body2">100% Secure</Typography>
                    </Box>
                  </Col>
                  <Col xs="auto">
                    <Box
                      className="d-flex align-items-center gap-2"
                      sx={{
                        color: "var(--text-tertiary)",
                      }}
                    >
                      <Verified sx={{ fontSize: 16 }} />
                      <Typography variant="body2">SSL Encrypted</Typography>
                    </Box>
                  </Col>
                </Row>
              </Box>
            </Paper>
          </Col>
        </Row>
      </Container>
    </Box>
  );
};

export default EnrollmentPage;
