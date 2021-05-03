import React, { Component } from 'react';
import ProductList from '../../containers/ProductList/ProductList';
import Slider from '../../components/Slider/Slider';
import axios from 'axios';
export default class Home extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="container-fluid">
					<div className="row">
						<div className="col-12" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
							<Slider />
						</div>

						<div className="col-12 d-flex justify-content-center">
							<ProductList />
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
