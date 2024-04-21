import {
    Container,
    Box,
    Heading,
    Image,
    useColorModeValue,
    Link,
    Button
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Page = () => {
    return (
        <Container>
            <Box borderRadius='lg' bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3}>
                <div>Hello World</div>
            </Box>
            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as='h2' variant='page-title'>
                        Washington Antonio
                    </Heading>
                    <p>Computer Science Student / Software Developer / Mobile Developer / Web Developer</p>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    align='center'
                >
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="full"
                        src='/profile-image.jpeg'
                        alt="Profile Image"
                    />
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as='h3' variant="section-title">
                    Work
                </Heading>
                <Paragraph>I am Computer Science student at <Link href='https://ufam.edu.br/'>Universidade Federal do Amazonas
                </Link> and currently working at <Link href='https://www.itriad.org.br/'>Itriad Systems</Link>. I have 2 years of experience developing websites and mobile apps.
                    I also have a technical course certificate from <Link href='https://www.fundacaomatiasmachline.org.br/'>Fundação Matias Machline</Link> where I did my graduation from high school and learned about computers.
                </Paragraph>
                <Box align='center' my={4}>
                    <NextLink href='/works'>
                        <Button rightIcon={<ChevronRightIcon />}>
                            My portifolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>
        </Container>
    )
}

export default Page