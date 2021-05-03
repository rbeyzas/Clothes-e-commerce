import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Header.css';
import B from '../../img/logo.png';
const Header = ({ cartLength }) => {
	return (
		<nav className=" navbar navbar-expand-lg navbar-default  navbar-fixed-top " style={{ background: '#138496' }}>
			<div className="container navbar-collapse">
				<div class="row d-flex justify-content-center">
					<div class="col">
						<img class="w-25 h-100  " src={B} />
					</div>
					<div class="col mt-3 d-flex justify-content-center ">
						<ul class="navbar-nav ">
							<li className="nav-item">
								<NavLink className="navbar-brand ml-5 mr-5 " to="/">
									<i className="fa fa-home mr-2"></i>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink className=" navbar-brand ml-5 mr-5 " to="/aboutUs">
									<i className="fa fa-book mr-2"></i>
									About Us
								</NavLink>
							</li>
						</ul>
					</div>
					<div class="col mt-3 d-flex justify-content-end">
						<div>
							<ul className="navbar-nav ml-auto">
								<li className="nav-item">
									<NavLink className="navbar-brand" to={'/cart'}>
										<i className="fa fa-shopping-cart mr-2" aria-hidden="true" />
										Card {cartLength ? `(${cartLength})` : ''}
									</NavLink>
								</li>
							</ul>
						</div>
					</div>
				</div>
				{/* */}
			</div>
		</nav>
	);
};

const mapStateToProps = (state) => {
	return {
		cartLength: state.shop.cart.length,
	};
};

export default connect(mapStateToProps, null)(Header);
