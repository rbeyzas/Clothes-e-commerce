import React from 'react';
import { connect } from 'react-redux';

import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Checkout = (props) => {
	return (
		<div className="container-fluid">
			<Form>
				<Row form>
					<Col md={6}>
						<FormGroup>
							<Label for="exampleEmail">Email</Label>
							<Input type="email" name="email" id="exampleEmail" />
						</FormGroup>
					</Col>
					<Col md={6}>
						<FormGroup>
							<Label for="examplePassword">Password</Label>
							<Input type="password" name="password" id="examplePassword" />
						</FormGroup>
					</Col>
				</Row>
				<FormGroup>
					<Label for="exampleAddress">Name On Card</Label>
					<Input type="text" name="address" id="exampleAddress" />
				</FormGroup>
				<FormGroup>
					<Label for="exampleAddress2">Credit Card Number</Label>
					<Input type="text" name="address2" id="exampleAddress2" />
				</FormGroup>
				<Row form>
					<Col md={6}>
						<FormGroup>
							<Label for="exampleCity">Expiration</Label>
							<Input type="text" />
						</FormGroup>
					</Col>
					<Col md={4}>
						<FormGroup>
							<Label for="exampleState">CVV</Label>
							<Input type="text" />
						</FormGroup>
					</Col>
				</Row>
				<FormGroup check>
					<Input type="checkbox" name="check" id="exampleCheck" />
					<Label for="exampleCheck" check>
						Check me out
					</Label>
				</FormGroup>
				<Button>Sign in</Button>
			</Form>
		</div>
	);
};

export default connect()(Checkout);
