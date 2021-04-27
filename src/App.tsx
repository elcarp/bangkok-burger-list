import './App.css'
import React from 'react'
import Navigation from './layouts/nav'
import Main from './layouts/main'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
	return (
		<Router>
			<Navigation />
			<Main />
		</Router>
	)
}

export default App
