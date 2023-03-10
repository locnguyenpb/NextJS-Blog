import { Post } from '@/models';
import { Box, Typography, Divider, Stack } from '@mui/material';
import * as React from 'react';
import { format } from 'date-fns';

export interface PostItemProps {
  post: Post;
}

export function PostItem({ post }: PostItemProps) {
  return (
    <Box>
      <Typography variant='h5' fontWeight='bold'>
        {post.title}
      </Typography>

      <Stack direction='row' my={2}>
        <Typography variant='body1' sx={{ display: 'flex' }}>
          {format(new Date(post.publishedDate), 'dd MMM yyyy')}
        </Typography>

        <Divider orientation='vertical' sx={{ mx: 2 }} flexItem />

        <Typography>{post.tagList.join(', ')}</Typography>
      </Stack>

      <Typography variant='body2'>{post.description}</Typography>
    </Box>
  );
}
