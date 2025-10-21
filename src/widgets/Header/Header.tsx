import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import logoImage from "../../assets/WhatsApp_Image_2025-10-20_at_6.23.12_PM-removebg-preview.png";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Courses", id: "courses" },
  { name: "Contact", id: "footer" },
];

const Header: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observerOptions = {
      threshold: 0.5, // 50% visibility
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: "#14141c",
        borderBottom: "1px solid #222",
        boxShadow: "none",
        zIndex: 1000,
      }}
    >
      <Toolbar
        sx={{
          width: "100%",
          my: "8px",
          px: { xs: 1, md: 2, lg: 3 },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo & Title */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            color: "white",
          }}
        >
          <img
            src={logoImage}
            style={{
              width: 100,
              height: 100,
              objectFit: "contain",
              marginRight: 12,
            }}
          />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              fontSize: "1.5rem",
              color: "var(--text-primary)",
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

        {/* Navigation Buttons */}
        <Box sx={{ display: "flex", gap: 3 }}>
          {navLinks.map(({ name, id }) => (
            <Button
              key={id}
              onClick={() => {
                const section = document.getElementById(id);
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              sx={{
                cursor: "pointer",
                color: activeTab === id ? "var(--primary)" : "#bfbfbf",
                bgcolor:
                  activeTab === id ? "rgba(34,255,34,0.08)" : "transparent",
                fontWeight: 500,
                fontSize: "1.3rem",
                px: 2,
                borderRadius: 3,
                textTransform: "none",
                transition: "color 0.2s, background 0.2s",
                "&:hover": {
                  bgcolor: "rgba(34,255,34,0.16)",
                  color: "var(--primary)",
                },
              }}
            >
              {name}
            </Button>
          ))}
        </Box>

        {/* Action Buttons */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton>
            <WhatsAppIcon sx={{ color: "#fff", fontSize: 29 }} />
          </IconButton>
          <Button
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: "var(--primary)",
              borderRadius: "2em",
              fontWeight: 700,
              px: 3,
              py: 1.15,
              fontSize: "1rem",
              textTransform: "none",
              bgcolor: "transparent",
              "&:hover": {
                bgcolor: "rgba(34,255,34,0.2)",
                color: "var(--primary)",
                borderColor: "var(--primary)",
              },
              boxShadow: "none",
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
