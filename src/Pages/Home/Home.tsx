import React, { useEffect } from "react";
import "./Home.scss";
import Button from "../../widgets/Button/Button";
import Card from "../../widgets/Card/Card";
import StockMarketBackground from "../../utils/StockMarketBackground";
import {
  WorkspacePremium,
  ModelTraining,
  Groups,
  RecordVoiceOver,
  CandlestickChart,
  School,
  Psychology,
  Update,
  ShowChart,
} from "@mui/icons-material";
import Footer from "../../widgets/Fotter/Footer";
import CoursesSection from "../../widgets/featureCard/FeatureCard";
import image1 from "../../assets/6351a401e4b0456cb8336d1f_scaled_cover.jpg";
import image2 from "../../assets/65800ac4e4b0337a135c3f32_scaled_cover.jpg";
import image3 from "../../assets/67fdfbe10a64617625608052_scaled_cover.jpg";
import { enrollmentPath } from "../../utils/routes";
import { Stack, Box, Typography, Container } from "@mui/material";
import MentorSection from "../../widgets/MentorInto/MentorSction";
import { useNavigate } from "react-router-dom";
import HeaderMobile from "../../widgets/Header/Header";

// ====================== Data ======================
interface ButtonProps {
  text: string;
  variant: "primary" | "secondary";
  size: "lg" | "md" | "sm";
}

const heroContent = {
  title: "Siren to Your Financial Freedom",
  subtitle:
    "Unlock the secrets of the stock market. We provide comprehensive education, cutting-edge tools, and a supportive community to guide you towards financial mastery.",
  buttons: [
    { text: "Enroll Now", variant: "primary", size: "lg" },
    { text: "Explore Courses", variant: "secondary", size: "lg" },
  ] as ButtonProps[],
};

const aboutCards = [
  {
    title: "Expert Guidance",
    description:
      "Learn from seasoned professionals with over 50 years of combined experience in the stock market. Our mentors are not just teachers; they are active traders and investors.",
    icon: <WorkspacePremium sx={{ fontSize: 48, color: "green" }} />,
  },
  {
    title: "Practical Learning",
    description:
      "Move beyond theory. Apply your knowledge with real-world case studies, live trading sessions, and state-of-the-art trading simulators.",
    icon: <ModelTraining fontSize="large" sx={{ color: "green" }} />,
  },
  {
    title: "Community Support",
    description:
      "Join an exclusive network of ambitious traders. Share strategies, get feedback, and stay motivated with support from our thriving community.",
    icon: <Groups fontSize="large" sx={{ color: "green" }} />,
  },
];

const whyChooseUsCards = [
  {
    title: "Live Mentorship",
    description:
      "Get direct access to experts for personalized guidance, weekly Q&A sessions, and portfolio reviews.",
    icon: <RecordVoiceOver fontSize="large" sx={{ color: "green" }} />,
  },
  {
    title: "Proprietary Tools",
    description:
      "Gain an edge with our custom-built scanners, indicators, and trading simulators designed for modern markets.",
    icon: <CandlestickChart fontSize="large" sx={{ color: "green" }} />,
  },
  {
    title: "Comprehensive Curriculum",
    description:
      "Our curriculum is meticulously crafted to take you from novice to pro, covering every aspect of trading.",
    icon: <School fontSize="large" sx={{ color: "green" }} />,
  },
  {
    title: "Focus on Risk Management",
    description:
      "We heavily emphasize capital preservation and risk management strategies to ensure long-term success.",
    icon: <ShowChart fontSize="large" sx={{ color: "green" }} />,
  },
  {
    title: "Trading Psychology",
    description:
      "Master the mental game of trading with dedicated modules on discipline, patience, and emotional control.",
    icon: <Psychology fontSize="large" sx={{ color: "green" }} />,
  },
  {
    title: "Lifetime Access & Updates",
    description:
      "Enroll once and receive lifetime access to course materials and all future updates, staying ahead of market changes.",
    icon: <Update fontSize="large" sx={{ color: "green" }} />,
  },
];

const courses = [
  {
    bannerColor: "linear-gradient(90deg, #3B67E7, #6DC2FB)",
    imageUrl: image1,
    title: "Swing Trading Masterclass – Basic to Advance (Hindi)",
    rating: 5.0,
    ratingsCount: 34,
    brand: "Stock Siren",
    price: 4999,
    originalPrice: null,
  },
  {
    bannerColor: "linear-gradient(90deg, #25C9FD, #4B89F4)",
    imageUrl: image2,
    title: "Intraday Equity Trading Masterclass (S3 + S4) (Hindi + English)",
    rating: 4.9,
    ratingsCount: 11,
    brand: "Stock Siren",
    price: 4999,
    originalPrice: null,
  },
  {
    bannerColor: "linear-gradient(90deg, #F7C266, #FED617)",
    imageUrl: image3,
    title: "Forex and Crypto Trading Masterclass - Basic to Advance",
    rating: 4.3,
    ratingsCount: 2,
    brand: "Stock Siren",
    price: 7999,
    originalPrice: 9999,
  },
];

