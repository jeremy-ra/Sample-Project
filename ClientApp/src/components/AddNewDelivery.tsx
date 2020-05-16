import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { DeliveryData } from './DeliveryList';

interface AddDeliveryDataState {

    title: string;
    loading: boolean;
    deliveryData: DeliveryData;
    courierList: Array<any>;
}

export class AddNewDelivery extends React.Component<RouteComponentProps<{}>, AddDeliveryDataState> {

    constructor(props) {
        super(props);
        this.state = { title: "", loading: true, courierList: [], deliveryData: new DeliveryData };

        fetch('api/Courier/GetAll')
            .then(response => response.json() as Promise<Array<any>>)
            .then(data => {

                this.setState({ courierList: data });
            });

        var empid = this.props.match.params["id"];

        if (empid > 0) {

            fetch('api/Delivery/Details/' + empid)
                .then(response => response.json() as Promise<DeliveryData>)
                .then(data => {
                    this.setState({ title: "Edit", loading: false, deliveryData: data });
                });
        }
        else {
            this.state = { title: "Add", loading: false, courierList: [], deliveryData: new DeliveryData };
        }

        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    public render() {

        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderCreateForm(this.state.courierList);

        return <div>
            <h4>{this.state.title}</h4>
            <h4>Delivery</h4>
            <hr />
            {contents}
        </div>;
    }

    private handleSave(event) {

        event.preventDefault();
        const data = new FormData(event.target);

        if (this.state.deliveryData.deliveryId) {

            fetch('api/Delivery/Edit', {
                method: 'PUT',
                body: data,
            }).then((response) => response.json())

                .then((responseJson) => {
                    this.props.history.push("/deliveryList");
                })
        }
        else {

            fetch('api/Delivery/Create', {
                method: 'POST',
                body: data,
            }).then((response) => response.json())

                .then((responseJson) => {
                    this.props.history.push("/deliveryList");
                })
        }
    }

    private handleCancel(e) {

        e.preventDefault();
        this.props.history.push("/deliveryList");
    }

    private renderCreateForm(courierList: Array<any>) {

        return (
            <form className='form-horizontal' onSubmit={this.handleSave} >

                <div className="row">
                    <div className='col-sm-6'>
                        <div className="form-group row">
                            <input type="hidden" name="deliveryId" value={this.state.deliveryData.deliveryId} />
                        </div>
                        <div className="form-group row">
                            <label className=" control-label col-md-12" htmlFor="destination">Destination</label>
                            <div className="col-md-8">
                                <input className="form-control" type="text" name="destination" defaultValue={this.state.deliveryData.destination} required />
                            </div>
                        </div>                     
                        <div className="form-group row">
                            <label className=" control-label col-md-12" htmlFor="origin">Origin</label>
                            <div className="col-md-8">
                                <input className="form-control" type="text" name="origin" defaultValue={this.state.deliveryData.origin} required />
                            </div>
                        </div>                  
                        <div className="form-group row">
                            <label className="control-label col-md-12" htmlFor="courierType">Courier Type</label>
                            <div className="col-md-8">
                                <select className="form-control" data-val="true" name="courierType" defaultValue={this.state.deliveryData.courierType} required>
                                    <option value="">-- Select Courier Type --</option>
                                    {courierList.map(cor =>
                                        <option key={cor.courierId} value={cor.courierType}>{cor.courierType}</option>                                        
                                    )}
                                </select>
                            </div>
                        </div>  
                        <div className="form-group row">
                            <label className=" control-label col-md-12" htmlFor="deliveryDate">Delivery Date</label>
                            <div className="col-md-8">
                                <input className="form-control" type="date" name="deliveryDate" defaultValue={this.state.deliveryData.deliveryDate.toString()} required />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className=" control-label col-md-12" htmlFor="itemDetails">Item Details/Content</label>
                            <div className="col-md-8">
                                <input className="form-control" type="text" name="itemDetails" defaultValue={this.state.deliveryData.itemDetails} required />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className=" control-label col-md-12" htmlFor="receiverName">Receiver Name</label>
                            <div className="col-md-8">
                                <input className="form-control" type="text" name="receiverName" defaultValue={this.state.deliveryData.receiverName} required />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className=" control-label col-md-12" htmlFor="receiverAddress">Receiver Address</label>
                            <div className="col-md-8">
                                <input className="form-control" type="text" name="receiverAddress" defaultValue={this.state.deliveryData.receiverAddress} required />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className=" control-label col-md-12" htmlFor="receiverContactNumber">Receiver Contact #</label>
                            <div className="col-md-8">
                                <input className="form-control" type="text" name="receiverContactNumber" defaultValue={this.state.deliveryData.receiverContactNumber} required />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className=" control-label col-md-12" htmlFor="emailAddress">Email Address</label>
                            <div className="col-md-8">
                                <input className="form-control" type="text" name="emailAddress" defaultValue={this.state.deliveryData.emailAddress}  />
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-6'>
                        <div className="form-group row">
                            
                        </div>
                        <div className="form-group row">
                            <label className="control-label col-md-12" htmlFor="senderName">Sender Name</label>
                            <div className="col-md-8">
                                <input className="form-control" type="text" name="senderName" defaultValue={this.state.deliveryData.senderName} required />

                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="control-label col-md-12" htmlFor="senderAddress">Sender Address</label>
                            <div className="col-md-8">
                                <input className="form-control" type="text" name="senderAddress" defaultValue={this.state.deliveryData.senderAddress} required />

                            </div>
                        </div>
                        <div className="form-group row">
                                <label className=" control-label col-md-12" htmlFor="senderContactNumber">Sender Contact #</label>
                            <div className="col-md-8">
                                    <input className="form-control" type="text" name="senderContactNumber" defaultValue={this.state.deliveryData.senderContactNumber} required />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className=" control-label col-md-12" htmlFor="rate">Rate</label>
                            <div className="col-md-8">
                                <input className="form-control" type="text" name="rate" defaultValue={this.state.deliveryData.rate}  />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className=" control-label col-md-12" htmlFor="staffName">Staff Name</label>
                            <div className="col-md-8">
                                <input className="form-control" type="text" name="staffName" defaultValue={this.state.deliveryData.staffName} required />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className=" control-label col-md-12" htmlFor="contactNumber">Contact Number</label>
                            <div className="col-md-8">
                                <input className="form-control" type="text" name="contactNumber" defaultValue={this.state.deliveryData.contactNumber} required />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className=" control-label col-md-12" htmlFor="deliveryStatus">Delivery Status</label>
                            <div className="col-md-8">                                                          
                                <select className="form-control" data-val="true" name="deliveryStatus" defaultValue={this.state.deliveryData.deliveryStatus} required>
                                    <option value="">-- Select Status --</option>
                                    <option value="Processing">Processing</option>
                                    <option value="Canceled">Canceled</option>
                                    <option value="Reschedule">Delivered</option>
                                    <option value="Shipped">Shipped</option>
                                    <option value="In Transit">In Transit</option>
                                    <option value="Arrived">Arrived</option>
                                    <option value="Delivered">Delivered</option>                                    
                                </select>
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