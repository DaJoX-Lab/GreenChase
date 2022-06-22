import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
	const theme = extendTheme({
		fonts: {
			heading: 'Inter',
			colors: {
				brand: {
					blue: '#3198FE',
					cyan: '#00FFF0',
					black: '#101010',
				},
			},
		},
	})

	return (
		<div className='bg-[#F4F9F3]'>
			<ChakraProvider theme={theme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</div>
	)
}

export default MyApp
