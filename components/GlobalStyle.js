import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.80s linear;
  }

  .first-container-contact{
    background: ${({ theme }) => theme.body};
  }
  .title{
    color: ${({ theme }) => theme.text} !important;
  }
  .header{
    background:${({ theme }) => theme.header_background} !important; 
  }
  .full-container{
    color: ${({ theme }) => theme.text} !important;
  }
  .container-title .title{
    color: ${({ theme }) => theme.text} !important;
  }

  .container-title .title::after{
    color: ${({ theme }) => theme.text} !important;
    border-top: 3px solid  ${({ theme }) => theme.text} !important;
  }

  .moon-dark-mode {
    -moz-box-shadow: ${({ theme }) => theme.shadow};
    -webkit-box-shadow: ${({ theme }) => theme.shadow};
    box-shadow: ${({ theme }) => theme.shadow};
    transform: rotateY(${({ theme }) => theme.grad});
    left: ${({ theme }) => theme.left_mode};
    background: ${({ theme }) => theme.sun_color};
  }

  .container-dark-mode{
    border: 3px solid ${({ theme }) => theme.mode} !important;
    background: ${({ theme }) => theme.mode_background};
  }

  @media only screen and (max-width: 992px) {
    .moon-dark-mode {
      -moz-box-shadow: ${({ theme }) => theme.shadow_mov};
      -webkit-box-shadow:${({ theme }) => theme.shadow_mov};
      box-shadow: ${({ theme }) => theme.shadow_mov};
      transform: rotateY(${({ theme }) => theme.grad});
      background: ${({ theme }) => theme.sun_color_mov};
    }
  
    .container-dark-mode{
      border: 3px solid ${({ theme }) => theme.mode_mov} !important;
      background: ${({ theme }) => theme.mode_background};
    }
  }

  `
