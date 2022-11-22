import React from "react";
import styles from "./Loading.module.css";

const Loading = () => {
	return (
		<div className={styles.animloading}>
			<div className={styles.icon}>
				<div className={styles.cloudnSun}>
					<img className={styles.sun} src="./Image/sun.png" alt="suns" />
					<img className={styles.cloud} src="./Image/cloud.png" alt="suns" />
					<div className={styles.rain}>
						<span className={styles.drop}></span>
						<span className={styles.drop}></span>
						<span className={styles.drop}></span>
						<span className={styles.drop}></span>
						<span className={styles.drop}></span>
						<span className={styles.drop}></span>
						<span className={styles.drop}></span>
						<span className={styles.drop}></span>
						<span className={styles.drop}></span>
						<span className={styles.drop}></span>
						<span className={styles.drop}></span>
						<span className={styles.drop}></span>
						<span className={styles.drop}></span>
						<span className={styles.drop}></span>
						<span className={styles.drop}></span>
						<span className={styles.drop}></span>
						<span className={styles.drop}></span>
						<span className={styles.drop}></span>
						<span className={styles.drop}></span>
						<span className={styles.drop}></span>
						<span className={styles.drop}></span>
						<span className={styles.drop}></span>
						<span className={styles.drop}></span>
					</div>
				</div>
			</div>
			<div className={styles.text}>
				Checking Out Weather for you, <br /> Wait for few seconds...
			</div>
		</div>
	);
};

export default Loading;
