
import React from 'react'
import { getAllItems } from '../../lib/api'
import ItemCard from './DinoCard'

function DinoIndex() {
  const [items, setItems] = React.useState(null)
  

  React.useEffect(() => {
    console.log('Dino Index has mounted')
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

  // ---- SEARCH FUNCTIONS ---- //



  //const handleInput = (e) => {
  //setSearchTerm(e.target.value)
  //}

  //console.log('searchTerm', searchTerm)

  //const filteredItems = items?.filter((item) => {
  //return (item.region === selectValue || selectValue === 'All') &&
  //item.name.toLowerCase().includes(searchTerm)
  //})

  //console.log('filteredItems', filteredItems)

  // -------------------------- //
  const dinoFilteredItems = items?.filter(
    (item) => {
      return (
        item.type.includes('Dinosaur')
      )
    }
  )

  return (
    <section>


      <section className="section">
        <div className="container">
          <div className="columns">

            <p className="column is-full has-text-centered"><h1 className="is-size-3">Dinosaurs</h1><hr />Thanks to several technological breakthroughs and one or two ethically questionable experiments, dinosaurs are now available to take home and domesticate! Browse through our exclusive Dinosaur PetShop&copy; roster and find the scaly companion for you.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container is-fluid">
          <div className="columns is-multiline">
            {dinoFilteredItems ? (
              dinoFilteredItems.map(item => <div className="column is-one-third" key={item.id}><ItemCard  {...item} /></div>)
            ) : (
              <p>...loading</p>
            )}
          </div>
        </div>
      </section>

    </section>
  )

}

export default DinoIndex