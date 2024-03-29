import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
    return (
        <Container>
            <Box borderRadius='lg' bg='red' p={3}>
                <div>Hello World</div>
            </Box>
            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as='h2' variant='page-title'>
                        Washington Antonio
                    </Heading>
                    <p>Computer Science Student / Software Developer / Mobile Developer / Web Developer</p>
                </Box>
            </Box>

        </Container>
    )
}

export default Page