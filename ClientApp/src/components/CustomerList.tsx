import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';


interface CustomerDataState {
    customerList: CustomerData[];
    loading: boolean;
}

const linkStyle = {
    color: 'blue',
    cursor: 'pointer'
};

export class CustomerList extends React.Component<RouteComponentProps<{}>, CustomerDataState> {

    constructor(props) {
        super(props);
        this.state = { customerList: [], loading: true };

        fetch('api/Customer/GetAll')

            .then(response => response.json() as Promise<CustomerData[]>)
            .then(data => {
                this.setState({ customerList: data, loading: false });
            });

        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleAddDelivery = this.handleAddDelivery.bind(this);
    }

    public render() {

        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderCustomerTable(this.state.customerList);

        return <div>
            <h2>Customer List</h2>
            <p>
                <Link to="/addCustomer">Add New Customer</Link>
            </p>
            {contents}
        </div>;
    }

    private handleDelete(id: number) {
        
        fetch('api/Customer/Delete/' + id, {
            method: 'delete'
        }).then(data => {
            this.setState(
                {
                    customerList: this.state.customerList.filter((rec) => {
                        return (rec.customerId != id);
                    })
                });
            this.props.history.push("/customerList");
        });
        
    }

    private handleEdit(id: number) {

        this.props.history.push("/customer/edit/" + id);

    }

    private handleAddDelivery() {

        this.props.history.push("/addDelivery");

    }

    private renderCustomerTable(customerList: CustomerData[]) {

        return <table className='table table-condensed table-bordered'>
            <thead className='thead-light'>
                <tr>
                    <th>Employee Id</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Contact #</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Country</th>
                    <th>Zip Code</th>                  
                    <th>Email Address</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {customerList.map(cus =>
                    <tr key={cus.customerId}>
                        <td>{cus.customerId}</td>
                        <td>{cus.name}</td>
                        <td>{cus.gender}</td>
                        <td>{cus.contactNumber}</td>
                        <td>{cus.streetAddress}</td>
                        <td>{cus.city}</td>
                        <td>{cus.country}</td>
                        <td>{cus.zipCode}</td>                      
                        <td>{cus.emailAddress}</td>
                        <td>
                            <a className="action" style={linkStyle} onClick={(id) => this.handleEdit(cus.customerId)}>Edit</a>  |
                            <a className="action" style={linkStyle} onClick={(id) => this.handleDelete(cus.customerId)}>Delete</a>
                        </td>
                        <td>
                            <a className="action" style={linkStyle} onClick={(id) => this.handleAddDelivery()}>Add Delivery</a>                          
                        </td>
                    </tr>
                )}
            </tbody>
        </table>;
    }
}

export class CustomerData {

    customerId: number = 0;
    name: string = "";
    streetAddress: string = "";
    gender: string = "";
    city: string = "";
    country: string = "";
    zipCode: string = "";   
    contactNumber: string = "";
    emailAddress: string = "";
   
}