import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
function Contact() {

  const allSocialMediaLinks = {
    Gmail:{
      category:'Gmail',
      link:'mailto:rishikpuneetm@gmail.com',
      icon:'',

    },
    Twitter:{
      category:'Twitter',
      link:'https://twitter.com/',
      icon:'../assets/icons/Twitter.png',
    },
    Github:{
      category:'Github',
      link:'https://github.com/rpmwin',
      icon:'../assets/icons/github.png',
    },
    LinkedIn:{
      category:'LinkedIn',
      link:'https://www.linkedin.com/in/rishik-puneet-m-125261229',
      icon:'../assets/icons/linkedin.png',
    },
    Facebook:{
      category:'Facebook',
      link:'https://www.facebook.com/',
      icon:'../assets/icons/facebook.png',
    },
    Discord:{
      category:'Discord',
      link:'https://discord.com/users/1057328346440155277',
      icon:'../assets/icons/discord.png',
    }

  }

  return (
    <div className=' text-center '>
      <div className='BaseNeutralBig text-[100px] tracking-wider'> CONTACT</div>
      <div className='text-[20px]'>Let's Connect and build something <span>COOL</span>   together</div>
      <div>
        {

        }
      </div>
    </div>
  )
}

export default Contact