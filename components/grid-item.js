import NextLink from 'next/link'
import Image from 'next/image'
import {
    Box,
    Text,
    LinkBox
} from '@chakra-ui/react'

import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
    <Box w='100%' align='center'>
        <LinkBox cursor='pointer' href={href} target='_blank'>
            <Image
                src={thumbnail}
                alt={title}
                className="grid-item-thumbnail"
                placeholder='blur'
                loading='lazy'
            />
            <Text mt={2}>{title}</Text>
            <Text fontSize={14}>{children}</Text>
        </LinkBox>
    </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
    <Box w='100%' align='center'>
        <NextLink href={`/works/${id}`} cursor='pointer'>
            <Image
                src={thumbnail}
                alt={title}
                className='grid-item-thumbnail'
                placeholder='blur'
            />
            <Text mt={2} fontSize={20}>
                {title}
            </Text>
            <Text fontSize={14}>{children}</Text>
        </NextLink>
    </Box>
)

export const GridItemStyle = () => (
    <Global styles={`
    .grid-item-thumbnail {
        border-radius: 12px;
    }
    `}
    />
)