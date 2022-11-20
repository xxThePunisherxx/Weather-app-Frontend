import "./App.css";
import DiplayWeather from "./components/DiplayWeather";
import Form from "./components/Form";
import { useState, useEffect } from "react";
import axios from "axios";

import Loading from "./components/Loading.js";

function App() {
	const [searchURL, setsearchURL] = useState("");
	const [showForm, setshowForm] = useState(true);
	const [showWeather, setshowWeather] = useState(false);
	const [LoadingSpinner, setLoadingSpinner] = useState(false);

	const [formattedData, setformattedData] = useState({});

	const getData = (data) => {
		let url = `http://localhost:6969/citySearch?city=${data.cityname}&temp=${data.temp}`;
		setsearchURL(url);
	};
	async function fetchData(url) {
		let response = await axios.get(url);
		let data = response.data;

		setformattedData(data);
	}

	useEffect(() => {
		fetchData(searchURL);
	}, [searchURL]);

	return (
		<div>
			{LoadingSpinner && <Loading />}
			{!LoadingSpinner && showForm && !showWeather && (
				<Form onSubmit={getData} showform={setshowForm} loading={setLoadingSpinner} weather={setshowWeather} />
			)}
			{!LoadingSpinner && !showForm && showWeather && <DiplayWeather function={setshowForm} data={formattedData} />}
		</div>
	);
}

export default App;
