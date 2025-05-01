import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to Team Phoenix</h1>
      <p>Manage your awesome team members here!</p>
      <Link to="/add"><button>Add Member</button></Link>
      <Link to="/members" style={{ marginLeft: '10px' }}><button>View Members</button></Link>
    </div>
  );
};

export default Home;
