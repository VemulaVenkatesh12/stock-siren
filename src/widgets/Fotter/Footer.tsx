import React from "react";
import { Box, Typography, Divider, IconButton } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import { WhatsApp, AccessTime, Email, Phone } from "@mui/icons-material";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

// Forwarding the ref to the Box element in Footer
const Footer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => (
  <Box
    ref={ref}
    sx={{
      background: "#16171d",
      color: "#fff",
      borderRadius: "8px",
      px: 5,
      wordSpacing: "2px",
      lineHeight: 1.6,
      border: "3px solid rgba(255, 255, 255, 0.1)", // soft border
      boxShadow:
        "0 2px 10px rgba(244, 239, 239, 1), 0 4px 20px rgba(245, 224, 224, 0.86)",
    }}
    {...props}
  >
    <Row className="py-4">
      {/* === Company Info === */}
      <Col md={5} sm={6} xs={12}>
        <Typography
          variant="h3"
          sx={{
            color: "#72ff89",
            fontWeight: "bold",
            mb: 1,
            letterSpacing: "1px",
          }}
        >
          STOCK SIREN
        </Typography>
        <Typography variant="body2" sx={{ mb: 1, lineHeight: 1.7 }}>
          Welcome to India's largest SEBI registered trading & investing
          platform. We offer education, advisory & research services.
        </Typography>
        <Box
          sx={{
            background: "#25272e",
            p: 1,
            borderRadius: "8px",
            mt: 2,
          }}
        >
          <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
            SEBI Registered Research Analyst
          </Typography>
          <Typography variant="body2">XXXXXXXXXXXXXXXXXXXX</Typography>
        </Box>
        <Box sx={{ mt: 2, background: "#25272e", borderRadius: "8px", p: 2 }}>
          {[
            ["Company Name:", "Stock Siren Technologies Private Limited"],
            ["GSTIN:", "XXXXXXXXXXXXXXX"],
            ["Compliance Officer:", "VEMULA VENKATESH"],
            ["Contact Number:", "+91-9874561320"],
            ["Accessibility Nodal Officer:", "XXXXXXXXXXXXXX"],
            ["Contact Number:", "+91-9874561320"],
            ["Email:", "sachinjadhav@stocksiren.in"],
          ].map(([label, value]) => (
            <Typography
              key={label}
              variant="subtitle2"
              sx={{ mb: 0.8, lineHeight: 1.7, wordSpacing: "3px" }}
            >
              <b>{label}</b> {value}
            </Typography>
          ))}
        </Box>
      </Col>

      {/* === Quick Links === */}
      <Col md={2} sm={6} xs={12}>
        <Typography
          variant="h6"
          sx={{
            color: "#ffdd57",
            mb: 1.5,
            fontWeight: 600,
            letterSpacing: "0.5px",
          }}
        >
          Quick Links
        </Typography>
        {[
          "About Us",
          "Membership",
          "Features",
          "FAQs",
          "Contact Us",
          "Investor Charter",
          "Complaints",
          "SEBI Audit Report",
        ].map((item) => (
          <Typography
            key={item}
            sx={{
              color: "#bbb",
              mb: 0.8,
              cursor: "pointer",
              transition: "color 0.3s ease",
              wordSpacing: "4px",
              "&:hover": { color: "#fff" },
            }}
          >
            {item}
          </Typography>
        ))}
      </Col>

      {/* === Company Policies === */}
      <Col md={2} sm={6} xs={12}>
        <Typography
          variant="h6"
          sx={{
            color: "#ffdd57",
            mb: 1.5,
            fontWeight: 600,
            letterSpacing: "0.5px",
          }}
        >
          Company
        </Typography>
        {[
          "Disclaimer",
          "Disclosure",
          "Grievance Policy",
          "SEBI Scores",
          "Terms & Conditions",
          "Privacy Policy",
          "Refund Policy",
          "Careers",
        ].map((item) => (
          <Typography
            key={item}
            sx={{
              color: "#bbb",
              mb: 0.8,
              cursor: "pointer",
              transition: "color 0.3s ease",
              wordSpacing: "4px",
              "&:hover": { color: "#fff" },
            }}
          >
            {item}
          </Typography>
        ))}
      </Col>

      {/* === Contact Info === */}
      <Col md={2} sm={6} xs={12}>
        <Typography
          variant="h6"
          sx={{
            color: "#ffdd57",
            mb: 1.5,
            fontWeight: 600,
            letterSpacing: "0.5px",
          }}
        >
          Contact Us
        </Typography>

        {[
          {
            icon: <Phone fontSize="small" />,
            text: "+91-9874563210 | +91-9632587410",
          },
          {
            icon: <AccessTime fontSize="small" />,
            text: "10:00 am to 9:00 pm (Mon - Sun)",
          },
          { icon: <WhatsApp fontSize="small" />, text: "+91-9874563210" },
          { icon: <WhatsApp fontSize="small" />, text: "+91-9632587410" },
          { icon: <Email fontSize="small" />, text: "help@stocksiren.in" },
        ].map(({ icon, text }, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              mb: 1,
              span: { wordSpacing: "3px" },
            }}
          >
            {icon} <span>{text}</span>
          </Box>
        ))}
      </Col>
    </Row>

    <Divider sx={{ my: 3, borderColor: "#333" }} />

    {/* === Bottom Footer === */}
    <Row className="align-items-center px-5">
      <Col md={8}>
        <Typography
          sx={{ fontSize: "15px", color: "#aaa", wordSpacing: "2px" }}
        >
          ©2025 Stock Siren Technologies Private Limited. All rights reserved.
        </Typography>
      </Col>

      <Col
        md={4}
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <IconButton sx={{ color: "#fff" }}>
          <FaFacebookF />
        </IconButton>
        <IconButton sx={{ color: "#fff" }}>
          <FaLinkedinIn />
        </IconButton>
        <IconButton sx={{ color: "#fff" }}>
          <FaYoutube />
        </IconButton>
        <IconButton sx={{ color: "#fff" }}>
          <FaXTwitter />
        </IconButton>
      </Col>
    </Row>
  </Box>
));

export default Footer;
