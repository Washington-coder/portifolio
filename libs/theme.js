import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: (props) => ({
    html: {
      overflowX: 'hidden'
    },
    body: {
      // No Light Mode usamos um bege/cinza muito claro, no Dark o preto Matrix
      bg: mode('#f0f0db', '#050608')(props),
      transition: 'background-color 0.2s ease',
      minHeight: '100vh',
    },
    '@keyframes matrixFall': {
      '0%': { transform: 'translateY(-100vh)', opacity: 0 },
      '10%': { opacity: 1 },
      '100%': { transform: 'translateY(100vh)', opacity: 0 }
    },
    '.matrix-column': {
      position: 'fixed',
      top: 0,
      whiteSpace: 'pre',
      fontFamily: 'monospace',
      // Cor do texto: Verde escuro no Light Mode para contraste, Verde Neon no Dark
      color: mode('rgba(2, 2, 2, 0.3)', '#00ff9c')(props),
      // Brilho apenas no Dark Mode
      textShadow: mode('none', '0 0 8px rgba(0, 255, 156, 0.8)')(props),
      pointerEvents: 'none',
      zIndex: -1,
      animationName: 'matrixFall',
      animationTimingFunction: 'linear',
      animationIterationCount: 'infinite'
    }
  })
}

const components = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: '#525252',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4
            }
        }
    },
    Link: {
        baseStyle: props => ({
            color: mode('#3d7aed', '#ff63c3')(props),
            textUnderlineOffset: 3,
        })
    }
}

const fonts = {
    heading: "'M PLUS Rounded 1c'"
}

const colors = {
    glassTeal: '#88ccca'
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false
}

const theme = extendTheme({
    config,
    styles,
    components,
    colors,
    fonts,
})

export default theme