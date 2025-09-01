import { StackLink } from '@local/components/stack-link';
import { prefix } from '@local/consts';
import { HomeMainDto } from '@local/core/dto';

import { Image } from '@jenesei-software/jenesei-kit-react/component-image';
import { Stack } from '@jenesei-software/jenesei-kit-react/component-stack';
import { Typography } from '@jenesei-software/jenesei-kit-react/component-typography';
import { FC } from 'react';

export const PagePublicHomeMainFirst: FC<HomeMainDto['first']> = (props) => {
  return (
    <Stack
      sx={{
        default: {
          background: 'linear-gradient(180deg, rgba(173, 180, 148, 0) 29.5%, #AEB595 100%)',
          position: 'relative',
          flex: 1,
          flexShrink: 1,
          minHeight: '400px',
          padding: '36px 30px 37px 30px',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '12px',
          borderRadius: '10px',
        },
        mobile: {
          background: 'linear-gradient(180deg, #AEB595 0%, rgba(173, 180, 148, 0) 100%)',
          justifyContent: 'flex-start',
          padding: '20px',
          borderRadius: '10px 10px 0px 0px',
        },
      }}
    >
      <Image
        sxStack={(theme) => ({
          default: {
            borderRadius: '10px',
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: theme.palette.black10,
            position: 'absolute',
            top: 0,
            left: 0,
            pointerEvents: 'none',
            zIndex: -1,
          },
          mobile: {
            borderRadius: '10px 10px 0px 0px',
          },
        })}
        sxImage={{
          default: {
            objectFit: 'cover',
            objectPosition: 'center bottom',
          },
        }}
        alt={props.imageAlt || 'First Image'}
        src={props.image}
      />
      <Typography
        sx={{
          default: {
            family: 'Inter',
            size: 30,
            color: 'whiteStandard',
          },
          mobile: {
            size: 20,
          },
        }}
      >
        {props.subTitle}
      </Typography>
      <StackLink
        to='/pu/home'
        sx={{
          default: {
            cursor: 'pointer',

            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '20px',
          },
          mobile: {
            flexDirection: 'column',
            alignItems: 'stretch',
          },
        }}
      >
        <Typography
          sx={{
            default: {
              family: 'Inter',
              size: 40,
              height: 40,
              color: 'whiteStandard',
              weight: 700,
            },
            mobile: {
              size: 30,
              height: 30,
            },
          }}
        >
          {props.title}
        </Typography>
        <Image
          sxStack={() => ({
            default: {
              minWidth: '62px',
              width: '62px',
              height: '30px',
              alignItems: 'center',
              justifyContent: 'center',
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
          alt='Arrow'
          src={`${prefix}images/home-arrow.png`}
        />
      </StackLink>
      <Stack
        sx={{
          default: {
            position: 'absolute',
            top: '191px',
            left: '-38px',
            width: '76px',
            height: '76px',
            borderRadius: '50%',
            backgroundColor: '#6C846C',
            zIndex: 1,
          },
          mobile: {
            top: '241px',
          },
        }}
      />
      <Stack
        sx={{
          default: {
            position: 'absolute',
            bottom: '-13px',
            right: '97px',
            width: '35px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: '#BCCCAF',
            zIndex: -2,
          },
          mobile: {
            bottom: '-18px',
            right: '19px',
            zIndex: 1,
          },
        }}
      />
      <Stack
        sx={{
          default: {
            display: 'none',
          },
          mobile: {
            display: 'block',
            position: 'absolute',
            top: '-58px',
            right: '-59px',
            width: '98px',
            height: '99px',
            borderRadius: '50%',
            zIndex: 1,
            border: '4px solid #DDE0CD',
          },
        }}
      />
    </Stack>
  );
};
