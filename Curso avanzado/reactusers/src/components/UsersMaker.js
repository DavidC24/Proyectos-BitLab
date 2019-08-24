import React from 'react';
import axios from 'axios';

class UsersMaker extends React.Component {

  state = {
    name: '',
    last_name: '',
    email: '',
    id: ''
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit = (e) => {
    e.preventDefault();
    const {name, last_name, email, id} = this.state;

    axios.post(`https://fake-user-todo-api.herokuapp.com/api/users`, {name}, {last_name}, {email}, {id})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    const {name, last_name, email, id} = this.state;
    return (
      <form onSubmit={this.onSubmit} className='flex flex-col'>
        <input className='p-1 m-1 border-2 rounded border-gray-700 text-xl outline-none focus:border-red-600' type='text' name='name' value={name} onChange={this.onChange} placeholder='Nombre'></input>
        <input className='p-1 m-1 border-2 rounded border-gray-700 text-xl outline-none focus:border-red-600' type='text' name='last_name' value={last_name} onChange={this.onChange}placeholder='Apellido'></input>
        <input className='p-1 m-1 border-2 rounded border-gray-700 text-xl outline-none focus:border-red-600' type='text' name='email' value={email} onChange={this.onChange} placeholder='Correo'></input>
        <input className='p-1 m-1 border-2 rounded border-gray-700 text-xl outline-none focus:border-red-600' type='text' name='id' value={id} onChange={this.onChange} placeholder='ID'></input>
        <button type='submit' className='text-white border-4 rounded border-red-600 bg-black hover:bg-gray-700 w-24 py-1 mx-auto my-2'>Crear</button>
      </form>
    );
  }
}

export default UsersMaker;