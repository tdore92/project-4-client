import { Link } from 'react-router-dom'

function MiscCard({ id, name, type, image }) {
  return (
    <div className="column box is-15">
      <Link to={`/items/${id}`}>
        <div className="column">
          <div className="has-text-black is-size-5">{name}</div>
          <div className="has-text-black">{type}</div>
          <figure className="image is-square is-4by4">
            <img src={image} alt={name} />
          </figure>
        </div>
      </Link>
    </div>
  )

}

export default MiscCard