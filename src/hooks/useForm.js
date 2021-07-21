import React from 'react'

function useForm(initialState) {
  const [formdata, setFormdata] = React.useState(initialState)

  const handleChange = event => {
    setFormdata({ ...formdata, [event.target.name]: event.target.value })
  }

  return {
    formdata,
    handleChange,
  }

}

export default useForm