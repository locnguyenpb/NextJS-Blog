import { Post } from '@/models';
import { getPostList } from '@/utils/posts';
import { Box, Container } from '@mui/material';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkPrism from 'remark-prism';
import remarkRehype from 'remark-rehype';
import remarkToc from 'remark-toc';
import { unified } from 'unified';
import Script from 'next/script';
import { SEO } from '@/components/common';

export interface BlogPageProps {
  post: Post;
}

export default function BlogDetailPage({ post }: BlogPageProps) {
  if (!post) null;

  return (
    <Box>
      <SEO
        data={{
          title: post.title,
          thumbnailUrl:
            post.thumbnailUrl ||
            'https://images.velog.io/images/bigbrothershin/post/c375d3e6-21db-4fa6-9a2a-0c0c66819adf/nextjs%20image.jpeg',
          description: post.description,
          url: `${process.env.HOST_URL}/blog/${post.slug}`,
        }}
      />

      <Container>
        <p>{post.title}</p>
        <p>{post.author?.name}</p>
        <p>{post.description}</p>
        <div dangerouslySetInnerHTML={{ __html: post.htmlContent || '' }}></div>
      </Container>

      <Script src='/prism.js' strategy='afterInteractive'></Script>
    </Box>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postList = await getPostList();

  return {
    paths: postList.map((post: Post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogPageProps> = async (
  context: GetStaticPropsContext
) => {
  const postList = await getPostList();
  const slug = context.params?.slug;

  if (!slug) return { notFound: true };

  const post = postList.find((x) => x.slug === slug);

  if (!post) return { notFound: true };

  // parse md to html
  const file = await unified()
    .use(remarkParse)
    .use(remarkToc, { heading: 'Agenda.*' })
    .use(remarkPrism)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: 'wrap' })
    .use(rehypeDocument, { title: 'Blog details page' })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(post.mdContent || '');

  post.htmlContent = file.toString();
  return {
    props: {
      post,
    },
  };
};
