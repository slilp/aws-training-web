import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, {useState} from 'react';

function App() {

  const [response,setResponse] = useState('');

  const callApi = async () => {
    setResponse('loading...');
    const api = await axios.get('https://1hy62txsdl.execute-api.ap-southeast-1.amazonaws.com/blink-aws-class-public/awsclass');
    setResponse(api.data);
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={callApi}>Click to call api</button>
        <p>
          {response}
        </p>
      </header>
    </div>
  );
}

export default App;
