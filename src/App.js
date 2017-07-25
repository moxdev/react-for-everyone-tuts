import React from 'react';
import {render} from 'react-dom';
import ContactsList from './ContactsList';

let contacts = [{
  id: 1,
  name: 'Scott',
  phone: ' 555 333 5555'
}, {
  id: 2,
  name: 'Jimmy',
  phone: ' 555 333 5555'
}, {
  id: 3,
  name: 'James',
  phone: ' 555 333 5555'
}, {
  id:4,
  name: 'Wanda',
  phone: ' 555 333 5555'
}]

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Contact List</h1>
        <ContactsList contacts={this.props.contacts} />
      </div>
    )
  }
}

render(<App contacts={contacts} />, document.getElementById('app'));