import Head from 'next/head'
import Navbar from '../navbar.js'
import NoSsr from '../no-ssr.js'
import { Box, Container, Flex } from '@chakra-ui/react'
import VoxelDog from '../voxel-dog.js'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Washington Antonio - Homepage</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container pt={14}>
                <Flex>
                    {/* <NoSsr>
                        <VoxelDog />
                    </NoSsr> */}
                    {children}
                </Flex>
            </Container>
        </Box>
    );
}

export default Main;