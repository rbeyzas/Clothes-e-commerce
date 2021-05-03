import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "../../components/Product/Product";
import classNames from "classnames";
import { paginationPipe } from "../../pipes/paginationFilter";
import Pagination from "../../components/Pagination/Pagination";
import arrow from "../../img/arrow.png";

import axios from "axios";

class ProductList extends Component {
  state = {
    colValue: "col-lg-4",
    pagination: {
      perPage: 12,
      currentPage: 1,
      pagesToShow: 3,
    },
    gridValue: 3,
    products: [],
  };
  componentDidMount = () =>
    axios
      .get(`https://5fd9d76f6cf2e7001737ead3.mockapi.io/api/v1/dress`)
      .then(({ data: products }) => this.setState({ products }));

  onPrev = () => {
    const { pagination } = this.state;
    this.setState({
      pagination: {
        ...pagination,
        currentPage: pagination.currentPage - 1,
      },
    });
  };
  onNext = () => {
    const { pagination } = this.state;
    this.setState({
      pagination: {
        ...pagination,
        currentPage: pagination.currentPage + 1,
      },
    });
  };

  goPage = (n) =>
    this.setState({
      pagination: {
        ...this.state.pagination,
        currentPage: n,
      },
    });
  render() {
    let activeLayout = this.state.gridValue;
    const colValue = "col-lg-" + (this.state.gridValue === 4 ? 3 : 4);
    const changeLayout = (newGridValue) => () =>
      this.setState({ gridValue: newGridValue });

    return (
      <div className="col-lg-9">
        <div className = "mt-3">
          					<hr className="bg-dark"></hr>
        				</div>
        <div className="row">
          {paginationPipe(this.state.products, this.state.pagination).map(
            (product) => (
              <div
                key={product.id}
                className={classNames(colValue, "col-md-6 col-lg-6 col-xl-4 mb-4")}
              >
                <Product {...product} />
              </div>
            )
          )}
        </div>
        <div className="d-flex justify-content-end">
          <Pagination
            totalItemsCount={this.state.products.length}
            {...this.state.pagination}
            onGoPage={this.goPage}
            onPrevPage={this.onPrev}
            onNextPage={this.onNext}
          />
        </div>
        <div class="container-fluid d-flex justify-content-end">
          <a href="#" title="To Top">
            <img class="arrow h-60" src={arrow} />
          </a>
        </div>
      </div>
    );
  }
}

export default connect()(ProductList);
