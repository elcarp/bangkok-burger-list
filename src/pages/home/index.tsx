import  { FunctionComponent } from 'react'
import BurgerCard from '../../components/burger_card'

const Home: FunctionComponent = () => {
	return (
		<>
			<div className='hero'>
				<div className='overlay' />
				<div className='hero-content'>
					<h1>Bangkok Burger List 🍔</h1>
					<p>The ultimate burger ranking list in Bangkok</p>
				</div>
			</div>
			<div className='w-full h-full ranking-section'>
				<div className='p-10'>
					<em className='text-white'>Last Updated: April 28, 2021</em>
					<BurgerCard />
				</div>
			</div>
		</>
	)
}

export default Home
