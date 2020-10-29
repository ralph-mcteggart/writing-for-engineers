import React from "react";
import { Motion, spring } from "react-motion";

const springConfig = { stiffness: 20, damping: 1 };

export default class Ego extends React.Component {

	render() {
		return (
			<div>
			<div><h1>🧘</h1></div>
			<div>
			<Motion
			defaultStyle={{
				opacity: 1,
				scale: 0
			}}
			style={{
				opacity: spring(0.2, springConfig)
			}}
			>
			{interpolatedStyles => (
				<div
				style={{
					transform: `translateY(${interpolatedStyles.translateY}px)`,
						opacity: interpolatedStyles.opacity
				}}
				>
				<b>NO EGO</b>
				</div>
			)}
			</Motion>
			</div>
			</div>

		)
	}
}
