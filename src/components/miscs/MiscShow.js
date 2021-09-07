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
    history.push('/Basket')
  }

  return (
    <>
      {item ? (
        <section className="">
          <div className="">
            <div className="hero"></div>
            <div className="hero-body"></div>
            <div className="columns is-centered">
              <div className="column is-5 box">
                <img src={item.image}></img>
              </div>
              <div className="column is-4">
                
                <div>
                  <div><div className="is-size-3">{item.name}</div>{item.size} Sized {item.type}<div className="is-pulled-right">${item.price}</div></div>
                  <hr />
                  <p>{item.description}</p>
                  <button className="is-pulled-right" type="submit" value="id" onClick={handleClick}>Add Item to Basket</button>
                </div>
                <hr/>
                <div>Comments</div>
                <div className="is-pulled-right">
                  <Comments />
                </div>
                
              </div>
            </div>
          </div>


        </section>
      ) : (
        <p className="is-centered">...loading</p>
      )}
    </>
  )

}

export default MiscShow