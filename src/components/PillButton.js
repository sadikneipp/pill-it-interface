import React from 'react'
import Button from '@material-ui/core/Button';
import axios from 'axios'

handleClick () {
    axios.get('https://api.github.com/users/maecapozzi')
      .then(response => this.setState({username: response.data.name}))
  }

const PillButton = () => {
    return(
        <Button 
            variant="contained" 
            onClick={handleClick}
            color="primary"
            size="large"
            top="50%"
        >
            Detectar pílula!
        </Button>
    )
}

export default PillButton;