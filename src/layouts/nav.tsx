import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
	return (
		<>
			<nav>
				<ul>
					<li className="logo">
						{/* <Link to='/transfer-app'>FXApp</Link> */}
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
