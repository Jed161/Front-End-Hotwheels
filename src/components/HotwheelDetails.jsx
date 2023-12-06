import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL

function HotwheelDetails() {
  const [hotwheel, setHotwheel] = useState([]);
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`${API}/hotwheels/${id}`)
    .then((response) => response.json())
    .then((responseJSON) => {
      setHotwheel(responseJSON)
    })
    .catch(error => console.log(error))
  }, [id, API])

  const handleDelete = () => {
    deleteHotwheel()
  }

  const deleteHotwheel = () => {
    const httpOptions = { method: "DELETE" }
    fetch(`${API}/hotwheels/${id}`, httpOptions)
    .then(() => navigate(`/hotwheels`))
    .catch(error => console.log(error))
  }
  return (
    <article>
      <h3>{true ? <span>⭐️</span> : null}</h3>
      <h5>
        <span>
          <a href={hotwheel.img_url}>{hotwheel.name}</a>
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp; {hotwheel.img_url}
      </h5>
      <h6>{hotwheel.category}</h6>
      <p>{hotwheel.description}</p>
      <div className="showNavigation">
        <div>
          <Link to={`/hoywheels`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/hotwheels/${id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </article>
  );
}

export default HotwheelDetails;