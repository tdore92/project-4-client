import { Link } from 'react-router-dom'

function DinoCard({ id, name, size, type, image }) {
  return (

    <div className="column box is-15">
      <Link to={`/dinosaurs/${id}`}>
        <div className="column ">
          <div className="">
            <div className="has-text-black is-size-5">{name}</div>
            <div className="">
              <div className="has-text-black">{size} {type}</div>
            </div>
          </div>
          <div className="">
            <figure className="image is-square is-4by4">
              <img className="" src={image} alt={name} />
            </figure>
          </div>
        </div>
      </Link>

    </div>

  )

}

export default DinoCard