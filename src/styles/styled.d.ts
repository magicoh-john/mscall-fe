import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors : {
      textMain : string;
      textDefault : string;
      pointB : string;
      pointG : string;
    },
    device : {
      mobile : string;
      tablet : string;
      desktop : string;
    }
  }
}