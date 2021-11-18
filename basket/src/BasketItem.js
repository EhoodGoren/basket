import React from "react";
import ActionSign from './ActionSign';

export default class GroceriesItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signColor: 'white',
            count: this.props.content.count
        }
    }
    changeSignColor = () => {
        this.setState({ signColor: 'red' })
    }
    revertSignColor = () => {
        this.setState({ signColor: 'white' });
    }

    updateBasket = () => {
        this.props.clickFunc(this.props.content.item);
    }
    componentDidUpdate(prevProps) {
        if(this.props.content !== prevProps.content){
            this.setState({count: this.props.content.count})
        }
    }
    render() {
        return (
            <li onClick={this.updateBasket} onMouseEnter={this.changeSignColor} onMouseLeave={this.revertSignColor}>
                <ActionSign sign='-' color={this.state.signColor} />
                <span>{this.state.count}</span>
                <span>{this.props.content.item}</span>
            </li>
        )
    }
}