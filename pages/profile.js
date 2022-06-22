import React from 'react'
import { NavBar } from '../components'
import Image from 'next/image'
import ProfileImage from '../assets/profile.webp'
import Product1 from '../assets/product1.webp'
import Product2 from '../assets/product2.webp'
import Product3 from '../assets/product3.webp'
import Product4 from '../assets/product4.webp'
import Product5 from '../assets/product5.webp'
import Product6 from '../assets/product6.webp'
import Group from '../assets/Group 50.webp'
import drop from '../assets/drop.webp'
import flash from '../assets/flash.webp'
import c02 from '../assets/co2.webp'
import { Progress } from '@chakra-ui/react'

const Profile = () => {
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
		<div className='justify-center'>
			<NavBar />
			<div className='md:flex-row Apps flex-col pt-20 pl-10 pr-10 md:pl-20 md:pr-20 justify-between'>
				<div className='justify-center text-center'>
					<Image
						height={250}
						alt='profile'
						width={250}
						src={ProfileImage}
						objectFit='contain'
					/>
					<h1 className='font-bold mt-4'>Daisy</h1>
					<p>shanghai</p>
				</div>
				<div className='justify-center text-center'>
					<Image
						height={250}
						alt='group'
						width={250}
						src={Group}
						objectFit='contain'
					/>
				</div>
				<div className='justify-center text-center'>
					<h1 className='text-2xl mb-4 mt-4 font-bold text-[#459B71]'>
						Thanks for your contribution for saving
					</h1>
					<div>
						<Amount icon={c02} perc='70' color='green' amount='1350g' />
						<Amount icon={drop} perc='60' color='blue' amount='110t' />
						<Amount icon={flash} perc='85' color='yellow' amount='160kw' />
					</div>
				</div>
			</div>
			<div className='justify-center mb-8 bg-white mt-8 text-center h-full md:h-[60vh] border-[#36ca82] rounded-md border-4	'>
				<h1 className='text-[#459B71] text-2xl mt-4'>My Purchase</h1>
				<div className='md:flex grid grid-rows-4 grid-flow-col gap-2 pr-10 pl-10 mt-4'>
					{[Product1, Product2, Product3, Product4, Product5, Product6].map(
						(item, index) => {
							return (
								<div key={index} className='ml-8 mb-4'>
									<Image
										src={item}
										alt={item}
										height={80}
										width={80}
										objectFit='contain'
									/>
								</div>
							)
						}
					)}
				</div>
			</div>
		</div>
	)
}

export default Profile
