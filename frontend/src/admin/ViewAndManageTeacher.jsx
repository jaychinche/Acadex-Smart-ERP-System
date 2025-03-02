import React from "react";
import { useNavigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { motion } from "framer-motion";
import AppTheme from "../shared-theme/AppTheme";
import AppAppBarAdmin from "../dashboardMain/components/AppAppBarAdmin";
import Footer from "../dashboardMain/components/Footer";

export default function ViewAndManageTeacher(props) {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBarAdmin />
      <br /><br /><br /><br />
      <br /><br /><br /><br />

      <Container maxWidth="md">
        {/* Heading with animation */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: "bold" }}>
            View and Manage Teacher
          </Typography>
        </motion.div>

        {/* Card Section */}
        <Grid container spacing={3} mt={2}>
          {[
            { title: "View", path: "/teacher-list" },
            { title: "Manage", path: "/add-teacher" },
          ].map((item, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: index * 0.1 }}>
                <Card sx={{ backgroundColor: "#fff", borderRadius: 2, boxShadow: 3, transition: "0.3s", "&:hover": { boxShadow: 6 } }}>
                  <CardContent sx={{ textAlign: "center", p: 3 }}>
                    <Typography variant="h5" gutterBottom>{item.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.title === "View"
                        ? "Access and analyze institutional data, reports, and statistics."
                        : "Organize and oversee educational resources, schedules, and finances."}
                    </Typography>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <Button
                        variant="contained"
                        fullWidth
                        sx={{ backgroundColor: "#000", color: "#fff", "&:hover": { backgroundColor: "#FF1493" }, mt: 2 }}
                        onClick={() => navigate(item.path)}
                      >
                        Go to {item.title}
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
