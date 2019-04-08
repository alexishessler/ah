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
  &:hover {
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  padding: 0;
  width: 100%;
  min-height: 90vh;
  margin: 0px;
  background-color: ${props => (props.background === "dark" ? darkColor : lightColor)};
  color: ${props => (props.color === "dark" ? lightColor : darkColor)};
`
const Btn = styled.button`
  background-color: ${props => (props.selected ? goldColor : darkColor)};
  color: ${props => (props.selected ? darkColor : lightColor)};
  border: 1px solid ${goldColor}
  padding: 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 8px;
  margin-top: 20px;
  margin-left: 10px;
  width: ${props => props.width}px;
  cursor: pointer;
  &:focus {
    outline:none;
  };
  &:hover {
    background-color: ${props => (props.selected ? darkColor : goldColor)};
    color: ${props => (props.selected ? goldColor : darkColor)};
  }
`

const H1 = styled.h1`
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 0;
  margin: 0;
`

const H2 = styled.h2`
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 0;
  margin: 0;
`

const H3 = styled.h3`
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 0;
  margin: 0;
`

export {
  darkColor,
  lightColor,
  goldColor,
  BtnNav,
  Wrapper,
  Btn,
  H1,
  H2,
  H3
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
