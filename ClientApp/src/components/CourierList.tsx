import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';


interface CourierDataState {
    courierList: CourierData[];
    loading: boolean;
}

const linkStyle = {
    color: 'blue',
    cursor: 'pointer'
};

export class CourierList extends React.Component<RouteComponentProps<{}>, CourierDataState> {

    constructor(props) {

        super(props);
        this.state = { courierList:[], loading: true };

        fetch('api/Courier/GetAll')

            .then(response => response.json() as Promise<CourierData[]>)
            .then(data => {
                this.setState({ courierList: data, loading: false });
            });       

        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    public render() {

        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderCourierTable(this.state.courierList);

        return <div>
            <h2>Courier List</h2>
            <p>
                <Link to="/addCourier">Add New Courier</Link>
            </p>
            {contents}

        </div>;
    }   

    private handleDelete(id: number) {
  
        fetch('api/Courier/Delete/' + id, {
            method: 'delete'
        }).then(data => {
            this.setState(
                {
                    courierList: this.state.courierList.filter((rec) => {
                        return (rec.courierId != id);
                    })
                });
            this.props.history.push("/courierList");
        });        
    }

    private handleEdit(id: number) {

        this.props.history.push("/courier/edit/" + id);
    }

    private renderCourierTable(courierList: CourierData[]) {

        return <table className='table table-condensed table-bordered'>
            <thead className='thead-light'>
                <tr>
                    <th>Courier Id</th>
                    <th>Name</th>
                    <th>Description</th>                    
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {courierList.map(cor =>
                    <tr key={cor.courierId}>
                        <td>{cor.courierId}</td>
                        <td>{cor.courierType}</td>
                        <td>{cor.description}</td>                       
                        <td>
                            <a className="action" style={linkStyle} onClick={(id) => this.handleEdit(cor.courierId)}>Edit</a>  |
                            <a className="action" style={linkStyle} onClick={(id) => this.handleDelete(cor.courierId)}>Delete</a>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>;
    }
}

export class CourierData {

    courierId: number = 0;
    courierType: string = "";
    description: string = "";    
}