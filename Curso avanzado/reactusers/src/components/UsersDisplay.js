import React from 'react';
import axios from 'axios';

class UsersDisplay extends React.Component {

  state = {
    users: []
  }
  componentDidMount() {
    axios.get('https://fake-user-todo-api.herokuapp.com/api/users')
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
        <div className='text-left text-xl border-r-4 border-red-600'>
          <div className='p-2'>
            {user.name} {user.last_name} -- ID: {user.id}<br></br>{user.email}
          </div>
        </div>
      ))}
      </div>
    );
  }
}

export default UsersDisplay;