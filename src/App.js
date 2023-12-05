
import React, { useState, useEffect } from 'react';
import UserList from './components/UserList';
import Filters from './components/Filters';
import Team from './components/Team';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [team, setTeam] = useState([]);
  const [filters, setFilters] = useState({
    name: '',
    domain: '',
    gender: '',
    availability: '',
  });


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []
  );

  useEffect(() => {
    filterUsers();
  }, [filters, users]);

  const filterUsers = () => {
    let filtered = [...users];

    const searchValue = filters.name.toLowerCase();
    filtered = filtered.filter(
      user => (
        (user.first_name && user.first_name.toLowerCase().includes(searchValue)) ||
        (user.last_name && user.last_name.toLowerCase().includes(searchValue))
      )
    );

    if (filters.domain) {
      filtered = filtered.filter(user => user.domain && user.domain.toLowerCase() === filters.domain.toLowerCase());
    }

    if (filters.gender) {
      filtered = filtered.filter(user => user.gender && user.gender.toLowerCase() === filters.gender.toLowerCase());
    }

    if (filters.available === "true" || filters.available === "false") {
      const availabilityFilter = filters.available === "true";
      filtered = filtered.filter(user => user.available === availabilityFilter);
    }



    setFilteredUsers(filtered);
  };
  useEffect(() => {
    filterUsers();
  }, [filters, users]);

  const addToTeam = (user) => {
    if (user.available) {
      if (!team.some(member => member.domain === user.domain)) {
        setTeam([...team, user]);
      } else {
        alert(`User with domain ${user.domain} is already in the team.`);
      }
    } else {
      alert(`${user.first_name} ${user.last_name} is not available.`);
    }
  };

  const removeFromTeam = (userToRemove) => {
    const updatedTeam = team.filter((user) => user.id !== userToRemove.id);
    setTeam(updatedTeam);
  };




  return (
    <div className="app-container">
      <Filters onFilterChange={(key, value) => setFilters({ ...filters, [key]: value })} users={users} />
      <div className="main-content">
        <UserList users={filteredUsers} onAddToTeam={addToTeam} />
        <Team team={team} onRemoveMember={removeFromTeam} />
      </div>
    </div>
  );
};

export default App;
