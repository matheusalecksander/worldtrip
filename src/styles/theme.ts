import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  styles: {
    colors: {
      gray: {
        "900": "#181823",
        "800": "#1f2029",
        "700": "#353646",
        "600": "#47585B",
        "500": "#616480",
        "400": "#797d9a",
        "300": "#999999",
        "200": "#b3b5c6",
        "100": "#d1d2dc",
        "50": "#F5F8FA",
      }
    },
    fonts: {
      heading: "Poppins",
      body: "Poppins"
    },
    global: {
      body: {
        bg: "gray.50",
        color: "gray.600"
      }
    }
  }
})