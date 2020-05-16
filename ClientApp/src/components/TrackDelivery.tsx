import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { DeliveryData } from './DeliveryList';

interface DeliveryDataState {
    title: string;
    deliveryDetail: DeliveryData;

    loading: boolean;
    deliveryId: number;
}

export class TrackDelivery extends React.Component<RouteComponentProps<{}>, DeliveryDataState> {

    constructor(props) {

        super(props);
        this.state = { title: "", deliveryDetail: new DeliveryData, loading: false, deliveryId: null };              

        this.handleSearch = this.handleSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    public render() {

        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderSearchForm();

        return <div>
            <h4>{this.state.title}</h4>
            <h4>Track Delivery</h4>
            <hr />
            {contents}
        </div>;
    }

    private handleSearch(id: number) {

        if (id > 0) {

            fetch('api/Delivery/Details/' + id)
                .then(response => response.json() as Promise<DeliveryData>)
                .then(data => {
                    this.setState({ title: "View", loading: false, deliveryDetail: data, deliveryId: id });

                    if (data.deliveryId > 0) {
                        alert("Delivery details found");
                        this.props.history.push("/delivery/edit/" + id);
                    } else 
                        alert("No delivery details found");                       
                    
                });
        } else 
            alert("Please enter Delivery Id reference.");        
       
    }

    private handleChange({ target }) {
       
        this.setState({ title: "Search", loading: false, deliveryDetail: new DeliveryData, deliveryId: target.value });     
        
    }

    private renderSearchForm() {

        return( 
            <div className="input-group">
                <input type="text" className="form-control" name="deliveryId" value={this.state.deliveryId} onChange={this.handleChange} 
                    placeholder="Enter Delivery Id or Reference Id  here" required />
                    <div className="input-group-append">
                    <button className="btn btn-secondary" type="button" onClick={(id) => this.handleSearch(this.state.deliveryId)} >
                            Search<i className="fa fa-search"></i>
                        </button>
                    </div>
            </div>
        )
    }
    

}