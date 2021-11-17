import React from 'react';
import ActionSign from './ActionSign';

export default class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { signColor: 'white'}
    }
    changeSignColor = () => {
        this.props.sign === '+'
        ? this.setState({ signColor: 'green' })
        : this.setState({ signColor: 'red' })
    }
    revertSignColor = () => {
        this.setState({ signColor: 'white' });
    }
    render() {
        return (
            <li data-index={this.props.Itemindex}
                onMouseEnter={this.changeSignColor} onMouseLeave={this.revertSignColor}>
                <ActionSign sign={this.props.sign} color={this.state.signColor} />
                <span>{this.props.content}</span>
            </li>
        )
    }
}