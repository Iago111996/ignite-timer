import { createGlobalStyle } from 'styled-components'

export const GlobaStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
      outline: 0;
      box-shadow: 0 0 0 2px  ${({ theme }) => theme['green-500']};
    }

    body {
        background-color: ${({ theme }) => theme['gray-900']};
        color: ${({ theme }) => theme['gray-300']};
    }

    body, input, textarea, button {
      font-family: "Roboto", sans-serif;
      font-size: 1rem;
      font-weight: 400;
    }
`
