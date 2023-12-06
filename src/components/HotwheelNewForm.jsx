import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

function HotwheelNewForm() {
  const navigate = useNavigate();

  const [hotwheel, setHotwheel] = useState({
    name: "",
    img_url: "",
    category: "",
    year: "",
    engine: "",
    description: "",
    is_favorite: false,
  });

  // Add hotwheel. Redirect to the index view.

  const addHotwheel = () => {
    fetch(`${API}/bookmarks`, {
      method: "POST",
      body: JSON.stringify(hotwheel),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        navigate(`/hotwheels`);
      })
      .catch((error) => console.error("catch", error));
  };

  const handleTextChange = (event) => {
    setHotwheel({ ...hotwheel, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    sethotwheel({ ...hotwheel, is_favorite: !hotwheel.is_favorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addHotwheel();
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={hotwheel.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Car"
          required
        />
        <label htmlFor="img_url">URL:</label>
        <input
          id="img_url"
          type="text"
          pattern="http[s]*://.+"
          required
          value={hotwheel.img_url}
          placeholder="http://"
          onChange={handleTextChange}
        />
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          type="text"
          name="category"
          value={hotwheel.category}
          placeholder="speed, economical, ..."
          onChange={handleTextChange}
        />

        <label htmlFor="year">Year:</label>
        <input
          id="year"
          type="text"
          name="year"
          value={hotwheel.year}
          placeholder="1234"
          onChange={handleTextChange}
          />

        <label htmlFor="engine">Engine:</label>
        <input
          id="engine"
          type="text"
          name="engine"
          value={hotwheel.engine}
          placeholder="engine type"
          onChange={handleTextChange}
          />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={hotwheel.description}
          onChange={handleTextChange}
          placeholder="Describe the car"
        />
        
        <label htmlFor="isFavorite">Favorite:</label>
        <input
          id="isFavorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={hotwheel.is_favorite}
        />

        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default HotwheelNewForm;