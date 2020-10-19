import React, { Component } from 'react';
import { connect } from "react-redux";
import { addToDo } from "../../actions"



class Input extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: ""
    };
  }

  HandleChange = event => {
    this.setState({value: event.target.value})
  }
  handleSubmit = event => {
    event.preventDefault();
    const { value } = this.state;
    this.props.addToDo(value);
    this.setState({value: ""});
  }

  render(){
    return(
      <form>
        <input className="input" value={this.state.value} type="text" placeholder="To Do" onChange={this.HandleChange}>
          {this.value}
        </input>
        <button className="buton btn btn-primary" type="submit" onClick={this.handleSubmit}>Agregar</button>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch){
  return{
    addToDo: value => dispatch(addToDo(value))
  }
}

function mapStateToProps(state){
  return{
      todo: state.ToDo
  }
}

const Form = connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);

export default Form;