import { ChakraProvider } from '@chakra-ui/react';
import Main from '../components/layouts/main'

const Website = ({ Component, pageProps, router }) => {
    return (
        <ChakraProvider>
            <Main router={router}>
                <Component {...pageProps} key={router.key} />
            </Main>
        </ChakraProvider>
    )
}

export default Website