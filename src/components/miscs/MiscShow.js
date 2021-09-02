import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { getSingleItem } from '../../lib/api'
import Comments from './MiscComment'


function MiscShow() {
  let basketItemArray = []
  const history = useHistory()
  const [item, setItem] = React.useState(null)
  const { id } = useParams()

  React.useEffect(() => {
    console.log('Misc show page is mounted.')
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
    const basketItem = JSON.parse(window.localStorage.getItem('items')) || []
    console.log(item)
    basketItemArray = [...basketItemArray, item]
    basketItem.push(item)
    localStorage.setItem('items', JSON.stringify(basketItem))
    console.log(basketItemArray)
    history.push('/')
  }

  return (
    <section>
      <div className="container">
        <div className="columns is-vcentered">

          {item ? (
            <section className="section">
              <div className="column is-8">
                <h2>{item.name} | {item.size} <h2 className="is-pulled-right">${item.price}</h2></h2>
                <hr/>
                <p>{item.description}</p>
                <div className="column is-8">
                  <img src={item.image}></img>
                </div>
                <button type="sumbit" value="id" onClick={handleClick}>Add Item to Basket</button>
                <hr/>
                <Comments />
              </div>
            </section>
          ) : (
            <p>...loading show</p>
          )}
        </div>
      </div>
    </section>
  )

}

export default MiscShow