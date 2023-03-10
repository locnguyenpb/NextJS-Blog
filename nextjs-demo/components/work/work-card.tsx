import { Work } from '@/models';
import { Stack } from '@mui/material';
import { Chip } from '@mui/material';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';

export interface WorkCardProps {
  work: Work;
}

export function WorkCard({ work }: WorkCardProps) {
  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
      <Box
        width={{ xs: '100%', sm: '246px' }}
        height={{ xs: '230px', sm: '180px' }}
        flexShrink={0}
        position='relative'
      >
        <Image
          src={work.thumbnailUrl}
          fill
          alt='work thumbnail'
          sizes='(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw'
        />
      </Box>
      <Box>
        <Typography variant='h4' fontWeight='bold'>
          {work.title}
        </Typography>

        <Stack direction='row' my={2}>
          <Chip
            color='secondary'
            label={new Date(Number.parseInt(work.createdAt)).getFullYear()}
            size='small'
          ></Chip>
          <Typography ml={3} color='GrayText'>
            {work.tagList.join(', ')}
          </Typography>
        </Stack>

        <Typography>{work.shortDescription}</Typography>
      </Box>
    </Stack>
  );
}
