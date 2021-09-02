import React from 'react'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { createDino } from '../../lib/api'

function DinoNew() {
  const history = useHistory()

  const { formdata, handleChange } = useForm({
    name: '',
    type: '',
    diet: '',
    size: '',
    description: '',
    price: '',
    image: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await createDino(formdata)
      history.push('/dinosaurs')
      console.log(res)
    } catch (err) {
      console.log(err.response.data)
    }
  }

  console.log('formdata', formdata)

  return (

    <section className="section">
      <div className="container box">
        
        <div className="columns">
          
          <div>
            <p className="column is-full has-text-centered">&quot;Dinosaur PetShop&copy; is committed to finding previously owned saurians a new home. Should you own a dinosaur you wish to part from, fill in the details below to post an advertisement on our site. We welcome all sizes, types and danger levels of dinosaur. If it&apos;s a cat, don&apos;t post it. We don&apos;t do cats.&quot; -Richard Owen, 1920</p>
          </div>
        </div>
      </div>
      <div className="container box">
        <div className="columns">
          <form className="column is-half is-offset-one-quarter" onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input className="input" placeholder="Name" onChange={handleChange} name="name" />
              </div>
            </div>
            <div className="field">
              <label className="label">Product Type</label>
              <select className="input" placeholder="Dinosaur, Food or Toy?" onChange={handleChange} name="type">
                <option>Dinosaur</option>
                <option>Food</option>
                <option>Toy</option>
              </select>
            </div>
            <div className="field">
              <label className="label">Diet</label>
              <select className="input" placeholder="Dinosaur, Food or Toy?" onChange={handleChange} name="diet">
                <option>Carnivore</option>
                <option>Herbivore</option>
                <option>Piscivore</option>
              </select>
            </div>
            <div className="field">
              <label className="label">Size</label>
              <select className="input" placeholder="Is your product small, medium or large?" onChange={handleChange} name="size">
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
            </div>
            <div className="field">
              <label className="label">Description</label>
              <textarea className="textarea" placeholder="Describe your dinosaur's personality, eating habits, etc!"
                onChange={handleChange} name="description" />
            </div>
            <div className="field">
              <label className="label">Post a Photo!</label>
              <textarea className="textarea" placeholder="Copy your URL into here!" onChange={handleChange} name="image" />
            </div>
            <div className="field">
              <label className="label">Price</label>
              <input className="input" placeholder="Price" onChange={handleChange} name="price" />
            </div>
            <div className="field">
              <p><small></small></p>
              <button className="is-centered" type="submit">Post your Ad</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default DinoNew