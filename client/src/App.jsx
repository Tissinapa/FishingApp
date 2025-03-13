
import { BrowserRouter  as Router, Routes, Route } from 'react-router-dom'
import {Home} from "./Pages/Home"
import {Dashboard} from "./Pages/Dashboard"
import {Login} from "./Pages/Login"
import {Profile} from "./Pages/Profile"
import {SignUp} from "./Pages/SignUp"

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/dashboard" element={<Dashboard/>} />
				<Route path="/login" element={<Login/>} />
				<Route path="/profile" element={<Profile/>} />
				<Route path="/signup" element={<SignUp/>} />
			</Routes>
		</Router>
	)
}

export default App
