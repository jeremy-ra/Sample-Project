import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { CustomerData } from './CustomerList';

interface AddCustomerDataState {

    title: string;
    loading: boolean;
    customerData: CustomerData;
}

export class AddNewCustomer extends React.Component<RouteComponentProps<{}>, AddCustomerDataState> {

    constructor(props) {
        super(props);
        this.state = { title: "", loading: true, customerData: new CustomerData };

        var empid = this.props.match.params["id"];

        if (empid > 0) {

            fetch('api/Customer/Details/' + empid)
                .then(response => response.json() as Promise<CustomerData>)
                .then(data => {
                    this.setState({ title: "Edit", loading: false, customerData: data });
                });
        }
        else {
            this.state = { title: "Add", loading: false, customerData: new CustomerData };
        }

        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    public render() {

        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderCreateForm();

        return <div>
            <h4>{this.state.title}</h4>
            <h4>Customer</h4>
            <hr />
            {contents}
        </div>;
    }

    private handleSave(event) {

        event.preventDefault();
        const data = new FormData(event.target);

        if (this.state.customerData.customerId) {

            fetch('api/Customer/Edit', {
                method: 'PUT',
                body: data,
            }).then((response) => response.json())

                .then((responseJson) => {
                    this.props.history.push("/customerList");
                })
        }

        else {

            fetch('api/Customer/Create', {
                method: 'POST',
                body: data,
            }).then((response) => response.json())

                .then((responseJson) => {
                    this.props.history.push("/customerList");
                })
        }
    }

    private handleCancel(e) {

        e.preventDefault();
        this.props.history.push("/customerList");
    }

    private renderCreateForm() {

        return (
            <form className='form-horizontal' onSubmit={this.handleSave} >

                <div className="row">
                    <div className='col-sm-6'>
                        <div className="form-group row">
                            <input type="hidden" name="customerId" value={this.state.customerData.customerId} />
                        </div>
                        <div className="form-group row">
                            <label className=" control-label col-md-12" htmlFor="Name">Name</label>
                            <div className="col-md-8">
                                <input className="form-control" type="text" name="name" defaultValue={this.state.customerData.name} required />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="control-label col-md-12" htmlFor="Gender">Gender</label>
                            <div className="col-md-8">
                                <select className="form-control" data-val="true" name="gender" defaultValue={this.state.customerData.gender} required>
                                    <option value="">-- Select Gender --</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className=" control-label col-md-12" htmlFor="streetAddress">Street Adress</label>
                            <div className="col-md-8">
                                <input className="form-control" type="text" name="streetAddress" defaultValue={this.state.customerData.streetAddress} required />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className=" control-label col-md-12" htmlFor="city">City</label>
                            <div className="col-md-8">
                                <input className="form-control" type="text" name="city" defaultValue={this.state.customerData.city} required />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className=" control-label col-md-12" htmlFor="zipCode">Zip Code</label>
                            <div className="col-md-8">
                                <input className="form-control" type="text" name="zipCode" defaultValue={this.state.customerData.zipCode} required />
                            </div>
                        </div>                     
                    </div>
                    <div className='col-sm-6'>
                        <div className="form-group row">
                            <label className="control-label col-md-12" htmlFor="emailAddress">Email Address</label>
                            <div className="col-md-8">
                                <input className="form-control" type="text" name="emailAddress" defaultValue={this.state.customerData.emailAddress} required />

                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="control-label col-md-12" htmlFor="contactNumber" >Contact #</label>
                            <div className="col-md-8">
                                <input className="form-control" type="text" name="contactNumber" defaultValue={this.state.customerData.contactNumber} required />

                            </div>
                        </div>
                        <div className="form-group row">
                            <label className=" control-label col-md-12" htmlFor="country">Country</label>
                            <div className="col-md-8">
                                <input className="form-control" type="text" name="country" defaultValue={this.state.customerData.country} required />
                            </div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-default">Save</button>&nbsp;&nbsp;&nbsp;
                            <button className="btn btn-danger" onClick={this.handleCancel}>Cancel</button>
                        </div>

                    </div>

                </div>

            </form >

        )

    }

}