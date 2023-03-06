import { Typography } from '@mui/material';
import { Divider } from '@mui/material';
import { Card, CardContent } from '@mui/material';
import { format } from 'date-fns';
import { Post } from 'models/posts';
import * as React from 'react';

export interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  if (!post) return null;
  return (
    <Card>
      <CardContent>
        <Typography variant='h5' fontWeight='bold'>
          {post.title}
        </Typography>

        <Typography variant='body1' my={2} sx={{ display: 'flex' }}>
          {format(Number(post.publishedDate), 'dd MM yyyy')}

          <Divider orientation='vertical' sx={{ mx: 2 }} flexItem />

          {post.tagList.join(', ')}
        </Typography>

        <Typography variant='body2'>{post.description}</Typography>
      </CardContent>
    </Card>
  );
}
