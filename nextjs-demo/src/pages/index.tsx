import { SEO } from '@/components/common';
import Box from '@mui/material/Box';
import { FeatureWorks, HeroSection, RecentPosts } from 'components/home';
import { MainLayout } from 'components/layout';
import { NextPageWithLayout } from 'models/common';

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <SEO
        data={{
          title: 'NextJS Tutorial | Nashtech',
          thumbnailUrl:
            'https://images.velog.io/images/bigbrothershin/post/c375d3e6-21db-4fa6-9a2a-0c0c66819adf/nextjs%20image.jpeg',
          description:
            'Step by step tutorials to build a full CRUD website using NextJS for beginners',
          url: 'https://nextjs-demo-delta-two.vercel.app/',
        }}
      />

      <HeroSection />
      <RecentPosts />
      <FeatureWorks />
    </Box>
  );
};

Home.Layout = MainLayout;

export default Home;
