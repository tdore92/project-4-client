
import React from 'react'
import { getAllDinos } from '../../lib/api'

import DinoCard from './DinoCard'

function DinoIndex() {
  const [dinos, setDinos] = React.useState(null)
  const [selectValue] = React.useState('All')
  const [searchTerm, setSearchTerm] = React.useState('')

  React.useEffect(() => {
    console.log('Dino Index has mounted')
    const getData = async () => {
      try {
        const { data } = await getAllDinos()
        setDinos(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  // ---- SEARCH FUNCTIONS ---- //



  const handleInput = (e) => {
    setSearchTerm(e.target.value)
  }

  console.log('searchTerm', searchTerm)

  const filteredDinos = dinos?.filter((dino) => {
    return (dino.region === selectValue || selectValue === 'All') &&
      dino.name.toLowerCase().includes(searchTerm)
  })

  console.log('filteredDinos', filteredDinos)

  // -------------------------- //
  return (
    <section>
      

      <section className="section">
        <div className="container">
          <div className="columns">
            
            <p className="column is-full has-text-centered"><h1 className="is-size-3">Dinosaurs</h1><hr/>Thanks to several technological breakthroughs and one or two ethically questionable experiments, dinosaurs are now available to take home and domesticate! Browse through our exclusive Dinosaur PetShop&copy; roster and find the scaly companion for you.</p>
          </div>
        </div>
      </section>
      <div>
        <section className="container is-fluid">
          <div>
            <input className="column is-half is-offset-one-quarter" placeholder="Search for a Dinosaur..." onChange={handleInput} value={searchTerm} />
          </div>
        </section>
      </div>
      <section className="section">
        <div className="container is-fluid">
          <div className="columns is-multiline">
            {filteredDinos ? (
              filteredDinos.map(dino => <div className="column is-one-third" key={dino.id}><DinoCard  {...dino} /></div>)
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