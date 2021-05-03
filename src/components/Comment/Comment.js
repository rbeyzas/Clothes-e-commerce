import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { Spinner } from 'reactstrap';

const ProductDetail = (props) => {
	const axios = require('axios');

	const [modal, setModal] = useState(false);

	const [dress, setDress] = useState([]);

	useEffect(() => {
		axios
			.get('https://5fd9d76f6cf2e7001737ead3.mockapi.io/api/v1/dress')
			.then(function (response) {
				setDress(response.data);
				console.log('dress: ', dress);
			})
			.catch(function (error) {
				console.log('error: ', error);
			});
	}, []);
	const id = window.location.pathname.split('/')[2];
	const data = dress.map((item) => {
		return {
			id: item.id,
			userName: item.userName,
			comment: item.comment,
		};
	});
	console.log('data: ', data);
	const filterData = data.filter((item) => item.id === id);
	console.log('filterData: ', filterData);
	return (
		<div>
			{dress.length == 0 ? (
				<Spinner style={{ width: '16rem', height: '16rem', margin: '16em', padding: '16em' }} color="danger" />
			) : (
				filterData.map((item) => {
					return (
						<div>
							<hr />
							<p>{item.userName}</p>
							<p>{item.comment}</p>
							<hr />
						</div>
					);
				})
			)}
		</div>
	);
};

export default connect()(ProductDetail);
