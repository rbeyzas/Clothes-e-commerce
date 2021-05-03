import React from 'react';
import { connect } from 'react-redux';
import ProductDetailComponent from '../../components/ProductDetail/ProductDetail';
import Comment from '../../components/Comment/Comment';

const ProductDetail = (props) => {
	console.log(props);

	return (
		<div className="container" style={{ padding: '6rem 0' }}>
			<div className="card">
				<div className="row"></div>
				<div className="row" style={{ margin: '8px' }}>
					<div className="col-md-6">
						{props.product}
						<ProductDetailComponent product={props.product} />
					</div>
					{/* formun ortada olmasını isterseniz ---> align-items-center */}
					<div className="col-md-6 d-flex justify-content-end ">
						<div class="container-fluid  ">
							<div>
								<h2 class="text-center">Leave A Comment</h2>
								<div class="row">
									<div class="col">
										<div class="row">
											<div class="col-sm-6 form-group">
												<input class="form-control" id="name" name="name" placeholder="Name" type="text" required />
											</div>
											<div class="col-sm-6 form-group">
												<input class="form-control" id="email" name="email" placeholder="Email" type="email" required />
											</div>
										</div>
										<textarea class="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea>
										<br />
										<div class="row">
											<div class="col  form-group">
												<button class="btn btn-warm pull-right" type="submit">
													Send
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<Comment />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state, props) => {
	const product = state.shop.products.find((product) => product.id === +props.match.params.id);

	return {
		product,
	};
};

export default connect(mapStateToProps, null)(ProductDetail);
