import { StackLink } from '@local/components/stack-link';

import { Image } from '@jenesei-software/jenesei-kit-react/component-image';
import { Stack } from '@jenesei-software/jenesei-kit-react/component-stack';
import { Typography, TypographyTooltip } from '@jenesei-software/jenesei-kit-react/component-typography';

import { PagePublicHomeListItem } from '.';

export function PagePublicHomeList() {
  return (
    <Stack
      sx={{
        default: {
          flexDirection: 'column',
          gap: '30px',
        },
        mobile: {
          gap: '20px',
        },
      }}
    >
      <Typography
        sxStandard={{
          default: {
            color: '#183022',
          },
        }}
        sx={{
          default: {
            family: 'Inter',
            size: 40,
            weight: 700,
          },
          mobile: {
            size: 30,
          },
        }}
      >
        Что на прилавке
      </Typography>
      <Stack>
        <PagePublicHomeListItem />
        <PagePublicHomeListItem />
        <PagePublicHomeListItem />
      </Stack>
    </Stack>
  );
}
