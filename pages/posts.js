import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbFishWorkflow from '../public/images/contents/youtube-fish-workflow.jpg'
import thumbMyDeskSetup from '../public/images/contents/youtube-my-desk-setup.jpg'
import thumb500PaidUsers from '../public/images/contents/blog-500-paid-users.jpg'
import thumbFinantialGoal from '../public/images/contents/blog-financial-goal.png'
import thumbHowToPriceYourself from '../public/images/contents/blog-how-to-price-yourself.jpg'
import thumb50xFaster from '../public/images/contents/youtube-50x-faster.jpg'

const Posts = () => (
    <Layout title="Posts">
        <Container>
            <Heading as='h4' fontSize={20} mb={4}>Popular Posts</Heading>
        </Container>
        <Section delay={0.1}>
            <SimpleGrid columns={[1, 2, 2]} gap={6}>
                <GridItem
                    title="My Fish workflow"
                    thumbnail={thumbFishWorkflow}
                />
                <GridItem
                    title="My desk setup 2020"
                    thumbnail={thumbMyDeskSetup}
                />
                <GridItem
                    title="500 paid users"
                    thumbnail={thumb500PaidUsers}
                />
                <GridItem
                    title="Finantial goal"
                    thumbnail={thumbFinantialGoal}
                />
                <GridItem
                    title="How to price yourself"
                    thumbnail={thumbHowToPriceYourself}
                />
                <GridItem
                    title="50x faster"
                    thumbnail={thumb50xFaster}
                />
            </SimpleGrid>
        </Section>
    </Layout>
)

export default Posts
