import "styled-components";
import { themeConfig } from "./Theme";

declare module "styled-components" {
  type CustomTheme = typeof themeConfig;
  export interface DefaultTheme extends CustomTheme {}
}
