import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppTheme from '../shared-theme/AppTheme';
import AppAppBarCommon from './components/AppAppBarCommon';

import Footer from './components/Footer';
import HeroCommon from './components/HeroCommon';

export default function DashboardCommon(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme /> 
      <AppAppBarCommon />
      <HeroCommon />
      <div>
        <Footer />

      </div>
    </AppTheme>
  );
}
