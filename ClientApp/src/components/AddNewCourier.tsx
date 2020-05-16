import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { CourierData } from './CourierList';

interface AddCourierDataState {

    title: string;
    loading: boolean;
    courierData: CourierData;
}

export class AddNewCourier extends React.Component<RouteComponentProps<{}>, AddCourierDataState> {

    constructor(props) {
        super(props);
        this.state = { title: "", loading: true, courierData: new CourierData };

        var empid = this.props.match.params["id"];

        if (empid > 0) {

            fetch('api/Courier/Details/' + empid)
                .then(response => response.json() as Promise<CourierData>)
                .then(data => {
                    this.setState({ title: "Edit", loading: false, courierData: data });
                });
        }
        else {
            this.state = { title: "Create", loading: false, courierData: new CourierData };
        }

        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    public render() {

        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderCreateForm();

        return <div>
            <h1>{this.state.title}</h1>
            <h3>Courier</h3>
            <hr />
            {contents}
        </div>;
    }

    private handleSave(event) {

        event.preventDefault();
        const data = new FormData(event.target);
        

        if (this.state.courierData.courierId) {

            fetch('api/Courier/Edit', {
                method: 'PUT',
                body: data,
            }).then((response) => response.json())

                .then((responseJson) => {
                    this.props.history.push("/courierList");
                })
        }
        else {

            fetch('api/Courier/Create', {
                method: 'POST',
                body: data,
            }).then((response) => response.json())

                .then((responseJson) => {
                    this.props.history.push("/courierList");
                })
        }
    }

    private handleCancel(e) {

        e.preventDefault();
        this.props.history.push("/courierList");
    }
      
    private renderCreateForm() {

        return (
            <form className='form-horizontal' onSubmit={this.handleSave} >

                <div className="row">
                    <div className='col-sm-6'>
                        <div className="form-group row">
                            <input type="hidden" name="courierId" value={this.state.courierData.courierId} />
                        </div>
                        <div className="form-group row">
                            <label className=" control-label col-md-12" htmlFor="courierType">Name</label>
                            <div className="col-md-8">
                                <input className="form-control" type="text" name="courierType" defaultValue={this.state.courierData.courierType} required />
                            </div>
                        </div>                       
                        <div className="form-group row">
                            <label className=" control-label col-md-12" htmlFor="description">Description</label>
                            <div className="col-md-8">
                                <input className="form-control" type="text" name="description" defaultValue={this.state.courierData.description} required />
                            </div>
                        </div>                         
                        <div className="form-group">
                            <button type="submit" className="btn btn-default">Save</button>&nbsp;&nbsp;&nbsp;
                            <button className="btn btn-danger" onClick={this.handleCancel}>Cancel</button>
                        </div>
                    </div>
                </div>
            </form>
        )

    }

}