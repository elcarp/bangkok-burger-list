import './App.css'
import React from 'react'
import Navigation from './layouts/nav'
import Main from './layouts/main'
import { Router } from 'react-router-dom'

function App() {
	return (<>
		 {/* <div className='App'>
		 	<img src={burger} className='App-logo' alt='burger' />
		 	<p>This is going to be an app about burgers</p>
		 </div>
		 <Router> */}
			<Navigation />
			<Main />
		 {/* </Router> */}
		</>
	)
}

export default App
