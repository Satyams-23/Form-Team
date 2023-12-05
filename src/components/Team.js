import React from 'react';
import MemberDetails from './MemberDetails';


const Team = ({ team, onRemoveMember }) => {
    // ...
    return (
        <div className="team-detail">
            <h2>Team Details</h2>
            {team.length === 0 ? (
                <p>No team members yet.</p>
            ) : (
                <ul>
                    {team.map((user) => (
                        <li key={user.id}>
                            <div>
                                <hr />
                                <h3>{user.domain}</h3>
                                <hr />
                                <MemberDetails user={user} />
                                <button className='removebtn' onClick={() => onRemoveMember(user)}>Remove</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
// ...



export default Team;
