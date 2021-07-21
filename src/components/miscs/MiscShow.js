import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { getSingleMisc } from '../../lib/api'
import Comments from './MiscComment'


function MiscShow() {
  let basketItemArray = []
  const history = useHistory()
  const [misc, setMisc] = React.useState(null)
  const { id } = useParams()

  React.useEffect(() => {
    console.log('Mounted show page')
    const getData = async () => {
      try {
        const { data } = await getSingleMisc(id)
        setMisc(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [id])

  const handleClick = (e) => {
    console.log(e.target.value)
    const basketItemMisc = JSON.parse(window.localStorage.getItem('miscs')) || []
    console.log(misc)
    basketItemArray = [...basketItemArray, misc]
    basketItemMisc.push(misc)
    localStorage.setItem('miscs', JSON.stringify(basketItemMisc))
    console.log(basketItemArray)
    history.push('/miscs')
  }

  return (
    <section>
      <div className="container">
        <div className="columns is-vcentered">

          {misc ? (
            <section className="section">
              <div className="column is-8">
                <h2>{misc.name} | {misc.misctype} <h2 className="is-pulled-right">${misc.price}</h2></h2>
                <hr/>
                <p>{misc.description}</p>
                <div className="column is-8">
                  <img src={misc.image}></img>
                </div>
                <button type="sumbit" value="id" onClick={handleClick}>Add to Basket</button>
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