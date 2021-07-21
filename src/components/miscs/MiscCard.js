import { Link } from 'react-router-dom'

function MiscCard({ id, name, misctype, image }) {
  return (
    <div className="column box is-15">
      <Link to={`/miscs/${id}`}>
        <div className="column">
          <div className="has-text-black is-size-5">{name}</div>
          <div className="has-text-black">{misctype}</div>
          <figure className="image is-square is-4by4">
            <img src={image} alt={name} />
          </figure>
        </div>
      </Link>
    </div>
  )

}

export default MiscCard