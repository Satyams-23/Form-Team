import React, { useState, useEffect } from "react";
import UserList from "./components/UserList";
import Filters from "./components/Filters";
import Team from "./components/Team";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [team, setTeam] = useState([]);
  const [filters, setFilters] = useState({
    name: "",
    domain: "",
    gender: "",
    availability: "",
  });

 useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch("https://raw.githubusercontent.com/Satyams-23/Form-Team-/main/db.json");
        
        const data = await response.json();

        if (data.users) {
          // Set the 'users' state with the fetched data
          setUsers(data.users);
        } else {
          console.error("Data format is incorrect. Expected 'users' property in the response.");
        }
        
        // Set loading to false once data is fetched
        setLoading(false);
      } catch (error) {
        // Handle errors during data fetching
        console.error("Error fetching data:", error);
      }
    };


  useEffect(() => {
    filterUsers();
  }, [filters, users]);

  const filterUsers = () => {
    if (!Array.isArray(users)) {
      // Handle the case where users is not an array
      console.error('Users is not an array:', users);
      return;
    }

    let filtered = [...users];

    const searchValue = filters.name.toLowerCase();
    filtered = filtered.filter(
      (user) =>
        (user?.first_name &&
          user.first_name.toLowerCase().includes(searchValue)) ||
        (user?.last_name && user.last_name.toLowerCase().includes(searchValue))
    );

    if (filters.domain) {
      filtered = filtered.filter(
        (user) =>
          user.domain &&
          user.domain.toLowerCase() === filters.domain.toLowerCase()
      );
    }

    if (filters.gender) {
      filtered = filtered.filter(
        (user) =>
          user.gender &&
          user.gender.toLowerCase() === filters.gender.toLowerCase()
      );
    }

    if (filters.available === "true" || filters.available === "false") {
      const availabilityFilter = filters.available === "true";
      filtered = filtered.filter(
        (user) => user.available === availabilityFilter
      );
    }

    setFilteredUsers(filtered);
  };


  const addToTeam = (user) => {
    if (user.available) {
      if (!team.some((member) => member.domain === user.domain)) {
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
    <>
      <div className="container border p-2 d-none d-lg-block " /////hide on screen smaller than 992px
      >
        <Filters onFilterChange={(key, value) => setFilters({ ...filters, [key]: value })} users={users} />

        <div className="row p-2 m-auto ">
          <div className="col  ms-4">
            <UserList users={filteredUsers} onAddToTeam={addToTeam} />
          </div>

          <div className="col ms-4">
            <Team team={team} onRemoveMember={removeFromTeam} />
          </div>
        </div>
      </div>

      <div className="container border p-2 d-lg-none /////hide on screen larger than 992px 
      ">
        <Filters onFilterChange={(key, value) => setFilters({ ...filters, [key]: value })} users={users} />

        <div className="row p-2 m-auto ">
          <div className="mt-2">
            <Team team={team} onRemoveMember={removeFromTeam} />
          </div>
          <hr></hr>
          <div className=" ">
            <UserList users={filteredUsers} onAddToTeam={addToTeam} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
