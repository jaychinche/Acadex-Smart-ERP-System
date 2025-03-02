import * as React from 'react';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import AppTheme from "../shared-theme/AppTheme";
import AppAppBarStudent from "../dashboardMain/components/AppAppBarStudent";
import Footer from "../dashboardMain/components/Footer";

const Card = styled(motion(MuiCard))(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '75%',
  height: '50%', // Make the card take full height
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '100%', // Remove maxWidth constraint to make it full screen
  },
  boxShadow: 'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
}));

const ResourceAndQuizContainer = styled(Stack)(({ theme }) => ({
  height: '100vh', // Full screen height
  minHeight: '100%',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
}));

export default function ResourceAndQuizStudent() {
  const [activeTab, setActiveTab] = React.useState('resources');

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <AppTheme>
      {/* <CssBaseline enableColorScheme /> */}
      <AppAppBarStudent />
      <ResourceAndQuizContainer direction="column" justifyContent="center">
        <Card
          variant="outlined"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography component="h1" variant="h4">Learning Portal</Typography>
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <Button
              variant={activeTab === 'resources' ? 'contained' : 'outlined'}
              onClick={() => handleTabChange('resources')}
            >
              Resources
            </Button>
            <Button
              variant={activeTab === 'quizzes' ? 'contained' : 'outlined'}
              onClick={() => handleTabChange('quizzes')}
            >
              Quizzes
            </Button>
          </Box>
          {activeTab === 'resources' && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box>
                <Typography variant="h6">Introduction to Algorithms</Typography>
                <Typography variant="body2" color="textSecondary">Posted: 2023-08-15</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 1 }}
                  onClick={() => window.open('https://drive.google.com/drive/u/0/folders/1KPkmkEKZNtvIaDEyGDJ7aKR4cAgimivw', '_blank')}
                >
                  Open Resource
                </Button>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6">Database Systems Lecture Notes</Typography>
                <Typography variant="body2" color="textSecondary">Posted: 2023-08-14</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 1 }}
                  onClick={() => window.open('https://drive.google.com/drive/u/0/folders/1KPkmkEKZNtvIaDEyGDJ7aKR4cAgimivw', '_blank')}
                >
                  Open Resource
                </Button>
              </Box>
            </motion.div>
          )}
          {activeTab === 'quizzes' && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box>
                <Typography variant="h6">Week 1 - Algorithms Quiz</Typography>
                <Typography variant="body2" color="textSecondary">Due: 2023-08-20</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 1 }}
                  onClick={() => window.open('[QUIZ_LINK]', '_blank')}
                >
                  Start Quiz
                </Button>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6">Database Systems Midterm</Typography>
                <Typography variant="body2" color="textSecondary">Due: 2023-08-25</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 1 }}
                  onClick={() => window.open('[QUIZ_LINK]', '_blank')}
                >
                  Start Quiz
                </Button>
              </Box>
            </motion.div>
          )}
        </Card>
      </ResourceAndQuizContainer>
      <Footer />
    </AppTheme>
  );
}