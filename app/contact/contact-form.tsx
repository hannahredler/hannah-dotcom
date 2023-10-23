'use client'

import { ChangeEvent, useState } from 'react'
import { sendEmail } from '../api'

export const ContactForm = () => {
  const [name, onNameChange] = useState('')
  const [email, onEmailChange] = useState('')
  const [message, onMessageChange] = useState('')

  const [isLoading, onIsLoading] = useState(false)
  const handleUserInput = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const rawText = event.target.value
    onEmailChange(rawText)
  }

  const checkValidity = (name: string, email: string, message: string) => {
    return !!name && !!email && !!message
  }

  return (
    <div className="p-3 border border-1">
      <form className="flex flex-col gap-1 w-full">
        <div className="flex flex-row gap-2 w-full justify-between">
          <FormField title="* Your name">
            <input
              type="text"
              id="name"
              className="rounded p-1 text-xs border border-1 w-full"
              value={name}
              placeholder="Who are ya"
              onChange={(e) => {
                e.preventDefault()
                onNameChange(e.target.value)
              }}
            />
          </FormField>
          <FormField title="* Email address">
            <input
              className="rounded p-1 text-xs border border-1 w-full"
              placeholder="Whats your email"
              type="text"
              value={email}
              onChange={(event) => handleUserInput(event)}
            />
          </FormField>
        </div>
        <FormField title="* Message">
          <textarea
            className="rounded p-2 text-xs border border-1 h-20"
            value={message}
            placeholder="Tell me something"
            onChange={(e) => {
              e.preventDefault()
              onMessageChange(e.target.value)
            }}
          />
        </FormField>
        <div className="flex justify-center mt-2">
          <button
            className="border rounded-lg w-fit px-3 py-2 items-center text-xs"
            disabled={!checkValidity(name, email, message)}
            onClick={async (e) => {
              e.preventDefault()
              onIsLoading(true)
              const response = await sendEmail({ name, email, message })
              onIsLoading(false)
            }}
          >
            {isLoading ? 'Loading' : 'Submit message!'}
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
    <div className="flex flex-col pb-1 w-full">
      <h4 className="text-xs pb-1">{title}</h4>
      {children}
    </div>
  )
}
