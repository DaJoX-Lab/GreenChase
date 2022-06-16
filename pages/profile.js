import React from 'react'
import { NavBar, Footer } from '../components'

const Profile = () => {
	return (
		<div className='justify-center'>
			<NavBar />
			<div className='h-[50vh] w-full justify-center flex text-center'>
				<h1 className='text-6xl mt-20 text-black'>Profiles</h1>
			</div>
			<Footer />
		</div>
	)
}

export default Profile
