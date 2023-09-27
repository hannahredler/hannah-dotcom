'use client'

import { ChangeEvent, useState } from 'react'

export const ContactForm = () => {
  return (
    <div className="p-3 border border-1">
      <form className="flex flex-col gap-1">
        <FormField title="Your name">
          <input type="text" id="name" className="rounded"></input>
        </FormField>
        <FormField title="Email address">
          <EmailInput />
        </FormField>
        <FormField title="Message">
          <input type="text"></input>
        </FormField>
        <div className="flex justify-center mt-2">
          <button className="border rounded-lg w-fit px-3 py-2 items-center text-xs">
            Submit message!
          </button>
        </div>
      </form>
    </div>
  )
}

const FormField: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <div className="flex flex-col pb-1">
      <h4 className="text-xs pb-1">{title}</h4>
      {children}
    </div>
  )
}

const EmailInput: React.FC = () => {
  const [email, onEmailChange] = useState('')

  const handleUserInput = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const rawText = event.target.value
    console.log('Raw event', rawText)
    onEmailChange(rawText)
    console.log('email', email)
  }
  return (
    <input
      className="text-black rounded"
      type="text"
      value={email}
      onChange={(event) => handleUserInput(event)}
    ></input>
  )
}
