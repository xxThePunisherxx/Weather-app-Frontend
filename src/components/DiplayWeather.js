import React, { useState } from "react";
import styles from "./DisplayWeather.module.css";
import { DateTime } from "luxon";

const DiplayWeather = (props) => {
	function handleClick() {
		//! ------------------------------------------------------------- reset button ---------------------------------------------------------------
		props.function(true);
		window.location.reload();
	}

	function getDayOfWeek(day, month, year) {
		const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		const date = new Date(year, month - 1, day);
		return daysOfWeek[date.getDay()];
	}
	function getMonthName(month) {
		const d = new Date();
		d.setMonth(month - 1);
		const monthName = d.toLocaleString("default", { month: "long" });
		return monthName;
	}
	function formattNumbers(second, minute, hour, day, year) {
		day < 10 ? setDD(`0${day}`) : setDD(day);
		year < 10 ? setYY(`0${year}`) : setYY(year);
		hour < 10 ? setHr(`0${hour}`) : setHr(`${hour}`);
		minute < 10 ? setMin(`0${minute}`) : setMin(`${minute}`);
		second < 10 ? setSec(`0${second}`) : setSec(second);
	}

	let [hr, setHr] = useState("");
	let [min, setMin] = useState("");
	let [sec, setSec] = useState("");
	let [DD, setDD] = useState("");
	let [MM, setMM] = useState("");
	let [YY, setYY] = useState("");
	let [Day, setDay] = useState("");
	let Data = props.data;
	let TimeZone = Data[0].TimeZone;
	let City = Data[0].City;
	let Country = Data[0].Country;
	let FeelsLike = Data[0].Current.FeelsLike;
	let Text = Data[0].Current.Text;
	let Temperature = Data[0].Current.Temperature;
	let Rise = Data[0].SunTime.Rise.substr(11, 5);
	let Set = Data[0].SunTime.Set.substr(11, 5);
	let Max = Data[0].Temperature.Maximum;
	let Min = Data[0].Temperature.Minimum;
	let Humidity = Data[0].Current.RelativeHumidity;
	let Icon = Data[0].Current.Icon;
	if (Icon < 10) {
		Icon = "0" + Icon;
	}
	let ICONURL = `https://developer.accuweather.com/sites/default/files/${Icon}-s.png`;

	setInterval(() => {
		let now = DateTime.now().setZone(TimeZone); //get local  time using the timezone
		setDay(`${getDayOfWeek(now.day, now.month, now.year)}, `);
		setMM(getMonthName(now.month));
		formattNumbers(now.second, now.minute, now.hour, now.day, now.year); // add 0 in front if the value is less than 10
	}, 1000);

	return (
		<div className={styles.disp}>
			<div className={styles.container}>
				<div className={styles.local}>
					<h1>
						{City}, {Country}
					</h1>
					<h2>
						{Day}
						{DD} {MM} {YY}
					</h2>
					<h2>
						{hr} : {min} : {sec}
					</h2>
				</div>
				<div className={styles.todays}>
					<div className={styles.headline}>
						<div className={styles.headlineLeft}>
							<h1>
								{Temperature.Value} &deg;{Temperature.Unit}
							</h1>
							<h2>{Text}</h2>
						</div>
						<div className={styles.headlineRight}>
							<img src={ICONURL} alt="" />
						</div>
					</div>
				</div>
				<div className={styles.subheading}>
					<h2>
						Feels like: {FeelsLike.Value}&deg;{FeelsLike.Unit}
					</h2>
					<h2>Humidity: {Humidity}%</h2>
					<h2>
						Max temp: {Max.Value}&deg;{Max.Unit}
					</h2>
					<h2>
						Min temp: {Min.Value}&deg;{Min.Unit}
					</h2>
				</div>
				<div className={styles.times}>
					<div className={styles.rise}>
						<img src="./Image/rise.png" alt="" />

						<h1>Rise: {Rise}</h1>
					</div>
					<div className={styles.set}>
						<img src="./Image/set.png" alt="" />

						<h1>Set: {Set}</h1>
					</div>
				</div>
				<div className={styles.forecastContents}>
					{Data.map((DailyData) => {
						let { DayForecast, Date, Temperature } = DailyData;
						let Icon = DayForecast.Icon;
						let Text = DayForecast.IconPhrase;
						let Min = Temperature.Minimum;
						let Max = Temperature.Maximum;
						let year = Date.substr(0, 4);
						let month = Date.substr(5, 2);
						let day = Date.substr(8, 2);
						let DayName = getDayOfWeek(day, month, year);
						if (Icon < 10) {
							Icon = "0" + Icon;
						}
						let ICONURL = `https://developer.accuweather.com/sites/default/files/${Icon}-s.png`;
						return <Individual key={Date} day={DayName} Max={Max} Min={Min} img={ICONURL} text={Text} />;
					})}
				</div>
			</div>
			<button className={styles.Btn} onClick={handleClick}>
				Change Location
			</button>

			<div className={styles.source}>
				<h3>Powered By: </h3>
				<a href="https://www.accuweather.com/">
					<img src="./Image/source.png" alt="" />
				</a>
			</div>
		</div>
	);
};
const Individual = (props) => {
	// ! --------------------------------------------------- Daily Forecast Cards ---------------------------------------------------------------------------
	return (
		<div className={styles.forecasts}>
			<h1>{props.day}</h1>
			<div className={styles.minmax}>
				<h1>
					{props.Max.Value}&deg;{props.Max.Unit}&nbsp;
				</h1>
				<h1 className={styles.min}>
					/{props.Min.Value}&deg;{props.Min.Unit}
				</h1>
			</div>
			<img src={props.img} alt="" />
			<h3>{props.text}</h3>
		</div>
	);
};

export default DiplayWeather;
