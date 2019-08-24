import React from 'react';
import axios from 'axios';

class TodosMaker extends React.Component {

  constructor() {
    super();
    this.state = {
      title: '',
      user_id: '',
    };
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit = (e) => {
    e.preventDefault();
    const {title, user_id} = this.state;

    axios.post(`https://fake-user-todo-api.herokuapp.com/api/users/1/todos`, {title}, {user_id},)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    const {title, user_id} = this.state;
    return (
      <form onSubmit={this.onSubmit} className='flex flex-col'>
        <input className='p-1 m-1 border-2 rounded border-gray-700 text-xl outline-none focus:border-red-600' type='text' name='title' value={title} onChange={this.onChange} placeholder='Tarea'></input>
        <input className='p-1 m-1 border-2 rounded border-gray-700 text-xl outline-none focus:border-red-600' type='id' name='user_id' value={user_id} onChange={this.onChange}placeholder='ID'></input>
        <button type='submit' className='text-white border-4 rounded border-red-600 bg-black hover:bg-gray-700 w-24 py-1 mx-auto my-2'>Crear</button>
      </form>
    );
  }
}

export default TodosMaker;