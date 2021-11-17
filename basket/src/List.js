import React from 'react';
import ListItem from './ListItem';

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items || [],
        }
    }
    render() {
        return (
            <div id={this.props.title} className='lists'>
                <div><strong>{this.props.title}</strong></div>
                <ul className='uLists'>
                    {this.state.items.map((item, index) =>
                        <ListItem itemIndex={index} content={item} sign={this.props.sign} />
                    )}
                </ul>
            </div>
        )
    }
}