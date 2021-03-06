import React, { useState } from 'react'
import { TextField, Button, makeStyles, Theme, createStyles } from '@material-ui/core';

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


const EmailSubscriptionForm: React.FC = () => {
  const [email, setEmail] = useState('')
  const handleChangeEmail: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value)
  }
  const { input } = useStyles()
  return (
    <form noValidate method="POST" name="emailSubscription" data-netlify="true">
      <TextField
        fullWidth
        classes={{ root: input }}
        id="subscriptionEmail"
        name="subscriptionEmail"
        label="Enter email"
        value={email}
        onChange={handleChangeEmail}
        margin="normal"
        variant="outlined"
      />
      <Button variant="contained" type="submit" color="primary">Subscribe</Button>
    </form>
  )
}

export default EmailSubscriptionForm
