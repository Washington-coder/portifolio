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
    Text,
    Grid,
    GridItem,
    Icon
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import SocialMediaData from '../constants/social-media-data'
import TECH_SKILLS_DATA from '../constants/tech-skills-data'

const Page = () => {
    return (
        <Layout>
            <Container mt={'3rem'} >
                <Flex gap={'3rem'}>
                    <Box display={{ md: 'flex' }}>
                        <Box>
                            <Flex justifyContent={'center'}>
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
                            </Flex>

                            <Box mb='2rem' mt='2rem' w='100%' >
                                <Heading as='h2' variant='page-title'>
                                    Washington Antonio
                                </Heading>
                                <Text color={'gray'}>Software Engineer • 3 years of experience • Web developer • Full Stack </Text>
                            </Box>

                            <Section delay={0.3}>
                                <Heading as='h3' variant="section-title">
                                    About me
                                </Heading>
                                <Paragraph>
                                    I am Computer Science student at <Link href='https://ufam.edu.br/'>Universidade Federal do Amazonas
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

                            <Section delay={0.3}>
                                <Heading as='h3' variant="section-title">
                                    🛠️ Skills
                                </Heading>
                                <Grid marginY='3rem' templateColumns="repeat(auto-fit, minmax(120px, 1fr))" gap={6}>
                                    {TECH_SKILLS_DATA.map((item) => (
                                        <GridItem key={item.name} textAlign="center">
                                            {item.icon}
                                            <Text fontWeight={'bold'} mt={2}>{item.name}</Text>
                                        </GridItem>
                                    ))}
                                </Grid>

                            </Section>

                            <Section delay={0.3}>
                                <Heading as='h3' variant="section-title">
                                    📌 Latest Projects
                                </Heading>
                                <Paragraph>
                                </Paragraph>
                            </Section>

                            <Section delay={0.5}>
                                <Heading as='h3' variant='section-title'>
                                    📩 Social Media
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
                            </Section>
                        </Box>
                    </Box>
                </Flex>


            </Container>
        </Layout>
    )
}

export default Page