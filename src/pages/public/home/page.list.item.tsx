import { StackLink } from '@local/components/stack-link';

import { Image } from '@jenesei-software/jenesei-kit-react/component-image';
import { Stack } from '@jenesei-software/jenesei-kit-react/component-stack';
import { TypographyTooltip } from '@jenesei-software/jenesei-kit-react/component-typography';

export function PagePublicHomeListItem() {
  return (
    <Stack>
      <StackLink
        to='/pr/home'
        sx={(theme) => ({
          default: {
            width: '161px',
            height: '277px',
            backgroundColor: theme.palette.whiteStandard,
            boxShadow: '0px 10px 10px 0px #00000012',
            borderRadius: '10px',
            flexDirection: 'column',
            cursor: 'pointer',
          },
          mobile: {
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
              backgroundColor: 'transparent',
              pointerEvents: 'none',
            },
          })}
          sxImage={{
            default: {
              objectFit: 'cover',
              objectPosition: 'center',
            },
          }}
          alt='Card'
          src='/images/home-first.png'
        />
        <Stack
          sx={{
            default: {
              flexDirection: 'column',
              padding: '16px 16px 21px 16px',
              gap: '6px',
              justifyContent: 'space-between',
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
            Цветная капустаЦветная капустаЦветная капустаЦветная капуста
          </TypographyTooltip>
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
                  weight: 700,
                  family: 'Inter',
                  size: 16,
                },
              },
            }}
          >
            Цветная капуста
          </TypographyTooltip>
        </Stack>
      </StackLink>
    </Stack>
  );
}
