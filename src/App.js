import "./App.css";
import DiplayWeather from "./components/DiplayWeather";
import Form from "./components/Form";
import { useState, useEffect } from "react";
import axios from "axios";

import Loading from "./components/Loading.js";
import Error from "./components/Error";

function App() {
	const [searchURL, setsearchURL] = useState("");
	const [showForm, setshowForm] = useState(true);
	const [showWeather, setshowWeather] = useState(false);
	const [LoadingSpinner, setLoadingSpinner] = useState(false);

	const [formattedData, setformattedData] = useState({});
	const [error, setError] = useState(null);
	const getData = (data) => {
		let url = `https://weather-app-backend-production-20aa.up.railway.app/citySearch?city=${data.cityname}&temp=${data.temp}`;
		setsearchURL(url);
	};
	async function fetchData(url) {
		try {
			let response = await axios.get(url);
			let data = response.data;

			setformattedData(data);
		} catch (error) {
			setError(error.message);
		}
	}

	useEffect(() => {
		fetchData(searchURL);
	}, [searchURL]);

	return (
		<div>
			{LoadingSpinner && <Loading />}

			{error && !LoadingSpinner && <Error errorMsg={error} />}
			{showForm && !error && !LoadingSpinner && !showWeather && (
				<Form onSubmit={getData} showform={setshowForm} loading={setLoadingSpinner} weather={setshowWeather} />
			)}
			{!LoadingSpinner && !error && !showForm && showWeather && <DiplayWeather function={setshowForm} data={formattedData} />}
		</div>
		// <Error />
	);
}

export default App;
