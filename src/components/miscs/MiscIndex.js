import React from 'react'
import { getAllMiscs } from '../../lib/api'

import MiscCard from './MiscCard'


function MiscIndex() {
  const [miscs, setMiscs] = React.useState(null)
  const [selectValue] = React.useState('All')
  const [searchTerm, setSearchTerm] = React.useState('')

  React.useEffect(() => {
    console.log('Misc Index has mounted')
    const getData = async () => {
      try {
        const { data } = await getAllMiscs()
        setMiscs(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  

  const handleInput = (e) => {
    setSearchTerm(e.target.value)
  }

  const filteredMiscs = miscs?.filter((misc) => {
    return (misc.region === selectValue || selectValue === 'All') &&
      misc.name.toLowerCase().includes(searchTerm)
  })


  return (
    <section>
      <section className="section">
        <div className="container">
          <div className="columns">
            
            <p className="column is-full has-text-centered"><h1 className="is-size-3">Food and Toys</h1><hr/>Make no mistake, a dinosaur is a lot of work. Thankfully, Dinosaur PetShop&copy; is here to supply their customers with all the food and entertainment these frankly terrifying creatures could want. Our products cater to every size and species of dinosaur currently available on the market. </p>
          </div>
        </div>
      </section>
      <div>
        <section className="container is-fluid">
          <div>
            <input className="column is-half is-offset-one-quarter" placeholder="Search for Food and Toys..." onChange={handleInput} value={searchTerm} />
          </div>
        </section>
      </div>
      <section className="section">
        <div className="container is-fluid">
          <div className="columns is-multiline">
            {filteredMiscs ? (
              filteredMiscs.map(misc => <div className="column is-one-third" key={misc.id}><MiscCard {...misc} /></div>)
            ) : (
              <p>...loading</p>
            )}
          </div>
        </div>
      </section>
    </section>

  )
}

export default MiscIndex