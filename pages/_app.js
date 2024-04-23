import { ChakraProvider } from '@chakra-ui/react';
import Main from '../components/layouts/main'
import Fonts from '../components/fonts'
import theme from '../libs/theme.js';
import { AnimatePresence } from 'framer-motion'

const Website = ({ Component, pageProps, router }) => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Main router={router}>
                <AnimatePresence onExitComplete initial={true}>
                    <Component {...pageProps} key={router.key} />
                </AnimatePresence>
            </Main>
        </ChakraProvider>
    )
}

export default Website