import { Work } from '@/models';
import { Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import { WorkList } from '../work';

export function FeatureWorks() {
  // call API to get post list

  const workList: Work[] = [
    {
      id: 1,
      title: 'Designing Dashboards',
      createdAt: '1677833114130',
      updatedAt: '',
      tagList: ['Dashboard'],
      shortDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      fullDescription: '',
      thumbnailUrl:
        'https://res.cloudinary.com/drx5nbiop/image/upload/v1678161235/Learn-NextJS/Rectangle_32_1_x6bhhe.jpg',
    },
    {
      id: 2,
      title: 'Vibrant Portraits of 2020',
      createdAt: '1677833114130',
      updatedAt: '',
      tagList: ['Illustration'],
      shortDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      fullDescription: '',
      thumbnailUrl:
        'https://res.cloudinary.com/drx5nbiop/image/upload/v1678161235/Learn-NextJS/Rectangle_34_1_lyvkzj.jpg',
    },
    {
      id: 3,
      title: '36 Days of Malayalam type',
      createdAt: '1677833114130',
      updatedAt: '',
      tagList: ['Typography'],
      shortDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      fullDescription: '',
      thumbnailUrl:
        'https://res.cloudinary.com/drx5nbiop/image/upload/v1678161235/Learn-NextJS/Rectangle_30_1_rmqu1a.jpg',
    },
  ];

  return (
    <Box component='section' pt={2} pb={4}>
      <Container>
        <Typography variant='h5' mb={2} textAlign={{ xs: 'center', md: 'left' }}>
          Featured works
        </Typography>

        <WorkList workList={workList} />
      </Container>
    </Box>
  );
}
