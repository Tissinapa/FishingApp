import logo from '../src/logo.svg';
import {useEffect, useState} from 'react';
import '../src/App.css';

function App() {
	const [message, setMessage] = useState("");
	useEffect(() => {
		fetch("http://localhost:5000/")
		.then((response) => response.text())
		.then((data) => setMessage(data))
		.catch((error) => console.error("Error fetching: ",error))
	}, []);
	return (
		<div>
			<h1> Fishing app</h1>
			<img src={logo} class="App-logo" alt="logo"></img>
			<p>{message}</p>
		</div>
	)
}

export default App;
