import { ChakraProvider } from '@chakra-ui/react';
import Main from '../components/layouts/main'
import Fonts from '../components/fonts'
import theme from '../libs/theme.js';

const Website = ({ Component, pageProps, router }) => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Main router={router}>
                <Component {...pageProps} key={router.key} />
            </Main>
        </ChakraProvider>
    )
}

export default Website