import React from 'react'
import styled from 'styled-components'

const FormWrapper = styled.section`
  form {
  }
`

const MailchimpSignupForm = props => (
  <FormWrapper role="region" aria-label="MailChimp sign up form">
    <form action="post" />
  </FormWrapper>
)

export default MailchimpSignupForm
