import React from 'react'
import { Link } from 'react-router-dom'
import Burger from '../assets/images/burger.png'

function Navigation() {
	return (
		<>
			<nav>
				<ul>
					<li className="logo">
						<img src={Burger}/>
					</li>
					<li>
						{/* <Link to='/transfer-app/quote'>Quote</Link> */}
					</li>
					<li>
						{/* <Link to='/transfer-app/transactions'>Transactions</Link> */}
					</li>
				</ul>
			</nav>
		</>
	)
}

export default Navigation
