import React from 'react'
import useForm from '../../hooks/useForm'
import { registerUser } from '../../lib/api'
import { useHistory, Link } from 'react-router-dom'

function Register() {
  const history = useHistory()
  const { formdata, formErrors, handleChange, setFormErrors } = useForm({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    profileImage: '',
  })

  console.log('formdata', formdata)

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      await registerUser(formdata)
      history.push('/Login')
      console.log('Registration successful!')
    } catch (err) {
      setFormErrors(err.response.data)
      console.log(err.response.data)
    }
  }

  return (
    <div className="section">
      <section className="section">
        <div>
          <p className="has-text-centered">Create an account with Dinosaur PetShop&copy; to access the exclusive ability to post ads for any dinosaurs or related items you wish to sell!</p>
        </div>
      </section>
      <div className="container">
        <div className="columns">
          <form className="column is-offset-one-quarter" onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input
                  placeholder="Username"
                  onChange={handleChange}
                  name="username"
                  value={formdata.username} />
              </div>
              {formErrors.username && <p className='help is-danger'>Username is required!</p>}
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  placeholder="Email"
                  onChange={handleChange}
                  name="email"
                  value={formdata.email} />
              </div>
              {formErrors.email && <p className='help is-danger'>Email is required!</p>}
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  placeholder="Password"
                  onChange={handleChange}
                  name="password"
                  type="password"
                  value={formdata.password} />
              </div>
              {formErrors.password && <p className='help is-danger'>Password is too short!</p>}
            </div>
            <div className="field">
              <label className="label">Password Confirmation</label>
              <div className="control">
                <input
                  placeholder="Confirm your password"
                  onChange={handleChange}
                  name="passwordConfirmation"
                  type="password"
                  value={formdata.passwordConfirmation} />
              </div>
              {formErrors.passwordConfirmation && <p className='help is-danger'>Does not match password!</p>}
            </div>
            <div className="field">
              <label className="label">Profile Image</label>
              <div className="control">
                <select className="control" placeholder="Is your product small, medium or large?" onChange={handleChange} name="profileImage" value={formdata.profileImage}>
                  <option>T-Rex</option>
                  <option>Triceratops</option>
                  <option>Pteranodon</option>
                </select>
              </div>
              {formErrors.profileImage && <p className='help is-danger'>Select a profile image!</p>}
            </div>
            <div>
              <button type="submit">Register</button>
            </div>
          </form>
          <div className="column is-half">
            <img src="https://i.imgur.com/ok6gYfY.png" alt="cartoon-dino" />
          </div>
        </div>
      </div>
      <div className="section">
        <div className="has-text-centered">
          <p>Already have an account?<Link to="/Login"> Log In</Link></p>
        </div>

      </div>
    </div>
  )

}

export default Register