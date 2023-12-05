import React from 'react';

const Filters = ({ onFilterChange, users }) => {
    const uniqueDomains = users ? Array.from(new Set(users.map(user => user.domain))) : [];

    return (
        <div>
            <label>
                Name:
                <input type="text" onChange={(e) => onFilterChange('name', e.target.value)} />
            </label>
            <label>
                Domain:
                <select onChange={(e) => onFilterChange('domain', e.target.value)}>
                    <option value="">All</option>
                    {uniqueDomains.map(domain => (
                        <option key={domain} value={domain}>{domain}</option>
                    ))}
                </select>
            </label>
            <label>
                Gender:
                <select onChange={(e) => onFilterChange('gender', e.target.value)}>
                    <option value="">All</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </label>
            <label>
                Availability:
                <select onChange={(e) => onFilterChange('available', e.target.value)}>
                    <option value="">All</option>
                    <option value="true">Available</option>
                    <option value="false">Not Available</option>
                </select>
            </label>
        </div>
    );
};

export default Filters;
