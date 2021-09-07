import React from 'react'
import { getAllItems } from '../../lib/api'

import MiscCard from './MiscCard'


function ItemIndex() {
  const [items, setItems] = React.useState(null)
  //const [selectValue] = React.useState('All')
  //const [searchTerm, setSearchTerm] = React.useState('')

  React.useEffect(() => {
    console.log('Item Index has mounted')
    const getData = async () => {
      try {
        const { data } = await getAllItems()
        setItems(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])



  //const handleInput = (e) => {
  //setSearchTerm(e.target.value)
  //}

  //const filteredItems = items?.filter((item) => {
  //return (item.region === selectValue || selectValue === 'All') &&
  //item.name.toLowerCase().includes(searchTerm)
  //})

  //console.log(filteredItems)

  const miscFilteredItems = items?.filter(
    (item) => {
      return (
        item.type.toLowerCase().includes('food') ||
        item.type.toLowerCase().includes('toy')
      )
    }
  )


  return (
    <section>
      <div className="hero hero-image-misc">
        <img className="hero-body" src="https://i.imgur.com/NGn013s.jpg" alt="dino-riding"></img>
      </div>

      <section className="section">
        <div className="container">
          <div className="columns">

            <p className="column is-full has-text-centered"><h1 className="is-size-1">Food and Toys</h1><hr />Make no mistake, a dinosaur is a lot of work. Thankfully, Dinosaur PetShop&copy; is here to supply their customers with all the food and entertainment these frankly terrifying creatures could want. Our products cater to every size and species of dinosaur currently available on the market. </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container is-fluid">
          <div className="columns is-multiline">
            {miscFilteredItems ? (
              miscFilteredItems.map(item => <div className="column is-one-third" key={item.id}><MiscCard {...item} /></div>)
            ) : (
              <p className="is-centered">...loading</p>
            )}
          </div>
        </div>
      </section>
    </section>

  )
}

export default ItemIndex