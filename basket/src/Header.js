import React from "react";
export default class Header extends React.Component {
    render() {
        return (
            <header id="intro">
                <div style={{textAlign: 'center', fontSize: '800%'}}>🛒</div>
                <div style={{color:'white', textAlign: 'center', fontSize:'160%'}}>Hello, Basket!</div>
            </header>
        )
    }
}