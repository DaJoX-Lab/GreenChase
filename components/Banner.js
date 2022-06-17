import Image from 'next/image'
import Ellipse1 from '../assets/Ellipse 2.png'
import Ellipse2 from '../assets/Subtract.png'

const Banner = () => {
	return (
		<div className='bg-[#F4F9F3] mt-[-13px]'>
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
					A traceability tool for environmental friendly product developed based
					on blockchain technology.
				</p>
			</div>
		</div>
	)
}

export default Banner
