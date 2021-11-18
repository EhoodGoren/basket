import React from "react";
import ActionSign from './ActionSign';

export default class GroceriesItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signColor: 'white'
        }
    }
    changeSignColor = () => {
        this.setState({ signColor: 'green' })
    }
    revertSignColor = () => {
        this.setState({ signColor: 'white' });
    }

    updateBasket = () => {
        this.props.clickFunc(this.props.content)
    }
    render() {
        return (
            <li onClick={this.updateBasket} onMouseEnter={this.changeSignColor} onMouseLeave={this.revertSignColor} className="listItems">
                <ActionSign sign='+' color={this.state.signColor} />
                <span>{this.props.content}</span>
            </li>
        )
    }
}