const testimonials = [
  {
    title: "Alex Johnson",
    role: "Software Developer",
    description:
      "Stock Siren completely transformed my approach to investing. The practical lessons and mentor support gave me the confidence to manage my own portfolio, and I saw a 35% return in my first year. Truly life-changing!",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAoXlpLFPu7qXHrPVlyNq6037-Hgy79IxUli2zhz_RcNc_5Pu9kWgD2dmfO_kzUl7RwyYc6aO0znA1wXe3FQ3BUl5EDASiy0k7sDlntQA-467A0qBvPW5y1Qf3EcbHl4ZDcGSfFtIBYaRuDQXO415X7HBbksAa6hDhOfy2xvRsqNoqqDe7De-PMf4KxssnmSNneamyOh1VKnyPgJntGfuSIP5EDE6Ds6aNxrBdAbpM-WPlLxHkl4GUJcmYm_E8T5M2mlNKWuncvWw",
  },
  {
    title: "Samantha Lee",
    role: "Freelance Designer",
    description:
      "As a beginner, the stock market felt incredibly intimidating. The Stock Market Mastery course broke everything down into digestible steps. The community is amazing, and I'm finally building a secure financial future.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQX2xCoVHCdCei5N-Dt1BxBzBBgsmlbiE-iCYknecsm5XPOPmYZMZClKrnudoIYGgDaUiarrcR5e-o9Wr49h8Fzc_I0c5Bt7bjtpMVOOXnvSlJi0qjeQlZHxLgZgNZXRQZ7JJDabukYPLomAbx0seiDmTCJdWnQh4kJw08YmlwyOVxyiJwT3jNpxOyjtFA7D9NyUojxw-9C7DeB1mLxwzD2XPhcspn1a3OMC4PQvenJkmGG9JkMV84ijqvFIn0mavL8Jg1EhLnBQ",
  },
];

// ====================== Component ======================
const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleEnrollClick = () => {
    navigate(enrollmentPath);
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-visible");
        }
      });
    }, observerOptions);

    // Observe all elements with animate-on-scroll class
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    // Cleanup
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <Box className="hide-scrollbar home">
      <HeaderMobile />

      <Box component="main" className="home__main">
        <Box component="section" id="home" className="home__hero">
          <Box className="home__animation">
            <StockMarketBackground />
          </Box>

          <Container maxWidth="lg" className="home__hero-content">
            <Stack spacing={3} alignItems="center">
              <Typography variant="h3" className="home__title">
                {heroContent.title}
              </Typography>
              <Typography variant="body1" className="home__subtitle">
                {heroContent.subtitle}
              </Typography>
              <Stack direction="row" spacing={2} className="home__hero-buttons">
                {heroContent.buttons.map((btn, idx) => (
                  <Button
                    key={idx}
                    variant={btn.variant}
                    size={btn.size}
                    onClick={handleEnrollClick}
                  >
                    {btn.text}
                  </Button>
                ))}
              </Stack>
            </Stack>
          </Container>
        </Box>

        {/* About Section */}
        <Box
          component="section"
          id="about"
          className="home__section animate-on-scroll"
        >
          <Container maxWidth="lg">
            <Stack
              spacing={3}
              alignItems="center"
              className="home__section-header"
            >
              <Typography variant="h2">About Stock Siren</Typography>
              <Typography variant="body1">
                Your trusted partner in the journey to financial literacy and
                independence.
              </Typography>
            </Stack>
            <Stack spacing={2} alignItems="center">
              <Typography variant="body1" className="home__section-description">
                Stock Siren is a premier stock market academy dedicated to
                empowering individuals with the knowledge and skills to navigate
                the financial markets confidently. Our mission is to demystify
                the world of trading and investment, making it accessible to
                everyone, from complete beginners to seasoned investors.
              </Typography>
            </Stack>
            <Card aboutCards={aboutCards} variant="default" />
          </Container>
        </Box>
      </Box>

      <Box component="main" className="home__main">
        {/* Why Choose Us Section */}
        <Box component="section" className="home__section animate-on-scroll">
          <Container>
            <Stack
              spacing={2}
              alignItems="center"
              className="home__section-header"
            >
              <Typography variant="h2">Why Choose Us?</Typography>
              <Typography variant="body1">
                We are committed to your success. Here's what sets us apart.
              </Typography>
            </Stack>
            <Card aboutCards={whyChooseUsCards} />
          </Container>
        </Box>

        <MentorSection />

        {/* Courses Section */}
        <Box
          component="section"
          id="courses"
          className="home__section animate-on-scroll"
          sx={{ position: "relative" }}
        >
          <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
            <Stack
              spacing={2}
              alignItems="center"
              className="home__section-header"
            >
              <Typography variant="h2">Our Flagship Courses</Typography>
              <Typography variant="body1">
                Designed for all levels, our courses provide the knowledge you
                need to succeed.
              </Typography>
            </Stack>
            <Box>
              <CoursesSection courses={courses} />
            </Box>
          </Container>
        </Box>

        {/* Success Stories Section */}
        <Box component="section" className="home__section animate-on-scroll">
          <Container maxWidth="lg">
            <Stack
              spacing={2}
              alignItems="center"
              className="home__section-header"
            >
              <Typography variant="h2">Success Stories</Typography>
              <Typography variant="body1">
                Hear what our students have to say about their journey with
                Stock Siren.
              </Typography>
            </Stack>
            <Card aboutCards={testimonials} variant="testimonial" />
          </Container>
        </Box>
      </Box>

      <Box component="section" id="footer">
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;
