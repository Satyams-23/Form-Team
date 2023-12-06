import React, { useState } from "react";
import UserCard from "./UserCard";

const UserList = ({ users, onAddToTeam, filters }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(users.length / usersPerPage);

  const renderPageNumbers = () => {
    const maxPageNumbersToShow = 3;

    const halfMaxPageNumbersToShow = Math.floor(maxPageNumbersToShow / 2);
    const leftEllipsis = currentPage > halfMaxPageNumbersToShow + 1;
    const rightEllipsis = currentPage < totalPages - halfMaxPageNumbersToShow;

    let displayedPageNumbers = [];
    if (totalPages <= maxPageNumbersToShow) {
      displayedPageNumbers = Array.from(
        { length: totalPages },
        (_, i) => i + 1
      );
    } else {
      if (leftEllipsis && rightEllipsis) {
        displayedPageNumbers = Array.from(
          { length: maxPageNumbersToShow },
          (_, i) => currentPage - halfMaxPageNumbersToShow + i
        );
      } else if (leftEllipsis) {
        displayedPageNumbers = Array.from(
          { length: maxPageNumbersToShow },
          (_, i) => totalPages - maxPageNumbersToShow + i + 1
        );
      } else if (rightEllipsis) {
        displayedPageNumbers = Array.from(
          { length: maxPageNumbersToShow },
          (_, i) => i + 1
        );
      }
    }

    return (
      <>
        {leftEllipsis && (
          <li className="page-item disabled">
            <span className="page-link">...</span>
          </li>
        )}
        {displayedPageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${currentPage === number ? "active" : ""}`}
          >
            <button className="page-link" onClick={() => paginate(number)}>
              {number}
            </button>
          </li>
        ))}
        {rightEllipsis && (
          <li className="page-item disabled">
            <span className="page-link">...</span>
          </li>
        )}
      </>
    );
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      {currentUsers.map((user) => (
        <UserCard key={user.id} user={user} onAddToTeam={onAddToTeam} />
      ))}
      <div className="container ">
        <ul className="pagination ms-5 ">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => paginate(currentPage - 1)}
            >
              Previous
            </button>
          </li>
          {renderPageNumbers()}
          <li
            className={`page-item ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() => paginate(currentPage + 1)}
            >
              Next
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserList;
