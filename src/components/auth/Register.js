import React from 'react'
import useForm from '../../hooks/useForm'
import { registerUser } from '../../lib/api'
import { useHistory, Link } from 'react-router-dom'

function Register() {
  const history = useHistory()
  const { formdata, handleChange } = useForm({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      await registerUser(formdata)
      history.push('/login')
    } catch (err) {
      console.log(err.response.data)
    }
  }

  return (
    <section className="section">
      <div className="container box">
        <div className="columns">
          <form className="column is-half is-offset-one-quarter" onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input
                  placeholder="Username"
                  onChange={handleChange}
                  name="username"
                  value={formdata.username} />
              </div>
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
                  <div>
                    <button type="submit">Register</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <p>Already have an account?<Link to="/Login"> Log In</Link></p>
          </div>
        </div>
      </div>
    </section>
  )

}

export default Register