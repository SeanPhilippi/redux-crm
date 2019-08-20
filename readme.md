## Setup
* fork, clone, use live-server

## Intro
 A CRM is a software system that let's you create and manage customer information. Use the existing code as a starting point for building a very basic CRM app. We will allow the creation of customers and searching for customers in our system. We are going to use this project to practice redux. We are not using webpack or creat-react-app. This is just a plain basic web app.


## Redux
Redux is included in a script tag. This has created a global variable `Redux`. The reducers have been made for you in reducers. Use the global variable `reducers` and `state` to create a store in index.js or you could put it in another file store.js. Make the store a global variable

# Components
* The store is a global variable, use it where necessary
* subscribe in componentDidMount
* dispatch in the event handler


## Customers.js
* In componentDidMount retrieve the customers from the store `store.getState().customers;` and then setState 
* Also, subscribe to the store
* In the subscribe function, retrieve 2 pieces of data from the store `store.getState().searchTerm;`  and `store.getState().customers;`
* `setState for customers and searchTerm`
* In the `viewCustomer` method, dispatch a message `{type:"CHANGE_CURRENT_CUSTOMER",value: cust}`

## Customer.js
* When the Add button is clicked, use the store to dispatch a message `{type:"ADD_CUSTOMER",value: this.state.customer}` and then `{type:"CHANGE_CURRENT_CUSTOMER",value: emptyCustomer}`
* When the Clear button is clicked, use the store to dispatch a message `{type:"CHANGE_CURRENT_CUSTOMER",value: emptyCustomer}`
* In componentDidMount, subscribe to the store
* In the subscribe function retrieve the currentCustomer from the store `let currentCustomer = store.getState().currentCustomer;` and then `setState({customer:currentCustomer})`


## SearchBar.js
* In the onChange of the <input>, dispatch a message `{type:"CHANGE_SEARCH_TERM",value: e.target.value}`

## Bonus - Update
* Fix Customer.js so that the button says Update instead of add if the customer has an id value
* When the Update button is clicked, if the the customer has an id value then dispatch a message `{type:"UPDATE_CUSTOMER",value: this.state.customer}` 
* Change the customers reducer so that it has an if statement for `UPDATE_CUSTOMER`
* Move the code for updating a customer into this if statement.
## Bonus - Remove
* Add a button (or x icon) to Customers.js so that a customer can be removed
* When clicked, dispatch a message `{type:"REMOVE_CUSTOMER",value: cust}`
* Change the customers reducer so that it has an if statement for `REMOVE_CUSTOMER`
* Use `slice` and `findIndex` to remove that customer from the state and return the new array

