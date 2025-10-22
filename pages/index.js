import {
    Container,
    Box,
    Heading,
    Image,
    useColorModeValue,
    Link,
    Button,
    List,
    ListItem,
    Flex,
    Text
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import SocialMediaData from '../constants/social-media-data'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
    return (
        <Layout>
            <Container mt={'3rem'} >
                <Flex gap={'3rem'}>
                    <Image
                        w={'200px'}
                        h={'200px'}
                        borderColor="GrayText"
                        borderWidth={2}
                        borderStyle="solid"
                        borderRadius="full"
                        src='/profile-image.jpeg'
                        alt="Profile Image"
                    />
                    <Box display={{ md: 'flex' }}>
                        <Box w='500px' >
                            <Heading as='h2' variant='page-title'>
                                Washington Antonio
                            </Heading>
                            <Text color={'gray'}> 22 years old • Software Engineer • 3 years of experience • Web developer • Full Stack </Text>
                        </Box>
                    </Box>
                </Flex>
                {/* <Section delay={0.1}>
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
                </Section> */}
                {/* <Section delay={0.2}>
                    <Heading as='h3' variant='section-title'>
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>2003</BioYear>
                        Born in Manaus, Brazil.
                    </BioSection>
                    <BioSection>
                        <BioYear>2020</BioYear>
                        Graduated from high school and got computing technical course certificate from <Link href='https://www.fundacaomatiasmachline.org.br/'>Fundação Matias Machline</Link>.
                    </BioSection>
                    <BioSection>
                        <BioYear>2022</BioYear>
                        Got in <Link href='https://www.itriad.org.br/'>Itriad Systems</Link>.
                    </BioSection>
                    <Heading as='h3' variant='section-title'>
                        I ❤️
                    </Heading>
                    Rock songs, video games, movies, books, going to the gym and hanging out with friends
                </Section> */}

                {/* <Section delay={0.3}>
                    <Heading as='h3' variant='section-title'>
                        On the web
                    </Heading>
                    <List>
                        {SocialMediaData.map((item) => {
                            return (
                                <ListItem>
                                    <Link href={item.link} target='_blank'>
                                        <Button variant='ghost' colorScheme='teal' leftIcon={item.icon}>{item.label}</Button>
                                    </Link>
                                </ListItem>
                            )
                        })}
                    </List>
                </Section> */}
            </Container>
        </Layout>
    )
}

export default Page