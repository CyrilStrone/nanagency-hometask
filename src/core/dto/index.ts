import { ILanguageKeys } from '@jenesei-software/jenesei-kit-react/types';
import { LinkProps } from '@tanstack/react-router';

export interface InfoDto {
  language: ILanguageKeys;
  currency: string;
}

export interface HomeMainDto {
  first: {
    subTitle: string;
    title: string;
    link: LinkProps['to'];
    image: string;
    imageAlt?: string;
  };
  second: {
    title: string;
    subTitle: string;
    description: string;
    button: string;
    link: LinkProps['to'];
    image: string;
    imageAlt?: string;
  };
}

export interface HomeListDto {
  title: string;
  list: HomeListCardDto[];
}
export interface HomeListCardDto {
  id: string;
  image: string;
  imageAlt?: string;
  title: string;
  price: number;
}
