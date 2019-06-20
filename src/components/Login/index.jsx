import React, { useState } from 'react'
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup'
import './style.css'

const schema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required')
})

function Login() {
  const [authUser, setAuthUser] = useState('')
  // login and password validation
  const handleSubmit = data => {
    console.log('submiting...')
    const auth = data.username !== data.password ? true : false
    if (auth) {
      setAuthUser('Wrong login credentials !')
    } else {
      setAuthUser('Correct credentials !')
    }
  }

  return (
    <div className="login-box">
      <div className="login-form">
        <Form onSubmit={handleSubmit} schema={schema}>
          <div className="form-item">
            <Input name="username" type="text" placeholder="Username" />
          </div>
          <div className="form-item">
            <Input name="password" type="password" placeholder="Password" />
          </div>
          <span>{authUser}</span>
          <div className="form-item">
            <button type="submit">Login</button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Login
