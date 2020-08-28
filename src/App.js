import React from 'react';
import axios from 'axios';
import './App.css';

export default class extends React.Component {
  constructor () {
      super()

      this.state = {
          people: [],
      }
  }
  
  componentDidMount () {
      axios.get(`/api`)
          .then(res => {
           const { people } = res.data.response;
          this.setState({ people });
      })
  }
  
  render () {
    return (
      <ol>
         { this.state?.people?.map((person) => <li>{person.name}</li>)}
      </ol>
    )
  }
}