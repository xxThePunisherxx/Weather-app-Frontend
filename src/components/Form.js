import React, { useState } from "react";
import { WiCelsius, WiFahrenheit } from "react-icons/wi";
import styles from "./Form.module.css";

const Form = (props) => {
	const handlesubmit = (e) => {
		e.preventDefault();
		const data = new FormData(e.target);
		let enterdData = Object.fromEntries(data.entries());
		props.onSubmit(enterdData);
		props.loading(true);
		setTimeout(() => {
			props.showform(false);
			props.loading(false);
			props.weather(true);
		}, 5000);
	};

	return (
		<div>
			<div className={styles.contaner}>
				<div className={styles.form}>
					<form onSubmit={handlesubmit} autoComplete="off">
						<input name="cityname" type="text" placeholder="New York" required></input>
						<button>Search</button>
						<div className={styles.tempselector}>
							<h1>Unit Selector</h1>
							<div className={styles.units}>
								{/* for celclus */}
								<div className={styles.inputContainer}>
									<input id="celcius" type="radio" name="temp" defaultChecked value="true"></input>
									<div className={styles.radioTile}>
										<label htmlFor="celcius">
											<WiCelsius size={100} />
										</label>
									</div>
								</div>

								{/* for fahrenheit */}
								<div className={styles.inputContainer}>
									<input id="fahrenheit" type="radio" name="temp" value="false"></input>
									<div className={styles.radioTile}>
										<label htmlFor="fahrenheit">
											<WiFahrenheit size={100} />
										</label>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
			<div className={styles.source}>
				<h3>Powered By: </h3>
				<a href="https://www.accuweather.com/">
					<img src="./Image/source.png" alt="" />
				</a>
			</div>
		</div>
	);
};

export default Form;
