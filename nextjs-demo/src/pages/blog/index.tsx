import { PostItem } from '@/components/blog';
import { MainLayout } from '@/components/layout';
import { Post } from '@/models';
import { getPostList } from '@/utils/posts';
import { Box, Container, Divider } from '@mui/material';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import * as React from 'react';

export interface BlogListPageProps {
  posts: Post[];
}

export default function BlogListPage({ posts }: BlogListPageProps) {
  return (
    <Box>
      <Container>
        <h1>Blog</h1>
        <Box component='ul' sx={{ listStyleType: 'none', p: 0 }}>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.slug}`}>
                <PostItem post={post} />
              </Link>

              <Divider sx={{ my: 3 }} />
            </li>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

BlogListPage.Layout = MainLayout;

export const getStaticProps: GetStaticProps<BlogListPageProps> = async () => {
  // convert markdown files into list of js objects
  const postList = await getPostList();
  return {
    props: {
      posts: postList,
    },
  };
};
