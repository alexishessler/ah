import { keyframes } from 'styled-components';

const progressFrame = (receivedScoreWidth) => keyframes`
0% {
  width: 0%;
}
100% {
  width: ${receivedScoreWidth}%;
}
`

export {
  progressFrame,
} 