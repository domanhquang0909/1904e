import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';


const Header = () => {
    return (
        <div className="header">
            <div className="background"></div>
            <div className="card">
                <h2>QUẢN LÝ SINH VIÊN</h2>
                <div className='header__page'>
                    <NavLink activeClassName="active" to='/page/qlsv'>Sinh viên</NavLink>
                    <NavLink activeClassName="active" to='/page/add-qlsv'>Thêm sinh viên</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;