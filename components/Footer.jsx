import Image from 'next/image'
import FooterImage from '../assets/Vector.png'
import Ellipse1 from '../assets/Ellipse 1.png'
import { FaFacebook } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaDiscord } from 'react-icons/fa'

const Footer = () => {
	return (
		<div className='mb-0 ml-0 bg-[#F4F9F3] mr-0'>
			<Image src={FooterImage} />
			<div className='absolute mt-[-400px] ml-8'>
				<Image src={Ellipse1} height={300} width={300} />
			</div>
			<div className='absolute mt-[-70px] ml-[80vw] text-white'>
				<div className='flex'>
					<div className='text-5xl mr-5'>
						<FaFacebook />
					</div>
					<div className='text-5xl mr-5'>
						<FaDiscord />
					</div>
					<div className='text-5xl'>
						<AiOutlineTwitter />
					</div>
				</div>
			</div>
			<div className=' h-4 mt-[-6px] bg-[#1D4B41]' />
		</div>
	)
}

export default Footer
