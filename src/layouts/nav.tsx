import React from 'react'
import { Link } from 'react-router-dom'
import Burger from '../assets/images/burger.png'

function Navigation() {
	return (
		<>
			<nav>
				<ul>
					<li className='logo'>
						<img src={Burger} alt='logo'/>
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>
					<li>
						<Link to='/contact'>Contact us</Link>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default Navigation
