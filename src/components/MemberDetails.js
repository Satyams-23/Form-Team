import React from 'react';


const MemberDetails = ({ user }) => {
    return (
        <div className="user-card">
            <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
            <h3>{`${user.first_name} ${user.last_name}`}</h3>
            <p>Email: {user.email}</p>
            <p>Gender: {user.gender}</p>
            <p>Domain: {user.domain}</p>
            <p>Availability: {user.available ? 'Available' : 'Not Available'}</p>

        </div>
    );
};

export default MemberDetails;
