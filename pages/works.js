import {
    Container,
    Heading,
    SimpleGrid,
    Divider,
    Box,
    Text,
    Link
} from '@chakra-ui/react'
import Image from 'next/image'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import smartRedacoes from '../public/images/works/smart_reda.png'

const Works = () => {
    return (
        <Layout>
            <Container mt={'5rem'} >
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <Link href='https://spa-escreve-ai-next.vercel.app/' target='_blank' >
                            <Box w='100%' align='center'>
                                <Image
                                    src={smartRedacoes}
                                    alt='Smart Redações'
                                    className='grid-item-thumbnail'
                                    placeholder='blur'
                                />
                                <Text mt={2} fontSize={20}>
                                    Smart Redações
                                </Text>
                                <Text fontSize={14}>
                                    Essay correction powered with AI
                                </Text>
                            </Box>
                        </Link>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    );
}

export default Works