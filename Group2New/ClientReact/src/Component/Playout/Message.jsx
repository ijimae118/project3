import React, { Component } from 'react';


class Message extends Component {
    render(){
        var{message} =this.props;
    return (
        <div>   
        <h3>
            <span className="badge amber darken-2 color-white">
                {message}
            </span>
        </h3>
        </div>      
    )
    }
}

export default Message;

