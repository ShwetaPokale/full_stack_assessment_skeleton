import React from 'react';
import HomesForUser from '../src/features/HomesForUser'; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

function App() {
  return (
    <div className="App">
      <h1>Homes Management</h1>
      <HomesForUser />
      <ToastContainer />
    </div>
  );
}

export default App;
