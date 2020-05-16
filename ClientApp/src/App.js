import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { EmployeeList } from './components/EmployeeList';
import { AddNewEmployee } from './components/AddNewEmployee';
import { CourierList } from './components/CourierList';
import { AddNewCourier } from './components/AddNewCourier';
import { CustomerList } from './components/CustomerList';
import { AddNewCustomer } from './components/AddNewCustomer';
import { DeliveryList } from './components/DeliveryList';
import { AddNewDelivery } from './components/AddNewDelivery';
import { TrackDelivery } from './components/TrackDelivery';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />      
        <Route path='/employeeList' component={EmployeeList} />
        <Route path='/addEmployee' component={AddNewEmployee} />
        <Route path='/employee/edit/:id' component={AddNewEmployee} />
        <Route path='/courierList' component={CourierList} />
        <Route path='/addCourier' component={AddNewCourier} />
            <Route path='/courier/edit/:id' component={AddNewCourier} />
            <Route path='/customerList' component={CustomerList} />
            <Route path='/addCustomer' component={AddNewCustomer} />
            <Route path='/customer/edit/:id' component={AddNewCustomer} />
            <Route path='/deliveryList' component={DeliveryList} />
            <Route path='/addDelivery' component={AddNewDelivery} />
            <Route path='/delivery/edit/:id' component={AddNewDelivery} />
            <Route path='/trackDelivery' component={TrackDelivery} />
      </Layout>
    );
  }
}
