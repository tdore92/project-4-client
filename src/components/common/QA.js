import React from 'react'
import { getAllItems } from '../../lib/api'

function QA() {
  const [items, setItems] = React.useState(null)

  let userSelection = []
  let answersQ1 = []
  let answersQ2 = []

  // request the data after the page loads

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

  // filter requested data

  let qaFilteredItems = items?.filter(
    (item) => {
      return (
        item.type.includes('Dinosaur')
      )
    }
  )

  // user selection is stored

  const handleClickQ1 = (e) => {
    userSelection = e.target.value
    displayQ1()
  }

  // filter dino results based on stored target value

  const displayQ1 = (answersQ1) => {

    if (userSelection === 'None') {
      console.log('User selected None')
      qaFilteredItems = items?.filter(
        (item) => {
          return (
            item.type.includes('Dinosaur')
          )
        }
      )
      console.log(qaFilteredItems)
      answersQ1 = [...qaFilteredItems]
      console.log(answersQ1)
    } else if (userSelection === 'More than 1') {
      console.log('User selected More Than One')
      qaFilteredItems = items?.filter(
        (item) => {
          if (item.type === 'Dinosaur' && item.diet === 'Herbivore') {
            return (
              item.diet.includes('Herbivore')
            )
          }
        }
      )
      console.log(qaFilteredItems)
      answersQ1 = [...qaFilteredItems]
      console.log(answersQ1)
    } else {
      console.log('No answer selected')
    }
  }

  const handleClickQ2 = (e) => {
    userSelection = e.target.value
    displayQ2()
  }

  const displayQ2 = () => {
    if (userSelection === 'Apartment') {
      console.log('user selected Apartment')
      answersQ1 = items?.filter(
        (item) => {
          if (item.type === 'Dinosaur' && item.size === 'Small') {
            return (
              item.size.includes('Small')
            )
            
          }
        }
      )
      console.log(qaFilteredItems)
    }
  }


  return (
    <>
      <div>
        {/*Q1*/}
        <div>How many children do you have?</div>
        <select onChange={handleClickQ1}>
          <option></option>
          <option>None</option>
          <option>More than 1</option>
        </select>
      </div>

      <div>
        {/*Q2*/}
        <div>Please tell us what kind of living space you reside in.</div>
        <select onChange={handleClickQ2}>
          <option></option>
          <option>Apartment</option>
          <option>Semi-Detached</option>
          <option>Mansion</option>
        </select>
      </div>

      <div>
        {qaFilteredItems ? (
          qaFilteredItems.map(item => <div key={item.id}>
            <div>{item.name}</div>
            <div>{item.size} {item.type}</div>
          </div>)
        ) : (
          <p>...loading</p>
        )}
      </div>
    </>
  )
}

export default QA
