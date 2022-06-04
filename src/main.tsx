import React from 'react';
import ReactDOM from 'react-dom/client';

// font imports
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// @mui imports
import { Box, Stack, ThemeProvider } from '@mui/material';
import BedroomBabyIcon from '@mui/icons-material/BedroomBaby';

// theming
import { theme } from './theming/theme';
import { SuccessSlider } from './components/Slider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Stack spacing={6}>
        <Box>
          Icons: <BedroomBabyIcon />
        </Box>
        <Box>
          vite env: <Box>{import.meta.env.VITE_APP_TITLE}</Box>
        </Box>
        <Box>
          Custom styled components: <SuccessSlider />
        </Box>
      </Stack>
    </ThemeProvider>
  </React.StrictMode>,
);
