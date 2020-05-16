import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { EmployeeData } from './EmployeeList';

interface AddEmployeeDataState {

    title: string;
    loading: boolean;   
    empData: EmployeeData;
}

export class AddNewEmployee extends React.Component<RouteComponentProps<{}>, AddEmployeeDataState> {

    constructor(props) {
        super(props);
        this.state = { title: "", loading: true, empData: new EmployeeData }; 

        var empid = this.props.match.params["id"];        

        if (empid > 0) {

            fetch('api/Employee/Details/' + empid)
                .then(response => response.json() as Promise<EmployeeData>)
                .then(data => {
                    this.setState({ title: "Edit", loading: false, empData: data });
                });
        }      
        else {
            this.state = { title: "Create", loading: false, empData: new EmployeeData };
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
            <h3>Employee</h3>
            <hr />
            {contents}
        </div>;
    }      

    private handleSave(event) {

        event.preventDefault();
        const data = new FormData(event.target);
        
        if (this.state.empData.employeeId) {

            fetch('api/Employee/Edit', {
                method: 'PUT',
                body: data,
            }).then((response) => response.json())

                .then((responseJson) => {
                    this.props.history.push("/employeeList");
                })

        }    

        else {

            fetch('api/Employee/Create', {
                method: 'POST',
                body: data,
            }).then((response) => response.json())

                .then((responseJson) => {
                    this.props.history.push("/employeeList");
                })
        }
    }
       
    private handleCancel(e) {

        e.preventDefault();
        this.props.history.push("/employeeList");
    }
       
    private renderCreateForm() {

        return (           
            <form className='form-horizontal' onSubmit={this.handleSave} >
               
                <div className="row">
                <div className='col-sm-6'>
                    <div className="form-group row">
                        <input type="hidden" name="employeeId" value={this.state.empData.employeeId} />
                    </div>
                    <div className="form-group row">
                        <label className=" control-label col-md-12" htmlFor="Name">Name</label>
                        <div className="col-md-8">
                            <input className="form-control" type="text" name="name" defaultValue={this.state.empData.name} required />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="control-label col-md-12" htmlFor="Gender">Gender</label>
                        <div className="col-md-8">
                            <select className="form-control" data-val="true" name="gender" defaultValue={this.state.empData.gender} required>
                                <option value="">-- Select Gender --</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className=" control-label col-md-12" htmlFor="streetAddress">Street Adress</label>
                        <div className="col-md-8">
                            <input className="form-control" type="text" name="streetAddress" defaultValue={this.state.empData.streetAddress} required />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className=" control-label col-md-12" htmlFor="city">City</label>
                        <div className="col-md-8">
                            <input className="form-control" type="text" name="city" defaultValue={this.state.empData.city} required />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className=" control-label col-md-12" htmlFor="zipCode">Zip Code</label>
                        <div className="col-md-8">
                            <input className="form-control" type="text" name="zipCode" defaultValue={this.state.empData.zipCode} required />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className=" control-label col-md-12" htmlFor="country">Country</label>
                        <div className="col-md-8">
                            <input className="form-control" type="text" name="country" defaultValue={this.state.empData.country} required />
                        </div>
                    </div>
                </div>
                <div className='col-sm-6'>
                    <div className="form-group row">
                        <label className="control-label col-md-12" htmlFor="Department" >Department</label>
                        <div className="col-md-8">
                            <input className="form-control" type="text" name="Department" defaultValue={this.state.empData.department} required />

                       </div>
                    </div>        
                    <div className="form-group row">
                        <label className="control-label col-md-12" htmlFor="contactNumber" >Contact #</label>
                        <div className="col-md-8">
                            <input className="form-control" type="text" name="contactNumber" defaultValue={this.state.empData.contactNumber} required />

                        </div>
                    </div>     
                    <div className="form-group row">
                        <label className="control-label col-md-12" htmlFor="designation">Designation</label>
                        <div className="col-md-8">
                                    <input className="form-control" type="text" name="designation" defaultValue={this.state.empData.designation} required />

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