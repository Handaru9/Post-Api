import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: ''
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { name, email } = this.state;

    const data = {
      name: name,
      email: email,
    };

    fetch('https://jsonplaceholder.typicode.com/guide/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        
        
      },
      body: JSON.stringify()
    })
    .then(response => response.json())
    .then(data => {
      console.log('Response from API server:', data);
      // Tampilkan respons dari API server pada halaman web
    })
    .catch(error => console.error('Error:', error));
  }

  render() {
    const { name, email } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          userId:
          <input type="text" name="name" value={name} onChange={this.handleInputChange} />
        </label>
        <label>
          id:
          <input type="text" name="email" value={email} onChange={this.handleInputChange} />
        </label>
        <button type="submit">Send</button>
      </form>
    );
  }
}

export default Form;