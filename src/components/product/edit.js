import React from 'react';
import { connect } from 'react-redux';
import './style.css';



class EditProduct extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch({
            type: 'UPDATE_PRODUCT',
            product: {
                id: e.target.id.value,
                title: e.target.title.value,
                state: e.target.state.value,
                url: e.target.url.value,
                created: e.target.created.value,
                updated: e.target.updated.value
            }
        });
        this.props.history.push('/');
    }

  render(){
    return(
      <div>
        <h3>Edit Product</h3>

        <form onSubmit={this.handleSubmit}>
                    <input type="text" name="id" placeholder="Id" readOnly="true" defaultValue={this.props.product.id} />
                    <br /><br />
                    <input type="text" name="title" placeholder="Title" defaultValue={this.props.product.title} />
                    <br /><br />
                    <input type="text" name="state" placeholder="State" defaultValue={this.props.product.state} />
                    <br /><br />
                    <input type="text" name="url" placeholder="Url" defaultValue={this.props.product.url} />
                    <br /><br />
                    <input type="text" name="created" placeholder="Created" defaultValue={this.props.product.created} />
                    <br /><br />
                    <input type="text" name="updated" placeholder="Updated" defaultValue={this.props.product.updated} />
                    <br /><br />
                    <input type="submit" value="Save" />
                    <button><a href="/index"> Cancel</a></button>

                    <br />
                </form>

      </div>
    );
  }
}

function mapStateToPProps(state) {
    return{
        product: state.products[0]
    }
}

export default connect(mapStateToPProps) (EditProduct);
