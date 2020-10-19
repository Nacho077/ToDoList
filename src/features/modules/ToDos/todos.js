import React, {Component} from 'react';
import { connect } from "react-redux";
import { addToDo, completeToDo, removeToDo } from "../../actions"

class Todos extends Component{

    complete = e =>{
        e.preventDefault();
        var value = e.target.value
        this.props.completeToDo(value);
    }

    trash = e =>{
        e.preventDefault();
        var value = e.target.value
        this.props.removeToDo(value)
    }
    
    render(){
        return(
            <ul className="list-group">
                {this.props.todo.map(el => <li key={el} className="incomplete list-group-item">
                    {el}
                    <button  value={el} onClick={this.complete}  className="incomplete btn btn-outline-success fas fa-check-square">
                    </button>
                </li>)}
                {this.props.todoComplete.map(el => <li key={el} className="complete list-group-item">
                    {el}
                    <button value={el} onClick={this.trash} className="incomplete btn btn-outline-secondary fas fa-trash-alt">
                    </button>
                </li>)}

            </ul>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        completeToDo: value => dispatch(completeToDo(value)),
        addToDo: value => dispatch(addToDo(value)),
        removeToDo: value => dispatch(removeToDo(value))
    }
}

function mapStateToProps(state){
    return{
        todo: state.ToDo,
        todoComplete: state.ToDoComplete
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Todos);