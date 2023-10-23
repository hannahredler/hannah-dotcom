type Email = {
  name: string
  email: string
  message: string
}

export const sendEmail = (email: Email) => {
  return fetch(process.env.NEXT_PUBLIC_EMAILS_API!, {
    mode: 'cors',
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(email),
  })
}
