import Image from 'next/image'
import Ellipse1 from '../assets/Ellipse 2.png'
import Ellipse2 from '../assets/Subtract.png'

const Banner = () => {
	return (
		<div className='bg-[#F4F9F3] mt-[-13px]'>
			<div className='flex justify-center mt-20 align-middle h-[50vh] w-full'>
				<div className='flex pt-20 pl-5 pr-5 pb-4'>
					<div className='ml-[-200px] mr-[206px]'>
						<h1 className='text-[#459B71] text-5xl font-bold mb-8'>
							GreenChase
						</h1>
						<p className='text-[#459B71] text-2xl font-semibold mb-4'>
							Trace your support for the environment
						</p>
					</div>
					<div className='mt-[-60px] z-0'>
						<Image src={Ellipse2} height={400} width={400} />
					</div>
					<div className=' mt-[-50px] ml-[-600px]'>
						<Image src={Ellipse1} height={300} width={300} />
					</div>
				</div>
			</div>
			<div className='w-[300px] mt-[-100px] absolute ml-[400px]'>
				<p>
					A traceability tool for environmental friendly product developed based
					on blockchain technology.
				</p>
			</div>
		</div>
	)
}

export default Banner
