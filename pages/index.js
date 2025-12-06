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
    Icon,
    Badge
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import SocialMediaData from '../constants/social-media-data'
import TECH_SKILLS_DATA from '../constants/tech-skills-data'
import profileImage from '../public/images/profile-image.jpeg'

const Page = () => {

    const HighlightBox = ({ children }) => {
        return (
            <Badge display={'inline'} colorScheme='green'>
                {children}
            </Badge>
        );
    }

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
                                    src={profileImage.src}
                                    alt="Profile Image"
                                />
                            </Flex>

                            <Box mb='2rem' mt='2rem' w='100%' >
                                <Heading as='h2' variant='page-title'>
                                    Washington Moreno
                                </Heading>
                                <Text color={'gray'}>Software Engineer • 3+ years of experience • Web developer • Full Stack • IT Technician</Text>
                            </Box>

                            <Section delay={0.3}>
                                <Heading as='h3' variant="section-title">
                                    😎 About me
                                </Heading>
                                <Paragraph>
                                    I’m a Software Developer with 3+ years of experience building real-world applications using <HighlightBox>ReactJS</HighlightBox>, <HighlightBox>Next.js</HighlightBox>, <HighlightBox>Node.js</HighlightBox>, <HighlightBox>TypeScript</HighlightBox>, <HighlightBox>JavaScript</HighlightBox>, <HighlightBox>Express.js</HighlightBox>, <HighlightBox>MongoDB</HighlightBox>, and <HighlightBox>PostgreSQL</HighlightBox>.
                                    I’m passionate about writing clean, scalable, and maintainable code following modern best practices. <br /><br />

                                    I have worked in agile environments (<strong>Scrum</strong>, <strong>Kanban</strong>), collaborating with cross-functional teams to deliver efficient, user-friendly solutions.
                                    As a freelancer, I’ve focused on front-end projects and enjoy building MVPs that combine creativity, functionality, and entrepreneurship.
                                    <br /><br />
                                    I am currently pursuing a Bachelor’s degree in Computer Science at
                                    <Link target="_blank" href='https://ufam.edu.br/'> Federal University of Amazonas (UFAM)</Link>,
                                    and I hold a technical education in Software Development from
                                    <Link target="_blank" href='https://www.fundacaomatiasmachline.org.br/'> Fundação Matias Machline</Link>.
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
                                    🛠️ Skills & Tools
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
                                    <Grid marginY='3rem' templateColumns="repeat(auto-fit, minmax(10rem, 1fr))" gap={6}>
                                        {SocialMediaData.map((item) => {
                                            return (
                                                <GridItem key={item.link} >
                                                    <ListItem>
                                                        <Link href={item.link} target='_blank'>
                                                            <Button variant='ghost' colorScheme='teal' leftIcon={item.icon}>{item.label}</Button>
                                                        </Link>
                                                    </ListItem>
                                                </GridItem>
                                            )
                                        })}
                                    </Grid>
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