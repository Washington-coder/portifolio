import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
        '@keyframes wave': {
            '0%': {
                transform: 'translate(-50%, -75%) rotate(0deg)'
            },
            '100%': {
                transform: 'translate(-50%, -75%) rotate(360deg)'
            }
        },
        '@keyframes wave2': {
            '0%': {
                transform: 'translate(-50%, -75%) rotate(0deg)'
            },
            '100%': {
                transform: 'translate(-50%, -75%) rotate(360deg)'
            }
        },
        html: {
            overflowX: 'hidden'
        },
        body: {
            bg: mode('#f0e7db', '#202023')(props),
            position: 'relative',
            minHeight: '100vh'
            // SEM overflow hidden para permitir scroll
        },
        'body::before': {
            content: '""',
            position: 'fixed', // Fixed mantém o background fixo enquanto scrolla
            width: '325vh',
            height: '325vh',
            top: 0,
            left: '50%',
            transform: 'translate(-50%, -75%)',
            borderRadius: '45%',
            bg: mode('rgba(136, 204, 202, 0.3)', 'rgba(255, 99, 195, 0.2)')(props),
            animation: 'wave 10s linear infinite',
            zIndex: -1,
            pointerEvents: 'none'
        },
        'body::after': {
            content: '""',
            position: 'fixed',
            width: '325vh',
            height: '325vh',
            top: 0,
            left: '50%',
            transform: 'translate(-50%, -75%)',
            borderRadius: '40%',
            bg: mode('rgba(61, 122, 237, 0.2)', 'rgba(61, 122, 237, 0.15)')(props),
            animation: 'wave2 15s linear infinite',
            zIndex: -1,
            pointerEvents: 'none'
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