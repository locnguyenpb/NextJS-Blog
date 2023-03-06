import Box from '@mui/material/Box';
import { HeroSection, RecentPosts } from 'components/home';
import { MainLayout } from 'components/layout';
import { NextPageWithLayout } from 'models/common';

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <HeroSection />
      <RecentPosts />
    </Box>
  );
};

Home.Layout = MainLayout;

export default Home;
