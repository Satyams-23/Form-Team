import React from "react";

const Filters = ({ onFilterChange, users }) => {
  const uniqueDomains = users
    ? Array.from(new Set(users.map((user) => user.domain)))
    : [];

  return (
    <>
      <div className="container border m-auto p-2 bg-success rounded d-none d-lg-block" ///hide on screen smaller than 992px
      >
        <div className="row  m-auto ">
          <div class="col input-group">
            <span class="input-group-text" id="inputGroup-sizing-sm">
              Name
            </span>
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              onChange={(e) => onFilterChange("name", e.target.value)}
            />
          </div>
          <div class="col input-group ">
            <label class="input-group-text" for="inputGroupSelect01">
              Domain:
            </label>
            <select
              class="form-select"
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

          <div class="col input-group ">
            <label class="input-group-text" for="inputGroupSelect01">
              Gender :
            </label>
            <select
              class="form-select"
              id="inputGroupSelect01"
              onChange={(e) => onFilterChange("gender", e.target.value)}
            >
              <option value="">All</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div class="col input-group">
            <label class="input-group-text" for="inputGroupSelect01">
              Availability :
            </label>
            <select
              class="form-select"
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
      
      <div className="container border m-auto p-2 bg-success rounded d-lg-none" //hide on screen larger than 992px
      >
        <div className="row  m-auto ">
          <div class=" input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm">
              Name
            </span>
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              onChange={(e) => onFilterChange("name", e.target.value)}
            />
          </div>
          <div class=" input-group mb-3 ">
            <label class="input-group-text" for="inputGroupSelect01">
              Domain:
            </label>
            <select
              class="form-select"
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

          <div class=" input-group mb-3 ">
            <label class="input-group-text" for="inputGroupSelect01">
              Gender :
            </label>
            <select
              class="form-select"
              id="inputGroupSelect01"
              onChange={(e) => onFilterChange("gender", e.target.value)}
            >
              <option value="">All</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div class=" input-group mb-3">
            <label class="input-group-text" for="inputGroupSelect01">
              Availability :
            </label>
            <select
              class="form-select"
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
