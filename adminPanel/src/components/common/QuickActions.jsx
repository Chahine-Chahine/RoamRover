import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createAnnouncement,
  deleteAnnouncement,
  updateAnnouncement,
} from "../../core/redux/actions/announcementActions";
import {
  createLocation,
  updateLocation,
  deleteLocation,
} from "../../core/redux/actions/locationActions";
import "../../pages/Dashboard/DashboardPage.css";
import Modal from "./Modal";

const QuickActions = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [announcementData, setAnnouncementData] = useState({ body: "" });
  const [announcementIdToDelete, setAnnouncementIdToDelete] = useState("");
  const [announcementIdToUpdate, setAnnouncementIdToUpdate] = useState("");
  const [updatedAnnouncementBody, setUpdatedAnnouncementBody] = useState("");
  const [isCreateLocationModalOpen, setIsCreateLocationModalOpen] =
    useState(false);
  const [locationData, setLocationData] = useState({
    image: "",
    description: "",
    estimated_price: "",
    title: "",
    area: "",
    rating: "",
    coordinates: { latitude: "", longitude: "" },
    est_time_spend: "",
    tags: "",
    category_ids: [],
  });
  const [isDeletePlaceModalOpen, setIsDeletePlaceModalOpen] = useState(false);
  const [isEditPlaceModalOpen, setIsEditPlaceModalOpen] = useState(false);
  const [placeIdToDelete, setPlaceIdToDelete] = useState("");
  const [placeIdToEdit, setPlaceIdToEdit] = useState("");

  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setAnnouncementData({
      ...announcementData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateAnnouncement = (e) => {
    e.preventDefault();
    dispatch(
      createAnnouncement({ announcement_body: announcementData.body }, token)
    );
    setIsCreateModalOpen(false);
  };

  const handleDeleteAnnouncement = (e) => {
    e.preventDefault();
    dispatch(deleteAnnouncement(announcementIdToDelete, token));
    setIsDeleteModalOpen(false);
  };

  const handleUpdateAnnouncement = (e) => {
    e.preventDefault();
    dispatch(
      updateAnnouncement(
        announcementIdToUpdate,
        { announcement_body: updatedAnnouncementBody },
        token
      )
    );
    setIsUpdateModalOpen(false);
  };
  const handleLocationInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "category_ids") {
      setLocationData({ ...locationData, [name]: [...value] });
    } else if (name.startsWith("coordinates.")) {
      const coordField = name.split(".")[1];
      setLocationData((prevState) => ({
        ...prevState,
        coordinates: {
          ...prevState.coordinates,
          [coordField]: value,
        },
      }));
    } else {
      setLocationData({ ...locationData, [name]: value });
    }
  };

  const handleCreateLocation = (e) => {
    e.preventDefault();
    const payload = {
      ...locationData,
      id: Number(locationData.id),
      estimated_price: Number(locationData.estimated_price),
      category_ids: locationData.category_ids.map(Number),
      tags: locationData.tags.split(",").map((tag) => tag.trim()),
      latitude: Number(locationData.coordinates.latitude),
      longitude: Number(locationData.coordinates.longitude),
    };
    dispatch(createLocation(payload, token));
    setIsCreateLocationModalOpen(false);
  };

  const handleDeleteLocation = (e) => {
    e.preventDefault();
    dispatch(deleteLocation(placeIdToDelete, token));
    setIsDeletePlaceModalOpen(false);
  };

  const handleEditLocation = (e) => {
    e.preventDefault();
    dispatch(updateLocation(placeIdToEdit, locationData, token));
    setIsEditPlaceModalOpen(false);
  };

  return (
    <div className="quick-actions">
      <h2>Quick Actions</h2>

      <div className="section">
        <h3>Announcements</h3>
        <div className="actions">
          <button
            className="action-button green"
            onClick={() => setIsCreateModalOpen(true)}
          >
            Create Announcement
          </button>
          <button
            className="action-button red"
            onClick={() => setIsDeleteModalOpen(true)}
          >
            Delete Announcement
          </button>
          <button
            className="action-button yellow"
            onClick={() => setIsUpdateModalOpen(true)}
          >
            Edit Announcement
          </button>
        </div>
      </div>

      <div className="section">
        <h3>Locations</h3>
        <div className="actions">
          <button
            className="action-button green"
            onClick={() => setIsCreateLocationModalOpen(true)}
          >
            Add a Location
          </button>
          <button
            className="action-button red"
            onClick={() => setIsDeletePlaceModalOpen(true)}
          >
            Delete a Location
          </button>
          <button
            className="action-button yellow"
            onClick={() => setIsEditPlaceModalOpen(true)}
          >
            Edit a Location
          </button>
        </div>
      </div>

      {/* Create Announcement Modal */}
      <Modal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        title="Create Announcement"
      >
        <form onSubmit={handleCreateAnnouncement}>
          <input
            type="text"
            name="body"
            value={announcementData.body}
            onChange={handleInputChange}
            placeholder="Announcement Body"
          />
          <button type="submit">Submit</button>
        </form>
      </Modal>

      {/* Delete Announcement Modal */}
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        title="Delete Announcement"
      >
        <form onSubmit={handleDeleteAnnouncement}>
          <input
            type="text"
            value={announcementIdToDelete}
            onChange={(e) => setAnnouncementIdToDelete(e.target.value)}
            placeholder="Announcement ID to delete"
          />
          <button type="submit">Delete</button>
        </form>
      </Modal>

      {/* Update Announcement Modal */}
      <Modal
        isOpen={isUpdateModalOpen}
        onClose={() => setIsUpdateModalOpen(false)}
        title="Edit Announcement"
      >
        <form onSubmit={handleUpdateAnnouncement}>
          <input
            type="text"
            value={announcementIdToUpdate}
            onChange={(e) => setAnnouncementIdToUpdate(e.target.value)}
            placeholder="Announcement ID to update"
          />
          <input
            type="text"
            value={updatedAnnouncementBody}
            onChange={(e) => setUpdatedAnnouncementBody(e.target.value)}
            placeholder="New Announcement Body"
          />
          <button type="submit">Update</button>
        </form>
      </Modal>

      {/* Modal for Creating a Location */}
      <Modal
        isOpen={isCreateLocationModalOpen}
        onClose={() => setIsCreateLocationModalOpen(false)}
        title="Add a Place"
      >
        <form onSubmit={handleCreateLocation}>
          <input
            type="text"
            name="title"
            value={locationData.title}
            onChange={handleLocationInputChange}
            placeholder="Title"
          />
          <input
            type="text"
            name="description"
            value={locationData.description}
            onChange={handleLocationInputChange}
            placeholder="Description"
          />
          <input
            type="text"
            name="image"
            value={locationData.image}
            onChange={handleLocationInputChange}
            placeholder="Image URL"
          />
          <input
            type="number"
            name="estimated_price"
            value={locationData.estimated_price}
            onChange={handleLocationInputChange}
            placeholder="Estimated Price"
          />
          <input
            type="text"
            name="area"
            value={locationData.area}
            onChange={handleLocationInputChange}
            placeholder="Area"
          />
          <input
            type="number"
            name="rating"
            value={locationData.rating}
            onChange={handleLocationInputChange}
            placeholder="Rating"
          />
          <input
            type="number"
            name="coordinates.latitude"
            value={locationData.coordinates.latitude}
            onChange={handleLocationInputChange}
            placeholder="Latitude"
          />
          <input
            type="number"
            name="coordinates.longitude"
            value={locationData.coordinates.longitude}
            onChange={handleLocationInputChange}
            placeholder="Longitude"
          />
          <input
            type="number"
            name="est_time_spend"
            value={locationData.est_time_spend}
            onChange={handleLocationInputChange}
            placeholder="Estimated Time to Spend"
          />
          <select
            name="category_ids"
            value={locationData.category_ids}
            onChange={handleLocationInputChange}
            multiple
          >
            <option value="1">Beach</option>
            <option value="2">Hiking</option>
            <option value="3">Restaurants</option>
            <option value="4">Ruins</option>
          </select>

          {/* Input for tags */}
          <input
            type="text"
            name="tags"
            value={locationData.tags}
            onChange={handleLocationInputChange}
            placeholder="Tags (comma-separated)"
          />

          <button type="submit">Add</button>
        </form>
      </Modal>

      {/* Modal for Deleting a Location */}
      <Modal
        isOpen={isDeletePlaceModalOpen}
        onClose={() => setIsDeletePlaceModalOpen(false)}
        title="Delete a Location"
      >
        <form onSubmit={handleDeleteLocation}>
          <input
            type="text"
            value={placeIdToDelete}
            onChange={(e) => setPlaceIdToDelete(e.target.value)}
            placeholder="Location ID to delete"
          />
          <button type="submit">Delete Location</button>
        </form>
      </Modal>

      <Modal
        isOpen={isEditPlaceModalOpen}
        onClose={() => setIsEditPlaceModalOpen(false)}
        title="Edit a Place"
      >
        <form onSubmit={handleEditLocation}>
          <input
            type="number"
            value={placeIdToEdit}
            onChange={(e) => setPlaceIdToEdit(e.target.value)}
            placeholder="Place ID to edit"
          />

          {/* Form fields for editing location attributes */}
          <input
            type="text"
            name="title"
            value={locationData.title}
            onChange={handleLocationInputChange}
            placeholder="Title"
          />
          <input
            type="text"
            name="description"
            value={locationData.description}
            onChange={handleLocationInputChange}
            placeholder="Description"
          />
          <input
            type="text"
            name="image"
            value={locationData.image}
            onChange={handleLocationInputChange}
            placeholder="Image URL"
          />
          <input
            type="number"
            name="estimated_price"
            value={locationData.estimated_price}
            onChange={handleLocationInputChange}
            placeholder="Estimated Price"
          />
          <input
            type="text"
            name="area"
            value={locationData.area}
            onChange={handleLocationInputChange}
            placeholder="Area"
          />
          <input
            type="number"
            name="rating"
            value={locationData.rating}
            onChange={handleLocationInputChange}
            placeholder="Rating"
          />
          <input
            type="number"
            name="coordinates.latitude"
            value={locationData.coordinates.latitude}
            onChange={handleLocationInputChange}
            placeholder="Latitude"
          />
          <input
            type="number"
            name="coordinates.longitude"
            value={locationData.coordinates.longitude}
            onChange={handleLocationInputChange}
            placeholder="Longitude"
          />
          <input
            type="number"
            name="est_time_spend"
            value={locationData.est_time_spend}
            onChange={handleLocationInputChange}
            placeholder="Estimated Time to Spend"
          />
          <input
            type="text"
            name="tags"
            value={locationData.tags}
            onChange={handleLocationInputChange}
            placeholder="Tags (comma-separated)"
          />
          <select
            name="category_ids"
            value={locationData.category_ids}
            onChange={handleLocationInputChange}
            multiple
          >
            <option value="1">Beach</option>
            <option value="2">Hiking</option>
            <option value="3">Restaurants</option>
            <option value="4">Ruins</option>
          </select>

          <button type="submit">Update Place</button>
        </form>
      </Modal>
    </div>
  );
};

export default QuickActions;
