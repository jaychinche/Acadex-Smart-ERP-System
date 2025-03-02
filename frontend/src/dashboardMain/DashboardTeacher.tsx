import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppTheme from '../shared-theme/AppTheme';
import AppAppBarUser from './components/AppAppBarTeacher';
import HeroCommon from './components/HeroCommon';

import Footer from './components/Footer';
import AppAppBarTeacher from './components/AppAppBarTeacher';

export default function DashboardUser(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBarTeacher />
      <HeroCommon/>
      <div>
        <Footer />
      </div>
    </AppTheme>
  );
}
