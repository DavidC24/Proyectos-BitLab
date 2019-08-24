import React from 'react';
import axios from 'axios';

class UsersDeleter extends React.Component {
  state = {
    id: '',
  }
  handleChange = event => {
    this.setState({ id: event.target.name });
  }
  handleSubmit = event => {
    event.preventDefault();

    axios.delete(`https://fake-user-todo-api.herokuapp.com/api/users/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='flex flex-col'>
        <input className='p-1 m-1 border-2 rounded border-gray-700 text-xl outline-none focus:border-red-600' type='text' name='id' onChange={this.handleChange} placeholder='ID'></input>
        <button type='submit' className='text-white border-4 rounded border-red-600 bg-black hover:bg-gray-700 w-24 py-1 mx-auto my-2'>Eliminar</button>
      </form>
    );
  }
}

export default UsersDeleter;