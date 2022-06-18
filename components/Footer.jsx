import Image from 'next/image'
import FooterImage from '../assets/Vector.webp'
import Jing from '../assets/jing.webp'
import Paschal from '../assets/paschal.webp'
import Kuan from '../assets/kuan.webp'
import Dawal from '../assets/dawar.webp'
import Hairui from '../assets/hairui.webp'
import Ellipse1 from '../assets/Ellipse 1.webp'
import { FaFacebook } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaDiscord } from 'react-icons/fa'

const Footer = () => {
	const Member = ({ src, name, role }) => {
		return (
			<div className='flex'>
				<Image src={src} alt={name} height={30} width={30} />
				<p>{name}</p>
				<p>{role}</p>
			</div>
		)
	}

	return (
		<div className='mb-0 ml-0 mt-20 bg-[#F4F9F3] mr-0'>
			<div className='md:block hidden'>
				<Image src={FooterImage} alt='footer' />
			</div>
			<div className='md:absolute md:block hidden md:mt-[-400px] ml-8'>
				<Image src={Ellipse1} height={300} alt='ellipse1' width={300} />
			</div>
			<div className='flex justify-center items-center w-full'>
				<h1 className='text-3xl font-bold text-white'>Team Member</h1>
				<div className='flex'>
					<div className='flex-col'>
						<Member src={Jing} name='Jing' role='Product Manager' />
						<Member src={Hairui} name='Hairui Huang' role='UI/UX Designer' />
						<Member src={Dawal} name='Dawar Kunal' role='Engineer' />
					</div>
					<div>
						<Member src={Kuan} name='Kuannnn' role='Engineer' />
						<Member src={Paschal} name='Okwuosah Pashal' role='Engineer' />
					</div>
				</div>
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
