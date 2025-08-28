import { Image } from '@jenesei-software/jenesei-kit-react/component-image';
import { Stack, StackMotion } from '@jenesei-software/jenesei-kit-react/component-stack';
import { useScreenWidth } from '@jenesei-software/jenesei-kit-react/context-screen-width';
import { useTranslation } from 'react-i18next';

export function PagePublicHome() {
  const { t } = useTranslation('translation');

  const { screenActual } = useScreenWidth();
  const isMobile = screenActual === 'mobile';
  return (
    <Stack>
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
        <StackMotion
          layout
          animate={{
            flexGrow: isMobile ? 1 : 620,
            borderRadius: isMobile ? '10px 10px 0px 0px' : '10px',
            background: isMobile
              ? 'linear-gradient(180deg, #AEB595 0%, rgba(173, 180, 148, 0) 100%)'
              : 'linear-gradient(180deg, rgba(173, 180, 148, 0) 29.5%, #AEB595 100%)',
          }}
          transition={{ duration: 0.5 }}
          sx={{
            default: {
              overflow: 'hidden',
              position: 'relative',
              flexShrink: 1,
              minHeight: '400px',
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
                pointerEvents: 'none',
                zIndex: -1,
              },
            })}
            sxImage={{
              default: {
                objectFit: 'cover',
                objectPosition: 'center bottom',
              },
            }}
            alt='Home first'
            src='/images/home-first.png'
          />
        </StackMotion>
        <StackMotion
          layout
          animate={{
            flexGrow: isMobile ? 1 : 260,
            borderRadius: isMobile ? '0px 0px 10px 10px' : '10px',
          }}
          sx={{
            default: {
              flexShrink: 1,
              flexGrow: 260,
              background: 'gray',
              minHeight: '100px',
              position: 'relative',
              overflow: 'hidden',
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
                pointerEvents: 'none',
              },
            })}
            sxImage={{
              default: {
                objectFit: 'cover',
                objectPosition: 'center',
              },
            }}
            alt='Home second'
            src='/images/home-second.png'
          />
        </StackMotion>
      </Stack>
    </Stack>
  );
}
