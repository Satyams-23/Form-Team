import React from "react";

const MemberDetails = ({ user }) => {
  return (
    <>
      <div class="card mb-3" style={{ maxWidth: "540px" }}>
        <div class="row g-0">
          <div class="col-md-4">
            <img
              class="img-fluid rounded-start border"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
              src={user.avatar}
              alt={`${user.first_name} ${user.last_name}`}
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h3 class="card-title">{`${user.first_name} ${user.last_name}`}</h3>
              <p>Email: {user.email}</p>
              <p>Gender: {user.gender}</p>
              <p>Domain: {user.domain}</p>
              <p>
                Availability: {user.available ? "Available" : "Not Available"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberDetails;
