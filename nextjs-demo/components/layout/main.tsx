import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import { Footer, Header } from 'components/common';
import { LayoutProps } from 'models/index';

export function MainLayout({ children }: LayoutProps) {
  return (
    <Stack minHeight='100vh'>
      <Header />

      <Box component='main' flexGrow={1}>
        {children}
      </Box>

      <Footer />
    </Stack>
  );
}
