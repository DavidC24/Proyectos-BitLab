import React from 'react';
import axios from 'axios';

class TodosDeleter extends React.Component {
  state = {
    user_id: '',
  }
  handleChange = event => {
    this.setState({ user_id: event.target.value });
  }
  handleSubmit = event => {
    event.preventDefault();

    axios.delete(`https://fake-user-todo-api.herokuapp.com/api/users/1/todos${this.state.user_id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='flex flex-col'>
        <input className='p-1 m-1 border-2 rounded border-gray-700 text-xl outline-none focus:border-red-600' type='text' name='user_id' onChange={this.handleChange} placeholder='ID'></input>
        <button type='submit' className='text-white border-4 rounded border-red-600 bg-black hover:bg-gray-700 w-24 py-1 mx-auto my-2'>Eliminar</button>
      </form>
    );
  }
}

export default TodosDeleter;