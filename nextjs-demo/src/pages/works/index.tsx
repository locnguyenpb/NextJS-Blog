import { MainLayout } from '@/components/layout';
import { WorkList } from '@/components/work';
import { Work } from '@/models';
import { Box, Container } from '@mui/material';
import { SEO } from '@/components/common';

export default function BlogListPage() {
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
      title: 'Designing Landing pages',
      createdAt: '1677833114130',
      updatedAt: '',
      tagList: ['Website'],
      shortDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      fullDescription: '',
      thumbnailUrl:
        'https://res.cloudinary.com/drx5nbiop/image/upload/v1678940493/Learn-NextJS/work_image_1_iro5se.jpg',
    },
    {
      id: 3,
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
      id: 4,
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
    {
      id: 5,
      title: 'Components',
      createdAt: '1677833114130',
      updatedAt: '',
      tagList: ['Components, Design'],
      shortDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      fullDescription: '',
      thumbnailUrl:
        'https://res.cloudinary.com/drx5nbiop/image/upload/v1678940505/Learn-NextJS/work_image_2_yltktr.jpg',
    },
  ];

  return (
    <Box>
      <SEO
        data={{
          title: 'Works Page',
          thumbnailUrl:
            'https://images.velog.io/images/bigbrothershin/post/c375d3e6-21db-4fa6-9a2a-0c0c66819adf/nextjs%20image.jpeg',
          description:
            'Step by step tutorials to build a full CRUD website using NextJS for beginners',
          url: 'https://nextjs-demo-delta-two.vercel.app/',
        }}
      />

      <Container>
        <h1>Work</h1>
        <WorkList workList={workList} />
      </Container>
    </Box>
  );
}

BlogListPage.Layout = MainLayout;
