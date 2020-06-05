import React from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Button from 'react-bootstrap/Button';

class App extends React.Component {
  render() {
    return (
      <div>
        <p> <h1><center> Tarush you are Awesome!  </center></h1></p>
        <Title/>
        <Form/>
      </div>
    );
  }
}
export default App;
