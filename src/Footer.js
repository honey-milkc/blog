import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

class Footer extends Component {
    static propTypes = {
        handlerNext: PropTypes.func.isRequired,
        handlerPrev: PropTypes.func.isRequired
    }

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         hover: false,
    //     };
    //     // https://devlog.jwgo.kr/2018/08/20/set-state-undefined-error-in-react/
    //     this.hoverOnOff = this.hoverOnOff.bind(this);
    // }

    // hoverOnOff() {
    //     this.setState({ hover: !this.state.hover });
    // }

    // https://cimfalab.github.io/deepscan/2017/07/react-3
    // <span id="span-button" onclick="alert('test');"><div id="triangle-right"></div></span> 
    // handleClick() {
    //     console.log('click');
    //     alert('test');
    //     ;
    //     console.log(this.state);
    // }

    render() {
        return (
            <div>
                <footer className="bottom-button">
                    <span id="span-button" onClick={this.props.handlerPrev}>
                        <div id="triangle-left"></div>
                    </span>&nbsp;
                    <span id="span-button" onClick={this.props.handlerNext}>
                        <div id="triangle-right"></div>
                    </span>
                </footer>
            </div>
        );
    }
}

export default Footer