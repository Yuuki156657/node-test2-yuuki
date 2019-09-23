import React from 'react';
import { connect } from 'react-redux';

import './style.css';

class ProductList extends React.Component {

    delete(e) {
        var id = e.target.getAttribute('data-key');
        this.props.dispatch({
            type: 'DELETE_PRODUCT',
            id: id
        });
        this.props.history.push('/');
    }

    edit(e) {
        var id = e.target.getAttribute('data-key');
        this.props.dispatch({
            type: 'EDIT_PRODUCT',
            id: id
        });
        this.props.history.push('/edit/' + id);
    }

render(){
    return(
    <div>
        {/* <h3>Angular 6 MatTable CRUD Example</h3> */}
        <table border="1">
            <thead>
                <tr className="tr1">
                    <td className="td1" colSpan="7"><p className="h51">Angular 6 MatTable CRUD Example</p></td>
                </tr>
                <tr className="tr2">
                    <td className="td2" colSpan="7"><p className="h52">Filter issues</p></td>
                </tr>
                <tr>
                    <th className="th1">Id</th>
                    <th className="th2">Title</th>
                    <th className="th3">State</th>
                    <th className="th4">Url</th>
                    <th className="th5">Created at</th>
                    <th className="th6">Updated at</th>
                    <th className="th7">Action</th>
                </tr>
            </thead>
            <tbody>
                {this.props.products.map(function(product, index){
                    return <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td>{product.state}</td>
                        <td>{product.url}</td>
                        <td>{product.created}</td>
                        <td>{product.updated}</td>
                        <td>
                            <input type="button" value="Edit"
                            onClick={this.edit.bind(this)} data-key={product.id} /> | 
                            <input type="button" value="Delete"
                            onClick={this.delete.bind(this)} data-key={product.id} />
                            </td>
                    </tr>
                }, this)}
            </tbody>
        </table>
    </div>
    );
}
}

function mapStateToPProps(state) {
    return{
        products: state.products
    }
}

export default connect(mapStateToPProps) (ProductList);