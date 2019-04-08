import styled from 'styled-components';

const darkColor = '#232323';
const lightColor = '#F6F6F6';
const goldColor = '#F5EB48';

const BtnNav = styled.div`
  background-color: ${props => (props.background === "dark" ? darkColor : lightColor)};
  border: none;
  color: ${props => (props.color === "dark" ? lightColor : darkColor)};
  padding: 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 8px;
  margin: 0px;
  border: 1px solid ${props => (props.color === "dark" ? goldColor : goldColor)};
  &:focus {
    outline:none;
  }
`;

const Wrapper = styled.div`
  padding: 10px;
  width: 100%;
  min-height: 90vh;
  margin: 0px;
  background-color: ${props => (props.background === "dark" ? darkColor : lightColor)};
  color: ${props => (props.color === "dark" ? lightColor : darkColor)};
`



export {
  darkColor,
  lightColor,
  goldColor,
  BtnNav,
  Wrapper
};


// const primary = (props) => {
//   let color;
//   props === "dark" ? color = '#232323' : color = '#F6F6F6';
//   return color;
// }

// const dark = '#000000';
// const light = '#EEEEEE';
//
// const styles = {
//   dark: {
//     backgroundColor: dark,
//     color: dark,
//   },
//   light: {
//     backgroundColor: light,
//     color: light,
//   }
// }
//
// export default styles;

// const Variable1 = () => {
//   console.log('variable1')
// }
//
// const Variable2 = () => {
//   console.log('variable2')
// }
//
// const Div = styled.div`
//   padding: 0px;
//   margin: 0px;
// `;
