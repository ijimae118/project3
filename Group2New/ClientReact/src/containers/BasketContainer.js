import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../Component/Playout/Cart';
import * as Message from './../constants/Message';
import CartItem from './../Component/Playout/CartItem';
import CartResult from './../Component/Playout/CartResult';
import {actDeleteProductInBasket,actChangeMessage,actUpdateProductInBasket} from './../actions/index';
class BasketContainer extends Component {
    render(){ 
           var {basket} = this.props;
            return(
                <Cart>
                   {this.showBasketItem(basket)} 
                   {this.showTotalAmount(basket)} 
                </Cart>
            );
    }
    showBasketItem=(basket)=>{
        var {onDeleteProductInBasket,onChangeMessage,onUpdateProductInBasket} =this.props;
        var result = <tr>
            <td>{Message.MSG_CART_EMPTY}</td>
            </tr>;
        if (basket.length >0) {
            result = basket.map((item,index)=>{
                return(
                    <CartItem
                        key={index}
                        item ={item}
                        index={index}
                        onDeleteProductInBasket = {onDeleteProductInBasket}
                        onChangeMessage = {onChangeMessage}
                        onUpdateProductInBasket={onUpdateProductInBasket}
                    />
                );
            });
        }
        return result;
    }

    showTotalAmount = (basket)=>{
        var result = null;
        if (basket.length >0) {
            result = <CartResult basket={basket} />
        }
        return result;
    }
}

BasketContainer.propTypes ={
    basket : PropTypes.arrayOf(PropTypes.shape({
        product : PropTypes.shape({
            id:PropTypes.number.isRequired,
            name:PropTypes.string.isRequired,
            image:PropTypes.string.isRequired,
            description:PropTypes.string.isRequired,
            type:PropTypes.string.isRequired,
            price:PropTypes.number.isRequired,
            rating:PropTypes.number.isRequired
        }).isRequired,
        quantity : PropTypes.number.isRequired
    })).isRequired,
    onDeleteProductInBasket:PropTypes.func.isRequired,
    onChangeMessage:PropTypes.func.isRequired,
    onUpdateProductInBasket:PropTypes.func.isRequired
}

const mapStateToProps = state =>{
    return {
        basket: state.basket
    }
}
const mapDispatchToProps = (dispatch,props) =>{
    return {
        onDeleteProductInBasket:(product)=>{
            dispatch(actDeleteProductInBasket(product));
        },
        onChangeMessage:(message)=>{
            dispatch(actChangeMessage(message));
        },
        onUpdateProductInBasket:(product,quantity)=>{
            dispatch(actUpdateProductInBasket(product,quantity));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(BasketContainer);

