import { Icon } from '@chakra-ui/react'
import {
    IoLogoInstagram,
    IoLogoGithub,
    IoLogoYoutube
} from 'react-icons/io5'

const getLogoGithub = () => {return <Icon as={IoLogoGithub}/>}
const getLogoInstagram = () => {return <Icon as={IoLogoInstagram}/>}
const getLogoYouTube = () => {return <Icon as={IoLogoYoutube}/>}

const SocialMediaData = [
    {
        label: '@Washington-coder',
        link: 'https://github.com/Washington-coder',
        icon: getLogoGithub()
    },
    {
        label: '@was.antonio',
        link: 'https://www.instagram.com/was.antonio/',
        icon: getLogoInstagram()
    },
    {
        label: '@washingtonc137',
        link: 'https://www.youtube.com/channel/UCsBcVOxrEPp91i3LqTFUkmg',
        icon: getLogoYouTube()
    }
]

export default SocialMediaData