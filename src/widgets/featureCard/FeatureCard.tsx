import React from "react";
import { Box, Card, CardContent, Typography, Stack } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Container, Row, Col } from "react-bootstrap";

// Define the Course type
interface Course {
  bannerColor: string;
  imageUrl: string;
  title: string;
  rating: number;
  ratingsCount: number;
  brand: string;
  price: number;
  originalPrice: number | null;
}

// Define the props for CoursesSection
interface CoursesSectionProps {
  courses: Course[];
}

// ⭐ Function to render stars dynamically
const renderStars = (rating: number) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const totalStars = 5;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<StarIcon key={`full-${i}`} sx={{ color: "#FFD700", fontSize: 19 }} />);
  }

  if (hasHalfStar) {
    stars.push(<StarHalfIcon key="half" sx={{ color: "#FFD700", fontSize: 19 }} />);
  }

  const emptyStars = totalStars - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<StarBorderIcon key={`empty-${i}`} sx={{ color: "#FFD700", fontSize: 19 }} />);
  }

  return stars;
};

const CoursesSection: React.FC<CoursesSectionProps> = ({ courses }) => {
  return (
    <Container fluid className="py-4">
      <Row className="g-4">
        {courses.map((course, idx) => (
          <Col key={idx} xs={12} sm={12} md={6} lg={4}>
            <Card
              sx={{
                width: "100%",
                height: 430,
                borderRadius: "20px",
                boxShadow: "0 10px 15px -3px rgba(17, 212, 17, 1)",
                background: "var(--background-dark)",
                color: "var(--text-primary)",
                display: "flex",
                flexDirection: "column",
                border: "1px solid var(--border-color)",
                overflow: "hidden",
                fontFamily: "var(--font-family)",
              }}
            >
              {/* Image Section */}
              <Box
                sx={{
                  height: "50%",
                  width: "100%",
                  background: "var(--card-bg)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
                <img
                  src={course.imageUrl}
                  alt={course.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Box>

              {/* Content Section */}
              <CardContent
                sx={{
                  height: "50%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  px: 3,
                  py: 2,
                  gap: 0.5,
                }}
              >
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  sx={{
                    color: "var(--text-primary)",
                    textAlign: "left",
                    fontSize: 18,
                    lineHeight: 1.25,
                    mb: 1,
                  }}
                >
                  {course.title}
                </Typography>

                {/* ⭐ Ratings Section */}
                <Stack direction="row" alignItems="center" spacing={0.5} sx={{ mb: 0.6 }}>
                  {renderStars(course.rating)}
                  <Typography variant="body2" sx={{ color: "var(--text-secondary)", ml: 0.5 }}>
                    ({course.ratingsCount} ratings)
                  </Typography>
                </Stack>

                <Typography variant="body2" sx={{ color: "var(--text-tertiary)", mb: 1 }}>
                  {course.brand}
                </Typography>

                <Box sx={{ mt: "auto", display: "flex", alignItems: "center", gap: 1 }}>
                  {course.originalPrice && (
                    <Typography
                      variant="body1"
                      sx={{
                        textDecoration: "line-through",
                        color: "var(--danger)",
                        fontSize: 16,
                      }}
                    >
                      ₹{course.originalPrice.toLocaleString()}
                    </Typography>
                  )}
                  <Typography
                    variant="h5"
                    component="span"
                    sx={{
                      fontWeight: 700,
                      color: "var(--primary)",
                      fontSize: 22,
                    }}
                  >
                    ₹{course.price.toLocaleString()}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CoursesSection;
