import * as React from 'react';
import { Box, Container, Stack } from '@mui/system';
import { Typography, Link as MuiLink } from '@mui/material';
import Link from 'next/link';
import { PostCard } from './post-card';
import { Post } from 'models/posts';

export function RecentPosts() {
  // call API to get post list

  const postList: Post[] = [
    {
      id: 1,
      title: 'Making a design system from scratch',
      publishedDate: 1677833114130,
      tagList: ['Design', 'Pattern'],
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
      id: 2,
      title: 'Creating pixel perfect icons in Figma',
      publishedDate: 1677833114130,
      tagList: ['Figma', 'Icon Design'],
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
  ];

  return (
    <Box component='section' bgcolor='secondary.light' pt={2} pb={4}>
      <Container>
        <Stack
          direction='row'
          mb={2}
          justifyContent={{ xs: 'center', md: 'space-between' }}
          alignItems='center'
        >
          <Typography variant='h5'>Recent Posts</Typography>

          <Link passHref href='/blog' legacyBehavior>
            <MuiLink className='active' sx={{ display: { xs: 'none', md: 'inline' } }}>
              View all
            </MuiLink>
          </Link>
        </Stack>

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={3}
          sx={{ ' > div': { width: { xs: '100%', md: '50%' } } }}
        >
          {postList.map((post) => (
            <Box key={post.id}>
              <PostCard post={post} />
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
