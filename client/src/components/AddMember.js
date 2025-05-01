import React, { useState } from 'react';
import axios from 'axios';

const AddMember = () => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    email: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      image: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.role || !formData.email || !formData.image) {
      alert("All fields are required");
      return;
    }

    const data = new FormData();
    data.append('name', formData.name);
    data.append('role', formData.role);
    data.append('email', formData.email);
    data.append('image', formData.image);

    try {
      await axios.post('http://localhost:5000/api/members', data);
      alert("Member added successfully!");
      setFormData({ name: '', role: '', email: '', image: null });
    } catch (err) {
      console.error(err);
      alert("Error adding member");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '40px auto', width: '300px' }}>
      <h2>Add Member</h2>
      <input name="name" placeholder="Name" onChange={handleChange} value={formData.name} /><br />
      <input name="role" placeholder="Role" onChange={handleChange} value={formData.role} /><br />
      <input name="email" placeholder="Email" onChange={handleChange} value={formData.email} /><br />
      <input type="file" name="image" onChange={handleImageChange} /><br /><br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddMember;
