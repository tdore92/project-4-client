import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { getSingleItem } from '../../lib/api'

function DinoShow() {
  let basketItemArray = []
  const history = useHistory()
  const [item, setItem] = React.useState(null)
  const { id } = useParams()

  React.useEffect(() => {
    console.log('Dino show is mounted.')
    const getData = async () => {
      try {
        const { data } = await getSingleItem(id)
        setItem(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [id])

  const handleClick = (e) => {
    console.log(e.target.value)
    const basketItem = JSON.parse(window.localStorage.getItem('dinos')) || []
    console.log(item)
    basketItemArray = [...basketItemArray, item]
    basketItem.push(item)
    localStorage.setItem('items', JSON.stringify(basketItem))
    console.log(basketItemArray, 'basket')
    history.push('/')
  }

  return (
    <section>
      <div className="container">
        <div className="columns is-vcentered">

          {item ? (
            <section className="section">
              <div className="column is-8">
                <h2>{item.name} | {item.size} {item.type} <h2 className="is-pulled-right">${item.price}</h2></h2>
                <hr/>
                <div>
                </div>
                <div>
                  <p>{item.description}</p>
                </div>
              </div>
              <div className="column is-8">
                <img src={item.image} alt={item.name} />
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