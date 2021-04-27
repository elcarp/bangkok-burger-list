import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

const Home: FunctionComponent = () => {
	return (
		<>
			<h1>I want to...</h1>
			<div className='cta-wrapper'>
				{/* <Link to='/transfer-app/quote'>
					<div className='cta'>
						Create a transaction{' '}
						<i className='fa fa-pencil' aria-hidden='true'></i>
					</div>
				</Link> */}
				{/* <Link to='/transfer-app/transactions'>
					<div className='cta'>
						Review a transaction{' '}
						<i className='fa fa-table' aria-hidden='true'></i>
					</div>
				</Link> */}
			</div>
		</>
	)
}

export default Home
