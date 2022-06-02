import { createGlobalStyle } from "styled-components";
import { primaryFont } from "./typography";
import { normalize } from "polished";

export const GlobalStyle = createGlobalStyle`
 ${normalize()}
  html {
      font-size:16px; 
      box-sizing:border-box; 
       
  }
  *
  {
     box-sizing:inherit ;
    }
    body {
        font-family:${primaryFont} ;
        margin:0 ;
    }
  main{
      width:90% ;
      margin: 0 auto ;
  }
 `;
