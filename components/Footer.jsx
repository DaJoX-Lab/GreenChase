import Image from 'next/image'
import FooterImage from '../assets/Vector.png'
import Ellipse1 from '../assets/Ellipse 1.png'
import { FaFacebook } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaDiscord } from 'react-icons/fa'

const Footer = () => {
	return (
		<div className='mb-0 ml-0 bg-[#F4F9F3] mr-0'>
			<div className='md:block hidden'>
				<Image src={FooterImage} alt='footer' />
			</div>
			<div className='md:absolute md:block hidden md:mt-[-400px] ml-8'>
				<Image src={Ellipse1} height={300} alt='ellipse1' width={300} />
			</div>
			<div className='md:absolute inherit md:mt-[-70px] mt-[20vh] ml-[85vw] md:ml-[80vw] text-[#323232] md:text-white'>
				<div className='Apps'>
					<div className='md:text-5xl text-4xl mr-5 mb-2 md:mb-0'>
						<FaFacebook />
					</div>
					<div className='md:text-5xl text-4xl mr-5 mb-2 md:md-0'>
						<FaDiscord />
					</div>
					<div className='md:text-5xl text-4xl'>
						<AiOutlineTwitter />
					</div>
				</div>
			</div>
			<div className='md:block hidden h-4 mt-[-6px] bg-[#1D4B41]' />
		</div>
	)
}

export default Footer
