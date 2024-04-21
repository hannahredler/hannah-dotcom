'use client'

import { useEffect, useState } from 'react'
import { Poppins } from 'next/font/google'
const fontPoppins = Poppins({ weight: '500', subsets: ['latin'] })

export const TypedString: React.FC<{ text: string }> = ({ text }) => {
  const [writtenString, setWrittenString] = useState('')

  useEffect(() => {
    const words = text.split(' ')

    let nSeconds = 0
    for (let i = 0; i < words.length; i++) {
      let word = words[i]
      for (let j = 0; j < word.length; j++) {
        if (j < 2) nSeconds += 300
        else nSeconds += 100

        console.log('nSeconds', nSeconds, word[j])
        setTimeout(() => {
          setWrittenString((prev) => {
            return prev + word[j]
          })
        }, nSeconds)
      }
      if (i !== words.length - 1)
        setTimeout(() => {
          setWrittenString((prev) => {
            return prev + ' '
          })
        }, nSeconds)

      nSeconds += 500
    }

    nSeconds += 600

    setTimeout(() => {
      const caret = document.getElementById('typing-caret')
      caret?.classList.add('invisible')
      caret?.classList.remove('animate-blink')
    }, nSeconds)
  }, [])
  return (
    <h1
      className={`uppercase text-[60px] text-black tracking-widest font-outline-2`}
    >
      {writtenString}
      <span id="typing-caret" className="text-neon font-thin animate-blink">
        |
      </span>
    </h1>
  )
}
