import React,{Component}from 'react';

import './App.css';
// import { render } from '@testing-library/react';

class App extends Component{
  state={
    todolist:[]
  }
  render(){
  return (
    <div>
    <div className="jumbotron jumbotron-fluid py-2">
  <div className="container">
   <center> <h1 className="display-4 text-success">Todo App</h1></center>
    
  </div>
</div>

<form className="mb-3" onSubmit={this.handleSubmit}>
 
<input type="text" name="todotask" className="form-control" placeholder="What to do?" autoComplete="off"/>

<br/>
  
  <button type="submit" className="btn btn-success btn-lg btn-block ">ADD</button>


</form>
<ul className="list-group">
    {
      this.state.todolist.map((item,index)=>{
        return <li className="list-group-item" key={index}>
        
    
          {item}
 
          <button className="btn btn-sm btn-outer-danger float-right " onClick={(event)=>this.deletetodo(event,index)}><i class="fa fa-trash" aria-hidden="true"></i></button>
        </li>
      })
    }
</ul>

</div>
  );
}
handleSubmit=(event)=>{
  var task=event.target.elements.todotask.value;
  if(task.length>0){
    this.setState({
      todolist:[...this.state.todolist,task]
    }) 
    event.target.reset();
  }
  event.preventDefault();
}

deletetodo=(event,index)=>{
  var taskarray=[...this.state.todolist]
  taskarray.splice(index,1)
  this.setState({todolist:taskarray})
}
}


export default App;
