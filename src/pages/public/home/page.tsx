import { Stack } from '@jenesei-software/jenesei-kit-react/component-stack';
import { useTranslation } from 'react-i18next';

import { PagePublicHomeList, PagePublicHomeMainFirst, PagePublicHomeMainSecond } from '.';

export function PagePublicHome() {
  const { t } = useTranslation('translation');

  return (
    <Stack
      sx={{
        default: {
          flexDirection: 'column',
          gap: '44px',
        },
        mobile: {
          gap: '40px',
        },
      }}
    >
      <Stack
        sx={{
          default: {
            width: '100%',
            gap: '24px',
            flexDirection: 'row',
          },
          mobile: {
            gap: '0px',
            flexDirection: 'column',
          },
        }}
      >
        <PagePublicHomeMainFirst />
        <PagePublicHomeMainSecond />
      </Stack>
      <PagePublicHomeList />
    </Stack>
  );
}
