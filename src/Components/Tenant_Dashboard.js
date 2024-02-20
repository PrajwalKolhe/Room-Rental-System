import React from 'react';
import { BrowserRouter ,Routes,Route,Link } from 'react-router-dom';

import mystore from './store.js'
import TenantProfile from './Tenant_Profile';
import TenantProperties from './Tenant_Properties';
import TenantSearch from './Tenant_search';
import {  Button, ButtonGroup } from 'react-bootstrap'
import './User-Reg.css';
import { render } from '@testing-library/react';
import Cart from './T_Cart.js';
import Payment from './Payment.js';

export default class TenantDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = '';
    }

    logout = () => {
        mystore.dispatch({ type: 'LOGGEDOUT' });
        localStorage.removeItem("loggedinuser");
        this.props.history.push("/");
    }

    render() {
        // Check if the logged tenant exists in local storage before accessing its properties
        const loggedTenant = JSON.parse(localStorage.getItem("loggedtenant"));
        const welcomeMessage = loggedTenant ? `Welcome: ${loggedTenant.lname}` : '';

        return (
            <div>
                <div className="bg-text">
                    <h1 style={{ textAlign: 'left' }} ><b>{welcomeMessage}</b></h1>

                    <ul className="nav nav-tabs"  >
                        <li className="nav-item" style={{ color: 'black' }}><Link className="nav-link" to="/search" style={{ color: 'indigo' }} ><b>Search</b></Link></li>
                        <li className="nav-item" style={{ color: 'black' }}><Link className="nav-link" to="/t_props" style={{ color: 'indigo' }} ><b>Properties</b></Link></li>
                        <li className="nav-item" style={{ color: 'black' }}><Link className="nav-link" to="/t_cart" style={{ color: 'indigo' }} ><b>Cart</b></Link></li>
                        <li className="nav-item" style={{ color: 'black' }}><Link className="nav-link" to="/" style={{ color: 'indigo' }} ><b>Profile</b></Link></li>
                        <li className="nav-item" style={{ color: 'black' }}><Link className="nav-link" to="/pay" style={{ color: 'indigo' }} ><b>Payment</b></Link></li>
                        <li className="nav-item" style={{ color: 'black', paddingLeft: '900px' }}><a href="" onClick={this.logout} style={{ color: 'indigo', textDecorationLine: 'none' }} ><b>Logout</b></a></li>

                    </ul>
                </div>
            </div>
        );
    }
}

