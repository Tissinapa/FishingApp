
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import {Home} from "./Pages/Home"
import {Dashboard} from "./Pages/Dashboard"
import {Login} from "./Pages/Login"

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/dashboard" element={<Dashboard/>} />
				<Route path="/login" element={<Login/>} />
			</Routes>
		</Router>
	)
}

export default App
