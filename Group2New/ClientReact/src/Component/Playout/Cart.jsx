import React, { Component } from 'react';
import MessageContainer from './../../containers/MessageContainer';

class Cart extends Component {
   render(){
    var {children} = this.props;
    return (
        <cart className="Cart">
            <div>
                {/* Message */}
                <MessageContainer/>
                {/* Cart */}
                <section className="section">
                <div className="table-responsive">
                    <table className="table product-table">
                    <thead>
                        <tr>
                        <th />
                        <th>Sản Phẩm</th>
                        <th>Giá</th>
                        <th>Số Lượng</th>
                        <th>Tổng Cộng</th>
                        <th />
                        </tr>
                    </thead>
                    <tbody>
                        {/* CartItem */}
                        {/* CartResult */}
                        {children}
                        
                    </tbody>
                    </table>
                </div>
                </section>
            </div>
        </cart>
    )
   }
}

export default Cart;

