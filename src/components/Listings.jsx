import React, { useState, useEffect } from 'react';

const Listings = () => {
  const [listingData, setListingData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((r) => r.json())
      .then((data) => {
        setListingData(data);
        setFilteredData(data); // Initialize filteredData with all data
      });
  }, []);

  // Update filteredData whenever searchQuery or listingData changes
  useEffect(() => {
    const filteredResults = listingData.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filteredResults);
  }, [searchQuery, listingData]);

  return (
    <div>
      <h1>Listings</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {filteredData.map((item) => (
        <div key={item.id}>
          <h2 style={{ color: 'black' }}>{item.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Listings;
