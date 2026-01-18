import { ChakraProvider, Box, useColorModeValue } from '@chakra-ui/react';
import Main from '../components/layouts/main'
import Fonts from '../components/fonts'
import theme from '../libs/theme.js';
import { AnimatePresence } from 'framer-motion'

import { useEffect, useState } from 'react'

const generateBinaryColumn = (minLines = 25, maxLines = 45) => {
    const linesCount = Math.floor(Math.random() * (maxLines - minLines + 1)) + minLines
    return Array.from({ length: linesCount })
        .map(() => (Math.random() > 0.5 ? '1' : '0'))
        .join('\n')
}

export const MatrixBackground = () => {
    const [isMounted, setIsMounted] = useState(false)
    const [columns, setColumns] = useState([])

    // Hook para detectar se estamos no light ou dark
    const maskOpacity = useColorModeValue('0.15', '0.8')

    useEffect(() => {
        const cols = Array.from({ length: 30 }).map((_, i) => ({
            id: i,
            duration: 8 + Math.random() * 12,
            delay: Math.random() * -20,
            left: Math.random() * 100,
            fontSize: 12 + Math.random() * 8,
            content: generateBinaryColumn()
        }))
        setColumns(cols)
        setIsMounted(true)
    }, [])

    if (!isMounted) return null

    return (
        <>
            {columns.map((col) => (
                <Box
                    key={col.id}
                    className="matrix-column"
                    style={{
                        left: `${col.left}%`,
                        animationDuration: `${col.duration}s`,
                        animationDelay: `${col.delay}s`,
                        fontSize: `${col.fontSize}px`,
                        opacity: maskOpacity, // Ajusta a visibilidade conforme o modo
                        maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)'
                    }}
                >
                    {col.content}
                </Box>
            ))}
        </>
    )
}

const Website = ({ Component, pageProps, router }) => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Main router={router}>
                <AnimatePresence onExitComplete initial={true}>
                    <MatrixBackground />
                    <Component {...pageProps} key={router.key} />
                </AnimatePresence>
            </Main>
        </ChakraProvider>
    )
}

export default Website