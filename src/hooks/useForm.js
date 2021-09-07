import React from 'react'

function useForm(initialState) {
  const [formdata, setFormdata] = React.useState(initialState)
  const [formErrors, setFormErrors] = React.useState(initialState)

  const handleChange = event => {
    setFormdata(formdata => ({ ...formdata, [event.target.name]: event.target.value }))
    setFormErrors({ ...formErrors, [event.target.name]: '' })
  }

  return {
    formdata,
    formErrors,
    handleChange,
    setFormdata,
    setFormErrors,
  }

}

export default useForm