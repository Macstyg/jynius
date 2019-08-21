import React, { useState } from 'react'
import { TextField, Grid, Button, makeStyles, Theme, createStyles } from '@material-ui/core';
import { Form } from './ContactUs.styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    input: {
      background: '#f6f6f6',
      '& input:focus': {
        background: '#fff'
      },
      '& textarea:focus': {
        background: '#fff'
      }
    },
  }),
)

interface State {
  firstName: string
  lastName: string
  email: string
  message: string
}

const ContactUsForm = () => {
  const [values, setValues] = useState<State>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })
  const handleChange = (name: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [name]: event.target.value })
  }
  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault()
  }
  const { input } = useStyles()
  return (
    <form noValidate onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item sm={6}>
          <TextField
            fullWidth
            classes={{ root: input }}
            id="outlined-name"
            label="First name"
            value={values.firstName}
            onChange={handleChange('firstName')}
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item sm={6}>
          <TextField
            fullWidth
            classes={{ root: input }}
            id="outlined-name"
            label="Last name"
            value={values.lastName}
            onChange={handleChange('lastName')}
            margin="normal"
            variant="outlined"
          />
        </Grid>
      </Grid>
      <TextField
        fullWidth
        classes={{ root: input }}
        id="outlined-name"
        label="Email"
        value={values.email}
        onChange={handleChange('email')}
        margin="normal"
        variant="outlined"
      />
      <TextField
        fullWidth
        classes={{ root: input }}
        id="outlined-name"
        label="Message"
        value={values.message}
        onChange={handleChange('message')}
        margin="normal"
        variant="outlined"
        // variant="filled"
        multiline
        rows="5"
      />
      <Button variant="contained" type="submit" color="primary">Send message</Button>
    </form>
  )
}

export default ContactUsForm
