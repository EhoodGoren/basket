import React from 'react';
import ActionSign from './ActionSign';
import Counter from './Counter';

export default class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { signColor: 'white' , count: this.props.count}
    }
    changeSignColor = () => {
        this.props.sign === '+'
        ? this.setState({ signColor: 'green' })
        : this.setState({ signColor: 'red' })
    }
    revertSignColor = () => {
        this.setState({ signColor: 'white' });
    }

    updateBasket = () => {
        this.props.clickFunc(this.props.content, this.state.count)
    }

    checkCountItems = () => {
        if(this.props.countItems){
            console.log(this.state.count);
            return <Counter count={this.state.count}/>
        }
    }
    render() {
        return (
            <li onClick = {this.updateBasket}
                onMouseEnter={this.changeSignColor} onMouseLeave={this.revertSignColor}>
                <ActionSign sign={this.props.sign} color={this.state.signColor} />
                {this.checkCountItems()}
                <span>{this.props.content}</span>
            </li>
        )
    }
}