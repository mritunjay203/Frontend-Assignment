"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card'

const UserData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const fetchedUsers = response.data.slice(0, 10); // Limiting to 10 users
        setUsers(fetchedUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);
  const handleDelete = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
    // Here you can also send a DELETE request to your server to delete the user permanently
  };

  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-2 grid-cols-1 gap-5 m-4">
      {users.map(user => (
            <Card user={user} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default UserData;
