import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


class Login extends Component {
    state = {  } 
    constructor(props) {
        super(props);
        console.log("Login - constructor");
        // undefined props obj
        console.log("props Login", props);
      }
      // perfect place for making ajax calls
      componentDidMount() {
        // i.e. component is in the DOM
        console.log("Login -  mounted");
      }
      componentDidUpdate() {
        // when props or state is updated
        console.log("Login -  updated");
      }
    render() { 
        return (
            <div className='m-auto d-flex flex-column align-center'>
                <Card  sx={{ minWidth: 275,minHeight:300 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        {/* <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography> */}
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
            </div>
        );
    }
}
 
export default Login;