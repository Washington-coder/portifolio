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
import igniteFeed from '../public/images/works/ignite-feed-bg.png'
import igniteTimer from '../public/images/works/ignite-timer.png'

const Works = () => {
    return (
        <Layout>
            <Container mt={'5rem'} >
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <Link href='https://spa-escreve-ai-next.vercel.app/' color={'white'} target='_blank' >
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
                    <Section>
                        <Link href='https://washington-coder.github.io/ignite-feed/' color={'white'} target='_blank' >
                            <Box w='100%' align='center'>
                                <Image
                                    src={igniteFeed}
                                    alt='Ignite Feed'
                                    className='grid-item-thumbnail'
                                    placeholder='blur'
                                />
                                <Text mt={2} fontSize={20}>
                                    Ignite feed
                                </Text>
                                <Text fontSize={14}>
                                    Simple project that simulates a feed of a social network
                                </Text>
                            </Box>
                        </Link>
                    </Section>
                    <Section>
                        <Link href='https://washington-coder.github.io/ignite-timer/' color={'white'} target='_blank' >
                            <Box w='100%' align='center'>
                                <Image
                                    src={igniteTimer}
                                    alt='Ignite Timer'
                                    className='grid-item-thumbnail'
                                    placeholder='blur'
                                />
                                <Text mt={2} fontSize={20}>
                                    Ignite Timer
                                </Text>
                                <Text fontSize={14}>
                                    A Pomodoro-style website for task management and timing.
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