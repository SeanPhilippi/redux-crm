class Customers extends React.Component {
  state = {
    customers: [],
    searchTerm: ""
  }

  componentDidMount() {
    store.subscribe(() => {
      let customers = store.getState().customers;
      let searchTerm = store.getState().searchTerm;
      this.setState({
        customers,
        searchTerm
      });
    });
  };

  viewCustomer(customer) {
    store.dispatch({
      type: "CHANGE_CURRENT_CUSTOMER",
      value: customer
    });
  }l

  shouldInclude(customer) {
    if (!this.state.searchTerm)
      return true;
    if (
      customer.firstName.toLowerCase().includes(this.state.searchTerm.toLowerCase()) ||
      customer.lastName.toLowerCase().includes(this.state.searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    ) {
      return true;
    }
    return false;
  }

  render() {
    let tbody = [];
    for (let i =0; i < this.state.customers.length; i++) {
      const customer = this.state.customers[i];
      if (this.shouldInclude(customer)) {
        tbody.push(
          <tr key={i}>
            <th scope="row">{customer.id}</th>
            <td>{customer.firstName}</td>
            <td>{customer.lastName}</td>
            <td>{customer.email}</td>
            <td>
              <a
                href="#"
                onClick={
                  () => {
                    this.viewCustomer(customer)
                  }
                }
              >
                View
              </a>
            </td>
            <td>
              <button
                className="ml-3"
                onClick={ () =>
                  store.dispatch({
                    type: "REMOVE_CUSTOMER",
                    value: customer
                  })
                }
              >
                x
              </button>
            </td>
          </tr>
        );
      }
    }
    return (
      <div className="page" >
        <table className="table">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
            <th scope="col">Delete</th>
          </tr>
          </thead>
          <tbody id="search-customer-tbody">
          {tbody}
          </tbody>
        </table>
      </div>
    )
  }
}