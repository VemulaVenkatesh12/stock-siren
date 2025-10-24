import React from "react";
import { Box, Card, CardContent, Typography, Stack } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Container, Row, Col } from "react-bootstrap";
import "./FeatureCard.scss";

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

interface CoursesSectionProps {
  courses: Course[];
}

const renderStars = (rating: number) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const totalStars = 5;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<StarIcon key={`full-${i}`} sx={{ color: "var(--warning)", fontSize: 19 }} />);
  }

  if (hasHalfStar) {
    stars.push(<StarHalfIcon key="half" sx={{ color: "var(--warning)", fontSize: 19 }} />);
  }

  const emptyStars = totalStars - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<StarBorderIcon key={`empty-${i}`} sx={{ color: "var(--warning)", fontSize: 19 }} />);
  }

  return stars;
};

const CoursesSection: React.FC<CoursesSectionProps> = ({ courses }) => {
  return (
    <Container fluid className="courses-section">
      <Row className="g-4">
        {courses.map((course, idx) => (
          <Col key={idx} xs={12} sm={12} md={6} lg={4} className="mb-4">
            <Card className="course-card">
              <Box className="course-image">
                <img src={course.imageUrl} alt={course.title} />
              </Box>

              <CardContent className="course-content">
                <Typography className="course-title">{course.title}</Typography>

                <Stack direction="row" alignItems="center" spacing={0.5} sx={{ mb: 0.6 }}>
                  {renderStars(course.rating)}
                  <Typography variant="body2" sx={{ color: "var(--text-secondary)", ml: 0.5 }}>
                    ({course.ratingsCount} ratings)
                  </Typography>
                </Stack>

                <Typography className="course-brand">{course.brand}</Typography>

                <Box className="course-pricing">
                  {course.originalPrice && (
                    <Typography className="original-price">
                      ₹{course.originalPrice.toLocaleString()}
                    </Typography>
                  )}
                  <Typography className="discounted-price">
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
