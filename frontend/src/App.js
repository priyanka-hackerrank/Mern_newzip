import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { generateBaseURL } from "./utils";

function App() {
	const [message, setMessage] = React.useState("");
	React.useEffect(() => {
		fetch(generateBaseURL(), {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((data) => {
				setMessage(data.message);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<code>{message}</code>
			</header>
		</div>
	);
}

export default App;
