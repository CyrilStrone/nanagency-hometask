import { HomeMainDto } from '@local/core/dto';

import { Skeleton } from '@jenesei-software/jenesei-kit-react/area-skeleton';
import { Stack } from '@jenesei-software/jenesei-kit-react/component-stack';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { PagePublicHomeList, PagePublicHomeMainFirst, PagePublicHomeMainSecond } from '.';

export function PagePublicHome() {
  const { t: tPagesHomeMain } = useTranslation('translation', { keyPrefix: 'pages.home.main' });

  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState<HomeMainDto | null>(null);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setValue({
        first: {
          subTitle: tPagesHomeMain('first.subTitle'),
          title: tPagesHomeMain('first.title'),
          link: '/pu/home',
          image: '/images/home-first.png',
        },
        second: {
          subTitle: tPagesHomeMain('second.subTitle'),
          title: tPagesHomeMain('second.title'),
          description: tPagesHomeMain('second.description'),
          button: tPagesHomeMain('second.button'),
          link: '/pu/home',
          image: '/images/home-second.png',
        },
      });
      setIsLoading(false);
    }, 1500);
  }, [tPagesHomeMain]);

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
      <Skeleton
        sx={{
          default: {
            padding: '0px 60px',
            width: '100%',
            gap: '24px',
            flexDirection: 'row',
            minHeight: '400px',
          },
          mobile: {
            padding: '0px 10px',
            gap: '0px',
            flexDirection: 'column',
          },
        }}
        visible={isLoading}
      >
        {value?.first && <PagePublicHomeMainFirst {...value.first} />}
        {value?.second && <PagePublicHomeMainSecond {...value.second} />}
      </Skeleton>
      <PagePublicHomeList />
    </Stack>
  );
}
