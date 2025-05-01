import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ViewMembers = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/members')
      .then((res) => setMembers(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>All Team Members</h2>
      {members.map((member) => (
        <div key={member._id} style={{ border: '1px solid gray', padding: '10px', marginBottom: '10px' }}>
          <img src={`http://localhost:5000/uploads/${member.image}`} alt="profile" width="100" /><br />
          <strong>{member.name}</strong><br />
          <em>{member.role}</em><br />
          <Link to={`/members/${member._id}`}><button>View Details</button></Link>
        </div>
      ))}
    </div>
  );
};

export default ViewMembers;
