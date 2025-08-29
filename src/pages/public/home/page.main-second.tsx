import { HomeMainDto } from '@local/core/dto';

import { Image } from '@jenesei-software/jenesei-kit-react/component-image';
import { Stack } from '@jenesei-software/jenesei-kit-react/component-stack';
import { Typography, TypographyLink } from '@jenesei-software/jenesei-kit-react/component-typography';
import { FC } from 'react';

export const PagePublicHomeMainSecond: FC<HomeMainDto['second']> = (props) => {
  return (
    <Stack
      sx={{
        default: {
          width: '260px',
          borderRadius: '10px',
          flexShrink: 1,
          background: 'gray',
          minHeight: '100px',
          position: 'relative',
          padding: '36px 20px 30px 25px',
          flexDirection: 'column',
        },
        mobile: {
          width: '100%',
          borderRadius: '0px 0px 10px 10px',
          padding: '13px 20px 25px 21px',
        },
      }}
    >
      <Image
        sxStack={(theme) => ({
          default: {
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: theme.palette.black10,
            position: 'absolute',
            left: 0,
            top: 0,
            pointerEvents: 'none',
            borderRadius: '10px',
          },
          mobile: {
            borderRadius: '0px 0px 10px 10px',
          },
        })}
        sxImage={{
          default: {
            objectFit: 'cover',
            objectPosition: 'center',
          },
          mobile: {
            objectPosition: 'center top',
          },
        }}
        alt={props.imageAlt ?? 'Second Image'}
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
      <Typography
        sxStandard={{
          default: {
            paddingTop: '9px',
          },
          mobile: {
            paddingTop: '6px',
            paddingBottom: '29px',
          },
        }}
        sx={{
          default: {
            family: 'Inter',
            size: 30,
            weight: 700,
            color: 'whiteStandard',
          },
          mobile: {
            size: 20,
          },
        }}
      >
        {props.title}
      </Typography>
      <Typography
        sxStandard={{
          default: {
            paddingTop: '17px',
            paddingBottom: '18px',
          },
          mobile: {
            display: 'none',
          },
        }}
        sx={{
          default: {
            weight: 300,
            family: 'Inter',
            size: 16,
            height: 23,
            color: 'whiteStandard',
          },
        }}
      >
        {props.description}
      </Typography>
      <TypographyLink
        to={props.link}
        sxStandard={(theme) => ({
          default: {
            textDecoration: 'none',
            cursor: 'pointer',
            padding: '18px 10px 17px 10px',
            borderRadius: '10px',
            border: '2px solid',
            borderColor: theme.palette.whiteStandard,
            marginTop: 'auto',
          },
          mobile: {
            padding: '19px 10px 18px 10px',
            borderRadius: '10px',
          },
        })}
        sx={{
          default: {
            family: 'Inter',
            size: 16,
            letterSpacing: '0.7px',
            color: 'whiteStandard',
            align: 'center',
          },
          mobile: {
            size: 14,
          },
        }}
      >
        {props.button}
      </TypographyLink>
      <Stack
        sx={{
          default: {
            position: 'absolute',
            top: '-50px',
            right: '-41px',
            width: '98px',
            height: '99px',
            borderRadius: '50%',
            zIndex: 1,
            border: '4px solid #DDE0CD',
          },
          mobile: {
            display: 'none',
          },
        }}
      />
    </Stack>
  );
};
