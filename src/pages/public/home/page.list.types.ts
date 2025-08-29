import { HomeListDto } from '@local/core/dto';

import { LinkProps } from '@tanstack/react-router';

export interface PagePublicHomeListHomeListDto {
  title: HomeListDto['title'];
  list: ({ link: LinkProps['to']; price: string } & Omit<HomeListDto['list'][number], 'price'>)[];
}
