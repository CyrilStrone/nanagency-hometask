import { InfoDto } from '@local/core/dto';
import { Nullable } from '@local/types';

import { PropsWithChildren } from 'react';

export type ProviderInfoProps = PropsWithChildren;

export type InfoContextProps = Nullable<InfoDto> & {
  isLoading?: boolean;
  onChange: (newValue: Partial<InfoContextProps>) => void;
};
