import React from "react";
import { Motion, spring, presets } from "react-motion";
import styled from "styled-components";

// Pulling all theme styles for convenience
const styledText = styled.h1`
  fonts: {
    body: '"Avenir Next", system-ui, sans-serif',
  },
  colors: {
    text: '#fff',
    background: '#111',
    primary: blue,
    black: '#000',
  },
  fontWeights: {
    heading: 600,
    bold: 600,
  },
  text: {
    heading: {
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    },
  },
  styles: {
    pre: {
      color: 'primary',
      bg: 'black',
    },
    code: {
      color: 'primary',
    },
  },
`

export default class Attributes extends React.Component {

	render() {
		return (
			<div>
			<Motion
			defaultStyle={{
				opacity: 0,
					translateY: 30
			}}
			style={{
				opacity: spring(1),
					translateY: spring(0, {stiffness: 400, damping: 10})
			}}
			>
			{interpolatedStyles => (
				<div
				style={{
					transform: `translateY(${interpolatedStyles.translateY}px)`,
						opacity: interpolatedStyles.opacity
				}}
				>
				<styledText>Attributes of great seniors...</styledText>
				</div>
			)}
			</Motion>
			</div>
		)
	}
}
