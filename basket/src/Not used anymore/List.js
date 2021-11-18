import React from 'react';
import ListItem from './ListItem';

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items || [],
        }
    }
    componentDidUpdate(_, prevState) {
        if(this.props.items.length !== prevState.items.length) {
            this.setState({items: this.props.items});
        }
    }
    render() {
        return (
            <div id={this.props.title} className='lists'>
                <div><strong>{this.props.title}</strong></div>
                <ul className='uLists'>
                    {/* {console.log(this.props.count)} */}
                    {this.state.items.map((item) =>
                        <ListItem content={item} sign={this.props.sign} 
                            clickFunc={this.props.clickFunc} countItems={this.props.countItems} count={this.props.count} />
                    )}
                </ul>
            </div>
        )
    }
}