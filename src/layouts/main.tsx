import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from '../pages/about'
import Contact from '../pages/contact'
import Home from '../pages/home'

function Main() {
	return (
		<>
			<div className='App'>
				<Switch>
					<Route path='/about'>
						<About />
					</Route>
					<Route path='/contact'>
						<Contact />
					</Route>
					<Route path='/'>
						<Home />
					</Route>
				</Switch>
			</div>
		</>
	)
}

export default Main
