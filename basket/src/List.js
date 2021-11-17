import React from 'react';
import ListItem from './ListItem';

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title || 'List',
            items: props.items || []
        }
    }
    render() {
        return (
            <div id={this.state.title} className='lists'>
                <div><strong>{this.state.title}</strong></div>
                <ul className='uLists'>
                    {this.state.items.map((item, index) =>
                        <ListItem itemIndex={index} content={item} />
                    )}
                </ul>
            </div>
        )
    }
}