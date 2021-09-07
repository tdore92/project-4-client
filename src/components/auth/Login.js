import React from 'react'
import useForm from '../../hooks/useForm'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { loginUser } from '../../lib/api'
import { setToken } from '../../lib/auth'

function Login() {
  const history = useHistory()
  const [isError, setIsError] = React.useState(false)
  const { formdata, handleChange } = useForm({
    email: '',
    password: '',
  })

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      const { data } = await loginUser(formdata)
      setToken(data.token)
      history.push('/')
      console.log('Login Successful')
    } catch (err) {
      console.log(err)
      setIsError(true)
    }
  }

  return (
    <section className="section">
      <div className="container box">
        <div className="columns">
          <form className="column is-half is-offset-one-quarter" onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  placeholder="Email"
                  onChange={handleChange}
                  name="email"
                  value={formdata.email} />
              </div>
            </div>
            <div className="field">
              <label className="label" >Password</label>
              <div className="control ">
                <input
                  placeholder="Password"
                  onChange={handleChange}
                  name="password"
                  type="password"
                  value={formdata.password} />
              </div>              
            </div>{isError && <p className='help is-danger'>Incorrect details. Please try again!</p>}
            <div>
              <button type="submit">Log In</button>
            </div>
          </form>
        </div>
      </div>
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <p>Don&apos;t have an account? <Link to="/Register">Register</Link> here.</p>
          </div>
        </div>
      </div>
    </section>
  )

}

export default Login