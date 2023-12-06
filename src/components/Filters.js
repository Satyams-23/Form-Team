import React from "react";


const Filters = ({ onFilterChange, users }) => {
  // Ensure that users is an array before using map
  const uniqueDomains = Array.isArray(users)
    ? Array.from(new Set(users.map((user) => user.domain)))
    : [];


  return (
    <>
      <h1 className="ft">FORM-TEAM</h1>
      <div className="container border m-auto p-2 bg-success rounded d-none d-lg-block">

        <div className="row  m-auto ">
          <div className="col input-group">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Name
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              onChange={(e) => onFilterChange("name", e.target.value)}
            />
          </div>
          <div className="col input-group ">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Domain:
            </label>
            <select
              className="form-select"
              id="inputGroupSelect01"
              onChange={(e) => onFilterChange("domain", e.target.value)}
            >
              <option value="">All</option>
              {uniqueDomains.map((domain) => (
                <option key={domain} value={domain}>
                  {domain}
                </option>
              ))}

            </select>
          </div>

          <div className="col input-group ">
            <label className="input-group-text" for="inputGroupSelect01">
              Gender :
            </label>
            <select
              className="form-select"
              id="inputGroupSelect01"
              onChange={(e) => onFilterChange("gender", e.target.value)}
            >
              <option value="">All</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="col input-group">
            <label className="input-group-text" for="inputGroupSelect01">
              Availability :
            </label>
            <select
              className="form-select"
              id="inputGroupSelect01"
              onChange={(e) => onFilterChange("available", e.target.value)}
            >
              <option value="">All</option>
              <option value="true">Available</option>
              <option value="false">Not Available</option>
            </select>
          </div>
        </div>
      </div>


      <div className="container border m-auto p-2 bg-success rounded d-lg-none">

        <div className="row  m-auto ">
          <div className=" input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Name
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              onChange={(e) => onFilterChange("name", e.target.value)}
            />
          </div>
          <div className=" input-group mb-3 ">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Domain:
            </label>
            <select
              className="form-select"
              id="inputGroupSelect01"
              onChange={(e) => onFilterChange("domain", e.target.value)}
            >
              <option value="">All</option>
              {uniqueDomains.map((domain) => (
                <option key={domain} value={domain}>
                  {domain}
                </option>
              ))}
            </select>
          </div>

          <div className=" input-group mb-3 ">
            <label className="input-group-text" for="inputGroupSelect01">
              Gender :
            </label>
            <select
              className="form-select"
              id="inputGroupSelect01"
              onChange={(e) => onFilterChange("gender", e.target.value)}
            >
              <option value="">All</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className=" input-group mb-3">
            <label className="input-group-text" for="inputGroupSelect01">
              Availability :
            </label>
            <select
              className="form-select"
              id="inputGroupSelect01"
              onChange={(e) => onFilterChange("available", e.target.value)}
            >
              <option value="">All</option>
              <option value="true">Available</option>
              <option value="false">Not Available</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filters;
