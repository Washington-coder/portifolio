import { Icon } from '@chakra-ui/react'
import {
    IoLogoInstagram,
    IoLogoGithub,
    IoLogoYoutube,
    IoLogoLinkedin
} from 'react-icons/io5'

const getLogoGithub = () => {return <Icon as={IoLogoGithub}/>}
const getLogoInstagram = () => {return <Icon as={IoLogoInstagram}/>}
const getLogoYouTube = () => {return <Icon as={IoLogoYoutube}/>}
const getLogoLinkedin = () => {return <Icon as={IoLogoLinkedin}/>}

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
    },
    {
        label: '@washington-riega',
        link: 'https://www.linkedin.com/in/washington-riega/',
        icon: getLogoLinkedin()
    }
]

export default SocialMediaData