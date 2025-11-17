import { ComponentPropsWithoutRef } from 'react';

export type SvgIconProps = ComponentPropsWithoutRef<'svg'>;

export interface SgvIconSquareProps extends SvgIconProps {
  size?: number;
}
