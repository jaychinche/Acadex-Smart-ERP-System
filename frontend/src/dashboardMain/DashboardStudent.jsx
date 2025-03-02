import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppTheme from '../shared-theme/AppTheme';

import HeroCommon from './components/HeroCommon';
import Footer from './components/Footer';
// import AppAppBarStudent from './components/AppAppBarStudent';
import AppAppBarTeacher from './components/AppAppBarTeacher';
import AppAppBarStudent from './components/AppAppBarStudent';

export default function DashboardStudent( ) {
  return (
    <AppTheme >
      <CssBaseline enableColorScheme />
      <AppAppBarStudent />
      <HeroCommon/>
      <div>
        <Footer />
      </div>
    </AppTheme>
  );
}
