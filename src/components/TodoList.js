// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      query: '',
    };
  }
  
  
  
  render() {
    let toShow = this.props.todos.filter(item => item.task.match(new RegExp(this.state.query, 'gi')));
    
    const handleChange = evt => {
      this.setState({query: evt.target.value})
    };

    return(
      <div>
        <form onSubmit={e => {
          e.preventDefault();
          this.setState({query: ''})
        }}
        >
          <input
            type='text'
            name='query'
            value={this.state.query}
            placeholder="Search..."
            onChange={handleChange}
          />
        </form>
        {toShow.map(item => <Todo key={item.task} task={item.task} completed={item.completed} toggleCheck={this.props.toggleCheck} />)}
      </div>
    )
  }
}

export default TodoList;