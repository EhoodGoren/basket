import React from 'react';

export default class ListItem extends React.Component {
    render() {
        return (
            <li data-index={this.props.Itemindex}>{this.props.content}</li>
        )
    }
}