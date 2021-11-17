import React from 'react';

export default class ActionSign extends React.Component {
    constructor(props) {
        super(props);
        this.state = {color: this.props.color}
    }
    componentDidUpdate(prevProps) {
        if(this.props.color !== prevProps.color) {
            this.setState({color: this.props.color});
        }
    }
    render() {
        return (
            <span style={{backgroundColor: this.state.color}}>{`${this.props.sign} `}</span>
        )
    }
}