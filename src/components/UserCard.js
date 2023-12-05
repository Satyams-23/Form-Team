import React from 'react';

const UserCard = ({ user, onAddToTeam }) => {
    return (
        <div className="user-card">
            <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
            <h3>{`${user.first_name} ${user.last_name}`}</h3>
            <p>Email: {user.email}</p>
            <p>Gender: {user.gender}</p>
            <p>Domain: {user.domain}</p>
            <p>Availability: {user.available ? 'Available' : 'Not Available'}</p>
            <button onClick={() => onAddToTeam(user)}>Add to Team</button>
        </div>
    );
};

export default UserCard;
