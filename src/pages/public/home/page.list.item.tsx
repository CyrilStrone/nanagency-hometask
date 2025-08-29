import { StackLink } from '@local/components/stack-link';

import { Image } from '@jenesei-software/jenesei-kit-react/component-image';
import { Stack } from '@jenesei-software/jenesei-kit-react/component-stack';
import { Typography, TypographyTooltip } from '@jenesei-software/jenesei-kit-react/component-typography';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { PagePublicHomeListHomeListDto } from './page.list.types';

export const PagePublicHomeListItem: FC<PagePublicHomeListHomeListDto['list'][number]> = (props) => {
  const { t: tBoundary } = useTranslation('translation', { keyPrefix: 'boundary' });

  return (
    <StackLink
      to={props.link}
      sx={(theme) => ({
        default: {
          width: '161px',
          minWidth: '161px',
          height: '277px',
          backgroundColor: theme.palette.whiteStandard,
          boxShadow: '0px 10px 10px 0px #00000012',
          borderRadius: '10px',
          flexDirection: 'column',
          cursor: 'pointer',
          scrollSnapAlign: 'start',
        },
        mobile: {
          minWidth: 'max(161px, 40dvw)',
          width: '40dvw',
        },
      })}
    >
      <Image
        sxStack={() => ({
          default: {
            borderRadius: '10px',
            width: '100%',
            height: '160px',
            minHeight: '160px',
            backgroundColor: '#AFB982',
            pointerEvents: 'none',
            alignItems: 'center',
            justifyContent: 'center',
          },
        })}
        sxImage={{
          default: {
            objectFit: 'cover',
            objectPosition: 'center',
          },
        }}
        alt={props.imageAlt || props.title}
        src={props.image}
        componentFallback={
          <Typography
            sx={{
              default: {
                size: 14,
                weight: 300,
                color: 'black80',
                align: 'center',
              },
            }}
          >
            {tBoundary('image')}
          </Typography>
        }
      />
      <Stack
        sx={{
          default: {
            flexDirection: 'column',
            padding: '16px 16px 21px 16px',
            gap: '6px',
            flex: 1,
            justifyContent: 'space-between',
            overflow: 'hidden',
          },
        }}
      >
        <TypographyTooltip
          tooltip={{
            placement: 'bottom-start',
            genre: 'white',
            mode: 'hover',
            maxWidth: '150px',
          }}
          typography={{
            sxStandard: {
              default: {
                color: '#485F3B',
              },
            },
            sx: {
              default: {
                line: 2,
                family: 'Inter',
                size: 16,
              },
            },
          }}
        >
          {props.title}
        </TypographyTooltip>
        <TypographyTooltip
          tooltip={{
            placement: 'bottom',
            genre: 'white',
            mode: 'hover',
            maxWidth: '150px',
            sx: { default: { maxWidth: '-webkit-fill-available' } },
          }}
          typography={{
            sxStandard: {
              default: {
                color: '#485F3B',
              },
            },
            sx: {
              default: {
                line: 1,
                weight: 700,
                size: 16,
              },
            },
          }}
        >
          {props.price}
        </TypographyTooltip>
      </Stack>
    </StackLink>
  );
};
