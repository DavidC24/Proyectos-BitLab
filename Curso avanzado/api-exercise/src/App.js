import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import UserBox from './UserBox.js';
import { Container, Heading, Section } from 'react-bulma-components/full';

class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        user: [],   
        isLoaded: false 
    }  
  }  
  async componentDidMount() {
    await axios.get('https://api.github.com/users/lekastillo')
    .then(response => {
      console.log(response)
      this.setState({user: response.data, isLoaded: true,});
    })
    .catch(error => console.log(error))
  }
  
  render() {
    let { user=[], isLoaded } = this.state;
    return (
      <div className="App">
        <Section>
          <Container fluid>
            <Heading size={5} renderAs="p">
              My Gits Profile              
            </Heading>              
            <Heading subtitle renderAs="p">
              Using with React and Axios 
            </Heading>
          </Container>
        </Section>
        <Section>  
          <Container fluid>
          {isLoaded && <UserBox user={user}/>}
            <UserBox />
          </Container>
        </Section>
      </div>    
    );  
  }
}

export default App;