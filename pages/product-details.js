import Arrow from '../assets/Arrow.webp'
import Carbon from '../assets/carbon.webp'
import { NavBar } from '../components'
import drop from '../assets/drop.webp'
import flash from '../assets/flash.webp'
import c02 from '../assets/co2.webp'
import Product1 from '../assets/product1.webp'
import consumer from '../assets/consumer.webp'
import fibre from '../assets/fibre.webp'
import manufactor from '../assets/manufactor.webp'
import organic from '../assets/organic.webp'
import raw from '../assets/raw.webp'
import recycle from '../assets/recycle.webp'
import transportation from '../assets/transportation.webp'
import weave from '../assets/weave.webp'
import world from '../assets/world.webp'
import { Progress } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

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

	const ImageCircle = ({
		image,
		text,
		support,
		image1,
		image2,
		image3,
		image4,
		text1,
		text2,
		text3,
	}) => {
		return (
			<div className='justify-center text-center mobile'>
				<div className='rounded-full cursor-pointer'>
					<Link href='/raw-material'>
						<Image src={image} alt={image} height={100} width={100} />
					</Link>
				</div>
				<h1 className='text-1xl font-bold'>{text}</h1>
				<p className='mt-8'>{support}</p>
				<div className='mt-4'>
					{image1 ? (
						<Image
							src={image1}
							height={20}
							width={20}
							alt={image1}
							objectFit='contain'
						/>
					) : (
						<div className='h-4 w-2' />
					)}
					{image2 && (
						<Image
							src={image2}
							height={20}
							width={20}
							alt={image2}
							objectFit='contain'
						/>
					)}
					{image3 && (
						<Image
							src={image3}
							height={20}
							width={20}
							alt={image3}
							objectFit='contain'
						/>
					)}
					{image4 && (
						<Image
							src={image4}
							height={20}
							width={20}
							alt={image4}
							objectFit='contain'
						/>
					)}
				</div>
				<div className='mt-4'>
					<p className='mb-2'>{text1}</p>
					<p className='mb-2'>{text2}</p>
					<p>{text3}</p>
				</div>
			</div>
		)
	}
	return (
		<>
			<NavBar />
			<div className='pt-20 bg-white'>
				<div className='Apps pl-5 pr-5 justify-between md:pl-40 md:pr-40'>
					<div className='Apps justify-center text-center'>
						<div className='border-[#36ca82] h-[158px] rounded-lg border-4'>
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
					<div className='justify-center md:w-[400px] w-[100%] pl-10 pr-10 border-[#3cf19a] rounded-md border-4 h-full text-center'>
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
				<div className='justify-center item-center text-center pl-5 pr-5 md:pl-20 md:pr-20 pt-10'>
					<h1 className='font-bold text-2xl text-[#459B71]'>
						Blockchain Traceability
					</h1>
					<div className='Apps mt-8 justify-center'>
						<div className='mt-40 hidden md:block mr-8 ml-[-100px]'>
							<h1 className='font-bold text-1xl mb-4'>Green Support</h1>
							<h1 className='font-bold text-1xl mb-4'>Certificate</h1>
							<div className='flex'>
								<h1 className='font-bold text-1xl mb-4'>Saving</h1>
								<div className='ml-8 flex-row mb-2'>
									<div className='mb-2'>
										<Image
											width={20}
											height={20}
											alt='co2'
											src={c02}
											objectFit='contain'
										/>
									</div>
									<div className='mb-2'>
										<Image
											width={20}
											height={20}
											alt='drop'
											src={drop}
											objectFit='contain'
										/>
									</div>
									<div>
										<Image
											width={20}
											height={20}
											alt='flash'
											src={flash}
											objectFit='contain'
										/>
									</div>
								</div>
							</div>
							<h1 className='font-bold text-1xl mb-4'>Others</h1>
						</div>
						<ImageCircle
							text='Raw Materials'
							image1={organic}
							text1='1000g'
							text2='1t'
							text3='3.5kw'
							image2={world}
							support='organic cotton'
							image={raw}
						/>
						<div className='mt-2 ml-2 mr-2'>
							<Image src={Arrow} width={50} alt='arrow' objectFit='contain' />
						</div>
						<ImageCircle
							text='Fibre'
							support='-'
							text1='0g'
							text2='0t'
							text3='10kw'
							image1={organic}
							image2={world}
							image={fibre}
						/>
						<div className='mt-2 ml-2 mr-2'>
							<Image src={Arrow} width={50} alt='arrow' objectFit='contain' />
						</div>
						<ImageCircle
							text='Weaving'
							support='-'
							text1='0g'
							text2='0t'
							text3='10kw'
							image={weave}
						/>
						<div className='mt-2 ml-2 mr-2'>
							<Image src={Arrow} alt='arrow' width={50} objectFit='contain' />
						</div>
						<ImageCircle
							text='Manufactory'
							support='-'
							text1='0g'
							text2='0t'
							text3='10kw'
							image1={organic}
							image2={Carbon}
							mage3={recycle}
							image4={world}
							image={manufactor}
						/>
						<div className='mt-2 ml-2 mr-2'>
							<Image src={Arrow} alt='arrow' width={50} objectFit='contain' />
						</div>
						<ImageCircle
							text='Transportation'
							text1='9000g'
							text2='0t'
							text3='0kw'
							support='electric truck'
							image={transportation}
						/>
						<div className='mt-2 ml-2 mr-2'>
							<Image src={Arrow} alt='arrow' width={50} objectFit='contain' />
						</div>
						<ImageCircle text='Consumer' support='You' image={consumer} />
					</div>
				</div>
			</div>
		</>
	)
}

export default Product
