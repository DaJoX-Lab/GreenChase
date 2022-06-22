//import Arrow from "../assets/Arrow.webp";
//import Carbon from "../assets/carbon.webp";
import drop from '../assets/drop.webp'
import flash from '../assets/flash.webp'
import c02 from '../assets/co2.webp'
import Product1 from '../assets/product1.webp'
/*import consumer from '../assets/consumer.webp';
import fibre from '../assets/fibre.webp';
import manufactor from '../assets/manufactor.webp';
import organic from '../assets/organic.webp';
import raw from '../assets/raw.webp';
import recycle from '../assets/recycle.webp';
import transportation from '../assets/transportation.webp';
import weave from '../assets/weave.webp';
import world from '../assets/world.webp';*/
import { Progress } from '@chakra-ui/react'
import Image from 'next/image'

const Product = () => {
	const Amount = ({ icon, perc, amount, color }) => {
		return (
			<div className='w-full flex mb-4'>
				<div className='-mt-1 mr-1'>
					<Image
						width={20}
						height={20}
						alt={icon}
						src={icon}
						objectFit='contain'
					/>
				</div>
				<Progress width='100%' value={perc} colorScheme={color} />
				<p className='-mt-1 ml-1'>{amount}</p>
			</div>
		)
	}
	return (
		<div className='pt-20 bg-white'>
			<div className='Apps pl-10 pr-10 justify-between md:pl-40 md:pr-40'>
				<div className='flex'>
					<div className='border-[#36ca82] h-[158px] rounded-md border-4'>
						<Image
							src={Product1}
							alt='product'
							height={150}
							width={150}
							objectFit='contain'
						/>
					</div>
					<div className='ml-4 mt-8'>
						<h1 className='font-bold mb-4 text-1xl'>T-shirt</h1>
						<p>Code : 1234567890</p>
					</div>
				</div>
				<div className='justify-center w-[400px] pl-10 pr-10 border-[#3cf19a] rounded-md border-4 h-full text-center'>
					<h1 className='text-2xl mb-4 mt-4 font-bold text-[#459B71]'>
						Saving
					</h1>
					<div>
						<Amount icon={c02} perc='70' color='green' amount='1350g' />
						<Amount icon={drop} perc='60' color='blue' amount='110t' />
						<Amount icon={flash} perc='85' color='yellow' amount='160kw' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Product
