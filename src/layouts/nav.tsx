import React from 'react'
import { Link } from 'react-router-dom'
import Burger from '../assets/images/burger.png'

function Navigation() {
	return (
		<>
			<nav>
				<ul>
					<li className='logo'>
						<a href='/'><img src={Burger} alt='logo'/></a>
					</li>
					<li>
						<Link to='/'>The List</Link>
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>
					<li>
						<Link to='/contact'>Contact</Link>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default Navigation
