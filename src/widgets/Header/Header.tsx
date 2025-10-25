import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useNavigate } from "react-router-dom";
import logoImage from "../../assets/WhatsApp_Image_2025-10-20_at_6.23.12_PM-removebg-preview.png";
import "./Header.scss";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Courses", id: "courses" },
  { name: "Contact", id: "footer" },
];

const HeaderMobile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const handleSignUpClick = () => {
    setOpenDrawer(false);
    navigate("/signup");
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "919972057006";
    const message = "Hello! I would like to know more about your services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="header-mobile">
      <AppBar position="fixed" className="appbar">
        <Toolbar className="toolbar">
          {/* Logo */}
          <Box className="logo-container">
            <img src={logoImage} alt="Logo" />
            <Typography className="logo-text">
              STOCK<span>SIREN</span>
            </Typography>
          </Box>

          {/* Desktop Navigation */}
          <Box className="nav-links">
            {navLinks.map(({ name, id }) => (
              <Button
                key={id}
                onClick={() =>
                  document
                    .getElementById(id)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className={activeTab === id ? "active" : ""}
              >
                {name}
              </Button>
            ))}
          </Box>

          {/* Right Actions */}
          <Box className="right-actions">
            {/* ✅ WhatsApp Clickable */}
            <IconButton
              className="whatsapp-icon"
              onClick={handleWhatsAppClick}
              title="Chat on WhatsApp"
            >
              <WhatsAppIcon fontSize="large" sx={{ color: "#25D366" }} />
            </IconButton>

            <Button className="signup-button" onClick={handleSignUpClick}>
              Sign Up
            </Button>

            <IconButton
              className="menu-icon"
              onClick={() => setOpenDrawer(true)}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile Menu */}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        className="drawer"
      >
        <List>
          {navLinks.map(({ name, id }) => (
            <ListItem key={id} disablePadding>
              <ListItemButton
                onClick={() =>
                  document
                    .getElementById(id)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className={activeTab === id ? "active" : ""}
              >
                <ListItemText primary={name} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton
              onClick={handleSignUpClick}
              className="signup-drawer"
            >
              Sign Up
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default HeaderMobile;
