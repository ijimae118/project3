import React from 'react'
import Card from './Card'


//console.clear(); //xoa console


    class Pagination extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          todos: this.props.products,
          onAddToBasket: this.props.onAddToBasket,
          onChangeMessage: this.props.onChangeMessage,
          currentPage: 1,
          todosPerPage: 3
        };
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick(event) {
        this.setState({
          currentPage: Number(event.target.id)
        });
      }
      
      render() {
      
        const { todos, currentPage, todosPerPage ,onAddToBasket ,onChangeMessage} = this.state;
        //console.log('hello :' ,todos);
        // Logic for displaying current todos
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);
       
        const renderTodos = currentTodos.map((todo, index) => {
          //console.log('item',todo.id);
          return <Card key={index} product={todo} onAddToBasket={onAddToBasket} onChangeMessage={onChangeMessage}/>;
          //return <div key={index}>{<Card key={todo.id} product={todo} />}</div>;
        });
        
        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
          pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
          return (
            <li
              key={number}
              id={number}
              onClick={this.handleClick}
            >
              {number}
            </li>
          );
        });

        return (
          <div>
            <h2 style={{textAlign:'left',padding:'2%'}}>All Services <span><img src="https://laundrapp.com/app/themes/laundrapp/dist/images/laundrapp_76b7d4fb.svg" alt="# " /></span></h2>
            <div className="card-deck">  
            <div className="cover-item">
              {renderTodos}

            </div>
            </div>
            <hr/>
            <ul id="page-numbers">
              {renderPageNumbers}
            </ul>
          </div>
        );
      }
    }


    export default Pagination;