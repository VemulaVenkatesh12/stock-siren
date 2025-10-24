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
import "./Footer.scss";

// Forwarding the ref to the Box element in Footer
const Footer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => (
  <Box ref={ref} className="footer" {...props}>
    <Row className="py-4 g-3">
      {/* Company Info */}
      <Col xs={12} md={3} lg={6} className="company-info">
        <Typography variant="h3" className="company-title">
          STOCK SIREN
        </Typography>
        <Typography variant="body2" className="company-description">
          Welcome to India's largest SEBI registered trading & investing
          platform. We offer education, advisory & research services.
        </Typography>

        <Box className="badge-box">
          <Typography variant="subtitle2" className="badge-title">
            SEBI Registered Research Analyst
          </Typography>
          <Typography variant="body2">XXXXXXXXXXXXXXXXXXXX</Typography>
        </Box>

        <Box className="info-box">
          {[
            ["Company Name:", "Stock Siren Technologies Private Limited"],
            ["GSTIN:", "XXXXXXXXXXXXXXX"],
            ["Compliance Officer:", "VEMULA VENKATESH"],
            ["Contact Number:", "+91-9874561320"],
            ["Accessibility Nodal Officer:", "XXXXXXXXXXXXXX"],
            ["Contact Number:", "+91-9874561320"],
            ["Email:", "sachinjadhav@stocksiren.in"],
          ].map(([label, value]) => (
            <Typography key={label} variant="subtitle2" className="info-item">
              <b>{label}</b> {value}
            </Typography>
          ))}
        </Box>
      </Col>

      {/* Quick Links */}
      <Col xs={12} md={3} lg={2} className="quick-links">
        <Typography variant="h6">Quick Links</Typography>
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
          <Typography key={item} className="link-item">
            {item}
          </Typography>
        ))}
      </Col>

      {/* Company Policies */}
      <Col xs={12} md={3} lg={2} className="company-policies">
        <Typography variant="h6">Company</Typography>
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
          <Typography key={item} className="link-item">
            {item}
          </Typography>
        ))}
      </Col>

      {/* Contact Info */}
      <Col xs={12} md={3} lg={2} className="contact-info">
        <Typography variant="h6">Contact Us</Typography>
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
          <Box key={i} className="contact-item">
            {icon} <span>{text}</span>
          </Box>
        ))}
      </Col>
    </Row>

    <Divider sx={{ my: 3, borderColor: "#333" }} />

    <Row className="align-items-center px-5 bottom-footer">
      <Col xs={12} md={8}>
        <Typography>
          ©2025 Stock Siren Technologies Private Limited. All rights reserved.
        </Typography>
      </Col>
      <Col xs={12} md={4} className="social-icons">
        <IconButton className="icon-btn">
          <FaFacebookF />
        </IconButton>
        <IconButton className="icon-btn">
          <FaLinkedinIn />
        </IconButton>
        <IconButton className="icon-btn">
          <FaYoutube />
        </IconButton>
        <IconButton className="icon-btn">
          <FaXTwitter />
        </IconButton>
      </Col>
    </Row>
  </Box>
));

export default Footer;
