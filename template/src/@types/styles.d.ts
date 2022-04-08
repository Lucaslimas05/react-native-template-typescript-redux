import 'styled-components';
import {themes} from '../global/themes';

export type Type = typeof themes;

declare module 'styled-components' {
  export interface DefaultTheme extends Type {}
}
