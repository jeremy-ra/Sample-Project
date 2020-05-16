import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';


interface DeliveryDataState {
    deliveryList: DeliveryData[];
    loading: boolean;
}

const linkStyle = {
    color: 'blue',
    cursor: 'pointer'
};

export class DeliveryList extends React.Component<RouteComponentProps<{}>, DeliveryDataState> {

    constructor(props) {
        super(props);
        this.state = { deliveryList: [], loading: true };

        fetch('api/Delivery/GetAll')

            .then(response => response.json() as Promise<DeliveryData[]>)
            .then(data => {
                this.setState({ deliveryList: data, loading: false });
            });

        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    public render() {

        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderDeliveryTable(this.state.deliveryList);

        return <div>
            <h2>Delivery List</h2>
            <p>
                <Link to="/addDelivery">Add New Delivery</Link>
            </p>
            {contents}
        </div>;
    }

    private handleDelete(id: number) {

        fetch('api/Delivery/Delete/' + id, {
            method: 'delete'
        }).then(data => {
            this.setState(
                {
                    deliveryList: this.state.deliveryList.filter((rec) => {
                        return (rec.deliveryId != id);
                    })
                });
            this.props.history.push("/deliveryList");
        });

    }

    private handleEdit(id: number) {

        this.props.history.push("/delivery/edit/" + id);

    }

    private renderDeliveryTable(deliveryList: DeliveryData[]) {

        return <table className='table table-condensed table-bordered'>
            <thead className='thead-light'>
                <tr>
                    <th></th>
                    <th>Delivery Id</th>
                    <th>Destination</th>
                    <th>Origin</th>
                    <th>Courier</th>
                    <th>Delivery Date</th>
                    <th>Item Details</th>
                    <th>Receiver Name</th>
                    <th>Receiver Address</th>
                    <th>Receiver Contact #</th>
                    <th>Email Address</th>
                    <th>Sender Name</th>
                    <th>Sender Address</th>
                    <th>Sender Contact #</th>
                    <th>Status</th>
                    <th>Rate</th>
                    <th>Staff Name</th>
                    <th>Contact #</th>                    
                </tr>
            </thead>
            <tbody>
                {deliveryList.map(del =>
                    <tr key={del.deliveryId}>
                        <td>
                            <a className="action" style={linkStyle} onClick={(id) => this.handleEdit(del.deliveryId)}>Edit</a>  |
                            <a className="action" style={linkStyle} onClick={(id) => this.handleDelete(del.deliveryId)}>Delete</a>
                        </td>
                        <td>{del.deliveryId}</td>
                        <td>{del.destination}</td>
                        <td>{del.origin}</td>
                        <td>{del.courierType}</td>
                        <td>{del.deliveryDate}</td>
                        <td>{del.itemDetails}</td>
                        <td>{del.receiverName}</td>
                        <td>{del.receiverAddress}</td>
                        <td>{del.receiverContactNumber}</td>
                        <td>{del.emailAddress}</td>
                        <td>{del.senderName}</td>
                        <td>{del.senderAddress}</td>
                        <td>{del.senderContactNumber}</td>
                        <td>{del.deliveryStatus}</td>
                        <td>{del.rate}</td>
                        <td>{del.staffName}</td>
                        <td>{del.contactNumber}</td>                      
                    </tr>
                )}
            </tbody>
        </table>;
    }
}

export class DeliveryData {

    deliveryId: number = 0;
    destination: string = "";
    origin: string = "";
    courierId: string = "";
    courierType: string = "";
    deliveryDate: Date = new Date();
    itemDetails: string = "";
    receiverName: string = "";
    receiverAddress: string = "";
    receiverContactNumber: string = "";
    emailAddress: string = "";
    senderId: number = 0;
    senderName: string = "";
    senderAddress: string = "";
    senderContactNumber: string = "";
    rate: string = "";
    staffName: string = "";
    contactNumber: string = "";
    deliveryStatus: string = "";

}