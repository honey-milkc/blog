import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer';
import './Intro.css';
import introHtmlList from './IntroDescription';


class Intro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idx: 0
        };
        this.handlerNext = this.handlerNext.bind(this);
        this.handlerPrev = this.handlerPrev.bind(this);
    }

    handlerNext() {
        this.setState({
            idx: this.state.idx === (introHtmlList.length - 1)? introHtmlList.length - 1 : this.state.idx + 1
        });

        if (this.state.idx === (introHtmlList.length - 1)) {
            alert("마지막 페이지입니다.");
        }
    }

    handlerPrev() {
        this.setState({
            idx: this.state.idx < 1 ? 0 : this.state.idx - 1
        });
        if (this.state.idx === 0) {
            alert("첫 페이지입니다.");
        }
    }
    

    render() {
        return (
            <div>
                <div id="div-header">Welcome to SomedayTalk</div>
                <IntroHTML idx={this.state.idx}/>
                <Footer handlerNext={this.handlerNext} handlerPrev={this.handlerPrev} />
            </div>
        );
    }
}

class IntroHTML extends Component {
    static propTypes = {
        idx: PropTypes.number.isRequired
    };

    // https://velopert.com/1896
    render() {
        return (
            <div dangerouslySetInnerHTML={{__html: introHtmlList[this.props.idx]}}></div>
        );
    }
}

export default Intro