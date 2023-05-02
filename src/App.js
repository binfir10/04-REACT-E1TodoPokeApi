import React from 'react';
import Routes from './routes/Routes';
import Navbar from './components/Navbar/Navbar';
import Layout from './components/Layout/Layout';


function App() {
  return (
    <>
      <Layout>
        <Navbar />
        <Routes />
      </Layout>
    </>

  );
}

export default App;
