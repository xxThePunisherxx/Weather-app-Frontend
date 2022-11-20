import React from "react";
import styles from "./Loading.module.css";

const Loading = () => {
	return (
		<div className={styles.container}>
			<div className={styles.text}>
				<h1>Loading....</h1>
			</div>
			<div className={styles.loading}>
				<div className={styles.lineBox}>
					<div className={styles.line}></div>
				</div>
			</div>
		</div>
	);
};

export default Loading;
