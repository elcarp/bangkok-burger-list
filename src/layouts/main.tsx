import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from '../pages/about'
import Contact from '../pages/contact'
import Home from '../pages/home'

function Main() {
	return (
		<>
			<div className='App'>
				{/* <img src={burger} className='App-logo' alt='burger' /> */}
				<p>This is going to be an app about burgers</p>
				<Switch>
					<Route path='/transfer-app/transactions'>
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
