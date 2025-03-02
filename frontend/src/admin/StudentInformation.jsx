import React, { useState } from "react";
import { motion } from "framer-motion";
import { Pie } from "react-chartjs-2";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useTheme } from "@mui/material/styles";
import AppTheme from "../shared-theme/AppTheme";
import AppAppBarAdmin from "../dashboardMain/components/AppAppBarAdmin";
import Footer from "../dashboardMain/components/Footer";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const dummyStudentData = {
  fullName: "Jay Chinche",
  studentID: "S12345",
  email: "chinchejay@gmail.com",
  department: "Computer Science",
  semester: "5th",
  advisor: "Dr. Smith",
  paymentStatus: "Paid",
  courses: [
    { courseName: "Data Structures", instructor: "Prof. Lee", marks: 85, grade: "A" },
    { courseName: "Operating Systems", instructor: "Dr. Kim", marks: 78, grade: "B+" },
    { courseName: "Machine Learning", instructor: "Dr. Watson", marks: 92, grade: "A+" },
    { courseName: "Database Systems", instructor: "Prof. Taylor", marks: 88, grade: "A" },
  ],
};

export default function StudentInformation() {
  const theme = useTheme();
  const [studentData] = useState(dummyStudentData);

  const chartData = {
    labels: studentData.courses.map((course) => course.courseName),
    datasets: [
      {
        data: studentData.courses.map((course) => course.marks),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1500,
      easing: "easeInOutBounce",
    },
  };

  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <AppAppBarAdmin />
      <br /><br /><br /><br /><br />
      <br /><br />

      {/* Student Name Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ textAlign: "center", marginBottom: "2rem" }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          {studentData.fullName}
        </Typography>
      </motion.div>

      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {/* Student Details Card */}
          <Grid item xs={12} md={6}>
            <Card elevation={3} sx={{ borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Student Information
                </Typography>
                <Typography variant="body1"><strong>ID:</strong> {studentData.studentID}</Typography>
                <Typography variant="body1"><strong>Email:</strong> {studentData.email}</Typography>
                <Typography variant="body1"><strong>Department:</strong> {studentData.department}</Typography>
                <Typography variant="body1"><strong>Semester:</strong> {studentData.semester}</Typography>
                <Typography variant="body1"><strong>Advisor:</strong> {studentData.advisor}</Typography>
                <Typography variant="body1" sx={{ color: studentData.paymentStatus === "Paid" ? "green" : "red" }}>
                  <strong>Payment Status:</strong> {studentData.paymentStatus}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Pie Chart (Now Below Student Info) */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ padding: 3, textAlign: "center" }}>
              <Typography variant="h5" gutterBottom>
                Performance Overview
              </Typography>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                style={{ height: "250px", width: "250px", margin: "auto" }} // Smaller Pie Chart
              >
                <Pie data={chartData} options={chartOptions} />
              </motion.div>
            </Paper>
          </Grid>

          {/* Course Enrollment (Now Below Pie Chart) */}
          <Grid item xs={12}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
              <Card elevation={3} sx={{ borderRadius: 2 }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Course Enrollment
                  </Typography>
                  {studentData.courses.map((course, index) => (
                    <Paper key={index} elevation={2} sx={{ padding: 1, marginBottom: 1 }}>
                      <Typography variant="body1"><strong>{course.courseName}</strong> - {course.instructor}</Typography>
                      <Typography variant="body2">Marks: {course.marks} | Grade: {course.grade}</Typography>
                    </Paper>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </AppTheme>
  );
}
