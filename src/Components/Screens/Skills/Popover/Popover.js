import React from 'react';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import {
    goldColor,
    darkColor} from '../../../../Styles/Styles';

export default class PopoverItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      popoverOpen: false
    };
  }

    toggle = () => {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }

  render() {
    return (
      <div onClick={this.toggle} style={styles.divprogressdisplay}>
        <div id={'Popover-' + this.props.id} style={styles.popoverdisplay}>?</div>
        <Popover placement='top' isOpen={this.state.popoverOpen} target={'Popover-' + this.props.id} toggle={this.toggle}>
          <PopoverHeader>{this.props.name}</PopoverHeader>
          <PopoverBody>{this.props.desc}</PopoverBody>
        </Popover>
      </div>
    );
  }
}

const styles = {
    divprogressdisplay: {
        position: 'relative'
      },
      popoverdisplay: {
        position: 'absolute',
        bottom: 8,
        right: 0,
        fontSize: 20,
        backgroundColor: goldColor,
        width: 30,
        height: 30,
        textAlign: 'center',
        borderRadius: '100%',
        color: darkColor,
        fontWeight: 'bolder',
        cursor: 'pointer'
      }
}