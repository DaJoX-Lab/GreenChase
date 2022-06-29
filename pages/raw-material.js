import { NavBar } from '../components'
import Image from 'next/image'
import { Progress } from '@chakra-ui/react'
import drop from '../assets/drop.webp'
import flash from '../assets/flash.webp'
import c02 from '../assets/co2.webp'
import Product1 from '../assets/product1.webp'

const Raw = () => {
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
				<Progress
					width='100%'
					className='rounded-lg'
					value={perc}
					colorScheme={color}
				/>
				<p className='-mt-1 ml-1'>{amount}</p>
			</div>
		)
	}

	const THEAD = () => {
		return (
			<div className='justify-around flex mt-4'>
				<h1 className='font-bold text-1xl'>Characterisation</h1>
				<h1 className='font-bold text-1xl'>Specific Type</h1>
				<h1 className='font-bold text-1xl'>Description</h1>
				<h1 className='font-bold text-1xl'>Supportive Files</h1>
				<h1 className='font-bold text-1xl'>Update Date</h1>
				<h1 className='font-bold text-1xl'>Related links</h1>
			</div>
		)
	}
	const TBODY = ({ text1, text2, text3, text4, text5, text6 }) => {
		return (
			<div className='justify-around flex mt-4 mb-8'>
				<h1 className='text-1xl'>{text1}</h1>
				<h1 className='text-1xl'>{text2}</h1>
				<h1 className='text-1xl'>{text3}</h1>
				<h1 className='text-1xl'>{text4}</h1>
				<h1 className='text-1xl'>{text5}</h1>
				<h1 className='text-1xl'>{text6}</h1>
			</div>
		)
	}
	return (
		<div className='bg-white'>
			<NavBar />
			<div className='Apps pt-20 bg-white justify-between pl-20 pr-20 md:pl-10 md:pr-10'>
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
			<div className='pl-5 mt-8 bg-white pr-5'>
				<h1 className='text-[#459B71] font-bold text-2xl'>Raw Materials </h1>
				<div className='w-[100%] mt-4 bg-[#B3EF69] h-2' />
				<THEAD />
				<div className='w-[100%] mt-4 bg-[#B3EF69] h-1' />
				<TBODY
					text1='Product Quality'
					text2='Chemical Residue'
					text3='No chemical residue'
					text4='XXXXXXXXXXX.pdf'
					text5='2020.1.23'
					text6='XXXXXXXXXXXXXXX'
				/>
				<TBODY
					text1='Product Quality'
					text2='Chemical Residue'
					text3='No chemical residue'
					text4='XXXXXXXXXXX.pdf'
					text5='2020.1.23'
					text6='XXXXXXXXXXXXXXX'
				/>
				<TBODY
					text1='Product Quality'
					text2='Chemical Residue'
					text3='No chemical residue'
					text4='XXXXXXXXXXX.pdf'
					text5='2020.1.23'
					text6='XXXXXXXXXXXXXXX'
				/>
				<TBODY
					text1='Product Quality'
					text2='Chemical Residue'
					text3='No chemical residue'
					text4='XXXXXXXXXXX.pdf'
					text5='2020.1.23'
					text6='XXXXXXXXXXXXXXX'
				/>
				<TBODY
					text1='Product Quality'
					text2='Chemical Residue'
					text3='No chemical residue'
					text4='XXXXXXXXXXX.pdf'
					text5='2020.1.23'
					text6='XXXXXXXXXXXXXXX'
				/>
				<TBODY
					text1='Product Quality'
					text2='Chemical Residue'
					text3='No chemical residue'
					text4='XXXXXXXXXXX.pdf'
					text5='2020.1.23'
					text6='XXXXXXXXXXXXXXX'
				/>
			</div>
		</div>
	)
}

export default Raw
