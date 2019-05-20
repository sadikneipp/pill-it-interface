import React, {Component} from 'react'
import './App.css'
import axios from 'axios'
import Button from '@material-ui/core/Button';


class App extends Component {
  constructor () {
    super()
    this.state = {
      pred: ''
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    axios.get('localhost:5000/alexareq')//'https://api.github.com/users/maecapozzi')
      .then(response => this.setState({pred: response.data.medication}))
  }

  render () {
    return (
      <div className='App'>
        <Button 
            variant="contained"
            color="primary"
            size="large"
            top="50%"
            onClick={this.handleClick}
        >
            Detectar pílula!
        </Button>
        <p>{"Pílula prevista: " + this.state.pred}</p>
      </div>
    )
  }
}

export default App;