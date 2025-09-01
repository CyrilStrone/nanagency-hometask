import { prefix } from '@local/consts';
import { useInfo } from '@local/contexts/context-info';

import { Scroll } from '@jenesei-software/jenesei-kit-react/area-scroll';
import { Skeleton } from '@jenesei-software/jenesei-kit-react/area-skeleton';
import { Stack } from '@jenesei-software/jenesei-kit-react/component-stack';
import { Typography } from '@jenesei-software/jenesei-kit-react/component-typography';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { PagePublicHomeListHomeListDto, PagePublicHomeListItem } from '.';

export function PagePublicHomeList() {
  const { t: tPagesHomeList } = useTranslation('translation', { keyPrefix: 'pages.home.list' });
  const { currency } = useInfo();

  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState<PagePublicHomeListHomeListDto | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setValue({
        title: tPagesHomeList('title'),
        list: [
          {
            link: '/pu/home',
            id: '1',
            image: `${prefix}images/home-first.png`,
            title: tPagesHomeList('list-item.title'),
            price: tPagesHomeList('list-item.price', { value: 120, currency: currency }),
          },
          {
            link: '/pu/home',
            id: '2',
            image: `${prefix}images/home-first.png`,
            title: tPagesHomeList('list-item.title'),
            price: tPagesHomeList('list-item.price', { value: 120, currency: currency }),
          },
          {
            link: '/pu/home',
            id: '3',
            image: `${prefix}images/home-first.png`,
            title: tPagesHomeList('list-item.title'),
            price: tPagesHomeList('list-item.price', { value: 120, currency: currency }),
          },
          {
            link: '/pu/home',
            id: '4',
            image: `${prefix}images/home-first.png`,
            title: tPagesHomeList('list-item.title'),
            price: tPagesHomeList('list-item.price', { value: 120, currency: currency }),
          },
          {
            link: '/pu/home',
            id: '5',
            image: `${prefix}images/home-first.png`,
            title: tPagesHomeList('list-item.title'),
            price: tPagesHomeList('list-item.price', { value: 120, currency: currency }),
          },
          {
            link: '/pu/home',
            id: '6',
            image: `${prefix}images/home-first.png`,
            title: tPagesHomeList('list-item.title'),
            price: tPagesHomeList('list-item.price', { value: 120, currency: currency }),
          },
          {
            link: '/pu/home',
            id: '7',
            image: `${prefix}images/home-first.png`,
            title: tPagesHomeList('list-item.title'),
            price: tPagesHomeList('list-item.price', { value: 120, currency: currency }),
          },
          {
            link: '/pu/home',
            id: '8',
            image: `${prefix}images/home-first.png`,
            title: tPagesHomeList('list-item.title'),
            price: tPagesHomeList('list-item.price', { value: 120, currency: currency }),
          },
        ],
      });
      setIsLoading(false);
    }, 1500);
  }, [currency, tPagesHomeList]);

  return (
    <Skeleton
      sx={{
        default: {
          flexDirection: 'column',
          gap: '30px',
          minHeight: '337px',
        },
        mobile: {
          gap: '20px',
        },
      }}
      visible={isLoading}
    >
      <Typography
        sxStandard={{
          default: {
            padding: '0px 49px',
            color: '#183022',
          },
          mobile: {
            padding: '0px 10px',
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
        {value?.title}
      </Typography>
      <Stack sx={{ default: { position: 'relative' } }}>
        <Scroll
          horizontal
          sx={{
            default: {
              margin: '0px 60px',
              scrollSnapType: 'x mandatory',
              gap: '24.4px',
              position: 'relative',
            },
            mobile: {
              margin: '0px 10px',
              gap: '10px',
            },
          }}
        >
          {value?.list.map((item) => (
            <PagePublicHomeListItem key={item.id} {...item} />
          ))}
        </Scroll>
        <Stack
          sx={{
            default: {
              display: 'block',
              position: 'absolute',
              top: '132px',
              left: '142px',
              width: '35px',
              height: '36px',
              borderRadius: '50%',
              zIndex: -1,
              background: '#183022',
            },
            mobile: {},
          }}
        />
        <Stack
          sx={{
            default: {
              display: 'block',
              position: 'absolute',
              bottom: '-8.17px',
              right: '13.6px',
              width: '45px',
              height: '46px',
              borderRadius: '50%',
              zIndex: 1,
              background: '#AFB982',
            },
            mobile: {
              right: '24px',
              bottom: '-14px',
            },
          }}
        />
      </Stack>
    </Skeleton>
  );
}
