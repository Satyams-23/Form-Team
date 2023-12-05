import React, { useState } from 'react';
import UserCard from './UserCard';

const UserList = ({ users, onAddToTeam, filters }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 20;

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);



    return (
        <div>
            {currentUsers.map((user) => (
                <UserCard key={user.id} user={user} onAddToTeam={onAddToTeam} />
            ))}
            <div>
                Pagination:
                {Array.from({ length: Math.ceil(users.length / usersPerPage) }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => paginate(index + 1)}
                        style={{ fontWeight: currentPage === index + 1 ? 'bold' : 'normal' }}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default UserList;
