import React, { Component } from 'react';
import * as Message from './../../constants/Message';
class Card extends Component {
    render(){
        var {product} = this.props;
        return(
            <div className="card">
                    <img className="card-img-top" width="277" height="200" srcSet={`images/${product.image}`} alt={product.name} />
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text ">{product.description}</p>
                        <p>
                            {this.showRatings(product.rating)}
                        </p>
                        <strong> ${product.price} for {product.type} </strong>
                    </div>
                    <div className="card-footer">
                        <a href="#/ "
                        className="btn-floating blue-gradient waves-effect waves-light" 
                        data-toggle="tooltip" 
                        data-placement="top" title="" 
                        data-original-title="Add to Cart"
                        onClick={ () => this.onAddToBasket(product) } 
                        >
                            <i className="fa fa-shopping-cart"></i>
                        </a>
                    </div>
            </div>
        );
    }
    
    onAddToBasket = (product) =>{
        this.props.onAddToBasket(product);
        this.props.onChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS);
    }

    showRatings = (rating) => {

        var result = [];
        //if rating =4;
        for ( var i = 1 ; i<= rating ; i++) {  //=>create 1,2,3,4
    
          result.push(<li className="fa fa-star" key={i}></li>);
    
        }
    
        for(var j =1 ; j<=(5-rating); j++) {  //(5-4)=> create 1
    
          result.push(<li className="fa fa-star-o" key={rating+j}></li>)
    
        }
    
        return result;
    
      }

    
}


export default Card;

