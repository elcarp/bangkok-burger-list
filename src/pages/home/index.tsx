import React, { FunctionComponent } from 'react'

const Home: FunctionComponent = () => {
	return (
		<>
			<div className='hero'>
				<div className='hero-content'>
					<h1>Bangkok Burger List</h1>
					<p>The ultimate burger ranking list in Bangkok</p>
				</div>
			</div>
			<div className='w-100 h-screen ranking-section'></div>
		</>
	)
}

export default Home
