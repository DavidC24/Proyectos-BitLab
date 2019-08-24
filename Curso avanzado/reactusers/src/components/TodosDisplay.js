import React from 'react';
import axios from 'axios';

class TodosDisplay extends React.Component {

  state = {
    users: []
  }
  componentDidMount() {
    axios.get('https://fake-user-todo-api.herokuapp.com/api/users/1/todos')
    .then(response => response.data)
    .then((data) => {
      this.setState({users:data})
      console.log(this.state.users)
    })
  }
      
  render() {
    return (
      <div className='flex flex-col w-1/2 '>
        {this.state.users.map((user) => (
        <div className='text-left text-xl'>
          <div className='p-2'>
            {user.title}<br></br>ID: {user.id}
          </div>
        </div>
      ))}
      </div>
    );
  }
}

export default TodosDisplay;