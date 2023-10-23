import { PT_Mono } from 'next/font/google'
import Image from 'next/image'
const font = PT_Mono({ weight: '400', subsets: ['latin'] })

export default () => {
  return (
    <div>
      {' '}
      <Image
        src="/headshot.png"
        alt="hannah headshot"
        width={150}
        height={150}
      />
      <span className={`w-[180px] ${font.className}`}>
        I make quality software. Available for freelance projects.
      </span>
    </div>
  )
}
