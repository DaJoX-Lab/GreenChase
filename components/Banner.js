import Image from 'next/image'
import Ellipse1 from '../assets/Ellipse 2.webp'
import Ellipse2 from '../assets/Subtract.webp'
import Rectangle from '../assets/Rectangle 59.webp'
import { FaFacebook } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaDiscord } from 'react-icons/fa'

const Banner = () => {
	return (
		<>
			<div className='md:block bg-white hidden'>
				<div className='flex pl-[5vw] pr-[0vw]  w-full'>
					<div className='w-ful pt-[20vh] absolute mr-[50vw]'>
						<h1 className='text-[#459B71] text-5xl font-bold mb-8'>
							GreenChase
						</h1>
						<p className='text-[#459B71] text-2xl font-semibold mb-4'>
							Trace your support for the environment
						</p>
						<p className='w-full max-w-lg'>
							A traceability tool for environmental friendly product developed
							based on blockchain technology.
						</p>
					</div>
					<div className='mt-20 ml-[40vw]'>
						<Image
							src={Rectangle}
							objectFit='contain'
							height={2000}
							alt='rectangle'
						/>
					</div>
				</div>
			</div>
			<div className='bg-[#F4F9F3] block md:hidden mt-[-13px]'>
				<div className='flex justify-center mt-20 align-middle md:h-[50vh] h-[80vh] w-full'>
					<div className='Apps pt-20 pl-5 pr-5 pb-4'>
						<div className='ml-0 mr-0 z-10 relative md:initial md:ml-[-200px] md:mr-[206px]'>
							<h1 className='text-[#459B71] text-5xl font-bold mb-8'>
								GreenChase
							</h1>
							<p className='text-[#459B71] text-2xl font-semibold mb-4'>
								Trace your support for the environment
							</p>
							<p className='md:hidden block'>
								A traceability tool for environmental friendly product developed
								based on blockchain technology.
							</p>
						</div>
						<div className=' md:hidden w-full max-w-full relative block mt-[-42vh] ml-[20%]'>
							<Image src={Ellipse1} alt='ellipse' height={300} width={300} />
						</div>
						<div className='md:mt-[-60px] ml-[-5vw] mt-[10vh] z-0'>
							<Image src={Ellipse2} alt='ellipse2' height={400} width={400} />
						</div>
						<div className=' hidden md:block  mt-[-50px] ml-[-600px]'>
							<Image src={Ellipse1} alt='ellipse' height={300} width={300} />
						</div>
					</div>
				</div>
				<div className=' ml-0 mt-0 w-full md:block hidden md:w-[300px] md:mt-[-100px] md:absolute md:ml-[400px]'>
					<p>
						A traceability tool for environmental friendly product developed
						based on blockchain technology.
					</p>
				</div>
			</div>
			<div className='bg-[#F4F9F3] md:block hidden pl-20 pr-20 -mt-40'>
				<div className='pt-8 justify-between flex'>
					<div className='ml-20'>
						<Image src={Ellipse2} alt='ellipse2' height={300} width={300} />
					</div>
					<div className='flex-col'>
						<div className='md:text-4xl text-4xl mr-5 mb-4'>
							<FaFacebook />
						</div>
						<div className='md:text-4xl text-4xl mr-5 mb-4 md:md-0'>
							<FaDiscord />
						</div>
						<div className='md:text-4xl text-4xl'>
							<AiOutlineTwitter />
						</div>
					</div>
				</div>
				<div className='md:block lg:block hidden w-full z-0 max-w-full ml-[50vw]'>
					<Image src={Ellipse1} alt='ellipse' height={500} width={500} />
				</div>
				<div className='lg:mt-[-60vh] md:block hidden mb-8 absolute pr-20 '>
					<h1 className='text-[#459B71] text-5xl font-bold mb-8 mt-6'>
						About Product
					</h1>
					<p className='ml-16'>
						GreenChase is a traceability tool for environment-friendly products
						developed based on blockchain technology. People can use this tool
						to trace whether the products they buy are environmentally friendly.
						It encourages users to be environmentally friendly by helping them
						trace and accumulate green credits, so as to improve the climate.
					</p>
				</div>
				<div className='lg:mt-[-30vh] md:block hidden mt-[-40vh] absolute pr-20 '>
					<h1 className='text-[#459B71] text-5xl font-bold mb-8'>
						What&lsquo;s Next
					</h1>
					<p className='ml-16'>
						As we are building the first version of the product during the GR-14
						hackathon, the functions will only cover the “tracing” part. In
						future versions, we are planning to cooperate with big brands that
						use recycled materials to produce their products, and help them
						better practice sustainable development.
					</p>
				</div>
			</div>
		</>
	)
}

export default Banner
