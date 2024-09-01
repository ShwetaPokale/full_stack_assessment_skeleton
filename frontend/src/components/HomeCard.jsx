import React, { useState } from 'react';
import EditUserModal from '../components/EditUserModal';
import { fetchUsersForHome } from '../api';

const HomeCard = ({ home }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [usersForHome, setUsersForHome] = useState([]);

  const handleEditClick = async () => {
    try {
      const data = await fetchUsersForHome(home.street_address);
      setUsersForHome(data.users);
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error fetching users for home:', error);
    }
  };

  return (
    <div className="p-4 border rounded shadow bg-white">
      <h2 className="text-lg font-bold mb-2">{home.street_address}</h2>
      <div className="mb-4">
        <p><strong>State:</strong> {home.state || 'N/A'}</p>
        <p><strong>Zip Code:</strong> {home.zip || 'N/A'}</p>
        <p><strong>Square Footage:</strong> {home.sqft || 'N/A'}</p>
        <p><strong>Bedrooms:</strong> {home.beds || 'N/A'}</p>
        <p><strong>Bathrooms:</strong> {home.baths || 'N/A'}</p>
        <p><strong>List Price:</strong> ${home.list_price || 'N/A'}</p>
      </div>
      <button
        onClick={handleEditClick}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
      >
        Edit Users
      </button>
      {isModalOpen && (
        <EditUserModal
          home={home}
          usersForHome={usersForHome}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default HomeCard;
