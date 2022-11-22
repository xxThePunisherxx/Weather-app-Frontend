import styles from "./Error.module.css";
function handleClick() {
	window.location.reload();
}

const Error = (props) => {
	return (
		<div className={styles.window}>
			<div className={styles.container}>
				{console.log("The daily Limit for API calls for this API key has been depleted. The daily Limit is 50 calls per day.")}
				<h1>Something went wrong please try again. &nbsp; &nbsp;◉︵◉</h1>
				<h3>Check console for more info</h3>
				<button onClick={handleClick}>Go to home page</button>
			</div>
		</div>
	);
};

export default Error;
