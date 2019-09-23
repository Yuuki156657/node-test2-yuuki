import React from 'react';
import { connect } from 'react-redux';

import './style.css';


class AddProduct extends React.Component {

    constructor(){
        super();
        this.state = {
            id: '',
            title: '',
            state: '',
            url: '',
            created: '',
            updated: ''
        };
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch({
            type: 'ADD_PRODUCT',
            product: this.state
        });
        this.props.history.push('/');
    }

    render(){
        return(
            <div className="add">
                <h3>Add new Issue</h3>
                <form onSubmit={this.handleSubmit}>
                    <h4>ID<br /><input type="text" name="id" placeholder="Id" value={this.state.id} onChange={this.handleInputChange} /></h4>

                    <h4>Title<br /><input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.handleInputChange} /></h4>

                    <h4>State<br /><input type="text" name="state" placeholder="State" value={this.state.state}  onChange={this.handleInputChange} /></h4>

                    <h4>Url<br /><input type="text" name="url" placeholder="Url" value={this.state.url} onChange={this.handleInputChange} /></h4>

                    <h4>Created at<br /><input type="text" name="created" placeholder="Created" value={this.state.created} onChange={this.handleInputChange} /></h4>

                    <h4>Updated at<br /><input type="text" name="updated" placeholder="Updated" value={this.state.updated}  onChange={this.handleInputChange} /></h4>

                    <input type="submit" value="Save" />
                    <input type="submit" value="Cancel"/>

                    {/* <button><a href="/index"> Cancel</a></button> */}
                    <br />
                </form>
            </div>
        );
    }
}

export default connect() (AddProduct);
