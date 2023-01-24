import { useState } from 'react'
import FormInput from '../form-input/FormInput'
import Button from '../button/Button'
import {
  createAuthUserWithEmailandPassword,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailandPassword,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils'

import './SignInForm.scss'
const defaultFormFields = {
  email: '',
  password: '',
}
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields

  // console.log(formFields)
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup()
    // const userDocRef = await createUserDocumentFromAuth(user)
  }

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const response = await signInAuthUserWithEmailandPassword(email, password)
      console.log(response)

      resetFormFields()
    } catch (err) {
      switch (err.code) {
        case 'auth/wrong-password':
          alert('Wrong password')
          break
        case 'auth/user-not-found':
          alert('User not found')
          break
        default:
          console.log(err)
      }
    }
  }

  const handleChange = e => {
    const { name, value } = e.target
    setFormFields({ ...formFields, [name]: value })
  }
  return (
    <div className='sign-up-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogle}>
            Google sign In
          </Button>
        </div>
      </form>
    </div>
  )
}
export default SignInForm
