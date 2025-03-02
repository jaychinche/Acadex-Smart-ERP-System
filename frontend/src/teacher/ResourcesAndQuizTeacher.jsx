import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import AppTheme from "../shared-theme/AppTheme";
import AppAppBarTeacher from "../dashboardMain/components/AppAppBarTeacher";
import Footer from "../dashboardMain/components/Footer";
import { Link, useParams } from 'react-router-dom'; // Import useParams

export default function ResourcesAndQuiz(props) {
  const { id } = useParams(); // Fetch courseId from the URL
  console.log(id);

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBarTeacher />
      <br /><br /><br /><br />
      <br /><br /><br /><br />

      <Container maxWidth="md">
        {/* Heading with animation */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: "bold" }}>
            Educational Resources & Quizzes
          </Typography>
        </motion.div>

        {/* Card Section */}
        <Grid container spacing={3} mt={2}>
          {["Add Resources", "Add Quiz"].map((title, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: index * 0.1 }}>
                <Card sx={{ backgroundColor: "#fff", borderRadius: 2, boxShadow: 3, transition: "0.3s", "&:hover": { boxShadow: 6 } }}>
                  <CardContent sx={{ textAlign: "center", p: 3 }}>
                    <Typography variant="h5" gutterBottom>{title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {title === "Add Resources"
                        ? "Explore a curated collection of study materials, articles, and reference guides to enhance your learning experience."
                        : "Test your knowledge with interactive quizzes designed to reinforce key concepts and track your progress."}
                    </Typography>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <Button
                        variant="contained"
                        fullWidth
                        sx={{ backgroundColor: "#000", color: "#fff", "&:hover": { backgroundColor: "#FF1493" }, mt: 2 }}
                        component={Link} // Use the Link component
                        to={title === "Add Resources" ? `/course-details/${id}/resource` : `/course-details/${id}/quiz`} // Dynamic route
                      >
                        {title}
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      <br /><br /><br /><br />
      <Footer />
    </AppTheme>
  );
}