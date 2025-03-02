import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppTheme from '../shared-theme/AppTheme';
import AppAppBarAdmin from './components/AppAppBarAdmin';
import HeroAdmin from './components/HeroCommon';
import Footer from './components/Footer';
export default function Dashboard(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBarAdmin />
      <HeroAdmin />
      <div>
      <Footer />
      </div>
    </AppTheme>
  );
}
