import { useState } from 'react'
import FormInput from '../form-input/FormInput'
import Button from '../button/Button'
import {
  createAuthUserWithEmailandPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'

import './SignUpForm.scss'
const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields

  // console.log(formFields)

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert(`passwords do not match`)
      return
    }

    try {
      const { user } = await createAuthUserWithEmailandPassword(email, password)
      //   setFormFields()
      await createUserDocumentFromAuth(user, { displayName })
      resetFormFields()
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use')
      } else {
        console.log(`user creation encountered an error`, err)
      }
    }
  }

  const handleChange = e => {
    const { name, value } = e.target
    setFormFields({ ...formFields, [name]: value })
  }
  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />

        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />

        <FormInput
          label='Confirm Password'
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        {/* <button type='submit'>Sign Up</button> */}
        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  )
}
export default SignUpForm
