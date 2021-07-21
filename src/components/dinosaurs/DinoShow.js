import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { getSingleDino } from '../../lib/api'

function DinoShow() {
  let basketItemArray = []
  const history = useHistory()
  const [dino, setDino] = React.useState(null)
  const { id } = useParams()

  React.useEffect(() => {
    console.log('Dino show is mounted.')
    const getData = async () => {
      try {
        const { data } = await getSingleDino(id)
        setDino(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [id])

  const handleClick = (e) => {
    console.log(e.target.value)
    const basketItem = JSON.parse(window.localStorage.getItem('dinos')) || []
    console.log(dino)
    basketItemArray = [...basketItemArray, dino]
    basketItem.push(dino)
    localStorage.setItem('dinos', JSON.stringify(basketItem))
    console.log(basketItemArray)
    history.push('/dinosaurs')
  }

  return (
    <section>
      <div className="container">
        <div className="columns is-vcentered">

          {dino ? (
            <section className="section">
              <div className="column is-8">
                <h2>{dino.name} | {dino.size} {dino.type} <h2 className="is-pulled-right">${dino.price}</h2></h2>
                <hr/>
                <div>
                </div>
                <div>
                  <p>{dino.description}</p>
                </div>
              </div>
              <div className="column is-8">
                <img src={dino.image} alt={dino.name} />
              </div>
              <button type="submit" value="id" onClick={handleClick}>Add to Basket</button>
              
            </section>
          ) : (
            <p>...loading</p>
          )}
        </div>
      </div>

    </section>
  )

}

export default DinoShow