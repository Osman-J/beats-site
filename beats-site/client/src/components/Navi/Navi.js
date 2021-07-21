import React from 'react';
import { Pages } from './Pages'
import './Navi.css'

class Navi extends React.Component {

    state = { clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">SHERU<i className="fas fa-record-vinyl"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        {Pages.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                    {item.title}
                                    </a>
                                </li>
                            )
                        })}
                </ul>
            </nav>
        );
    }
}

export default Navi
