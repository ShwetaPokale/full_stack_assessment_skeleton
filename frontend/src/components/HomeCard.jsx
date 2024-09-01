import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import EditUserModal from '../components/EditUserModal';
import { useFetchUsersForHomeQuery } from '../api';

const HomeCard = ({ home }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: usersForHome = [], isLoading, isError } = useFetchUsersForHomeQuery(home.street_address, {
    skip: !isModalOpen,
  });

  const homes = useSelector((state) => state.homes.homes);
  const homeFromRedux = homes.find(h => h.street_address === home.street_address);

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  if (isLoading) return <p className="text-center text-gray-500">Loading...</p>;
  if (isError) return <p className="text-center text-red-500">Error fetching users for home.</p>;

  return (
    <div className="border border-gray-300 rounded-lg shadow-md bg-white p-4 transition-shadow duration-300 hover:shadow-lg">
      <h2 className="text-lg font-semibold mb-2">{homeFromRedux?.street_address || 'Address Not Available'}</h2>
      <div className="mb-4">
        <p><strong>State:</strong> {homeFromRedux?.state || 'N/A'}</p>
        <p><strong>Zip Code:</strong> {homeFromRedux?.zip || 'N/A'}</p>
        <p><strong>Square Footage:</strong> {homeFromRedux?.sqft || 'N/A'}</p>
        <p><strong>Bedrooms:</strong> {homeFromRedux?.beds || 'N/A'}</p>
        <p><strong>Bathrooms:</strong> {homeFromRedux?.baths || 'N/A'}</p>
        <p><strong>List Price:</strong> ${homeFromRedux?.list_price || 'N/A'}</p>
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
