import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';


interface EmployeeDataState {
    empList: EmployeeData[];
    loading: boolean;
}

const linkStyle = {
    color: 'blue',
    cursor: 'pointer'
};

export class EmployeeList extends React.Component<RouteComponentProps<{}>, EmployeeDataState> {

    constructor(props) {

        super(props);
        this.state = { empList: [], loading: true };

        fetch('api/Employee/GetAll')

            .then(response => response.json() as Promise<EmployeeData[]>)

            .then(data => {

                this.setState({ empList: data, loading: false });

            });
            
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    public render() {

        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderEmployeeTable(this.state.empList);

        return <div>
            <h2>Employee List</h2>            
            <p>
                <Link to="/addEmployee">Add New Employee</Link>
            </p>
            {contents}
        </div>;
    }

    private handleDelete(id: number) {

        //if (!confirm("Do you want to delete employee with Id: " + id))
        //    return;

        //else {
            fetch('api/Employee/Delete/' + id, {
                method: 'delete'
            }).then(data => {
                this.setState(
                    {
                        empList: this.state.empList.filter((rec) => {
                            return (rec.employeeId != id);
                        })
                    });
                this.props.history.push("/employeeList");
            });
        //}
    }

    private handleEdit(id: number) {

        this.props.history.push("/employee/edit/" + id);

    }  

    private renderEmployeeTable(empList: EmployeeData[]) {

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
                    <th>Department</th>      
                    <th>Designation</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {empList.map(emp =>
                    <tr key={emp.employeeId}>                       
                        <td>{emp.employeeId}</td>
                        <td>{emp.name}</td>
                        <td>{emp.gender}</td>
                        <td>{emp.contactNumber}</td>
                        <td>{emp.streetAddress}</td>
                        <td>{emp.city}</td>
                        <td>{emp.country}</td>
                        <td>{emp.zipCode}</td>
                        <td>{emp.department}</td>
                        <td>{emp.designation}</td>
                        <td>
                            <a className="action" style={linkStyle} onClick={(id) => this.handleEdit(emp.employeeId)}>Edit</a>  |
                            <a className="action" style={linkStyle} onClick={(id) => this.handleDelete(emp.employeeId)}>Delete</a>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>;
    }
}

export class EmployeeData {

    employeeId: number = 0;
    name: string = "";
    streetAddress: string = "";
    gender: string = "";
    city: string = "";
    country: string = "";
    zipCode: string = "";
    department: string = "";
    contactNumber: string = "";
    designation: string = "";
    dateCreated: Date = new Date();
}