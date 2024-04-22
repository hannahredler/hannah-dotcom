import './globals.css'
import type { Metadata } from 'next'
import { fontPoppins, fontMono } from './utils/fonts'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Hannah Redler Personal Website',
  description:
    'Hannah Redler, freelance frontend, backend and full stack software engineer available for work. Website and contact information',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={`flex flex-col box-border min-h-screen  bg-[#030d1c] text-[rgb(210,213,221)] ${fontPoppins.className}`}
      >
        <header
          className={`flex flex-row w-full justify-end ${fontMono.className}`}
        >
          <ResumeButton />
        </header>
        <div className="flex items-center justify-center flex-1">
          {children}
        </div>
        <footer className="absolute bottom-0 w-screen"></footer>
      </body>
    </html>
  )
}

const ResumeButton: React.FC = () => (
  <a
    href="resume.pdf"
    download="hannah_redler_resume.pdf"
    target="_blank"
    className="text-neon border border-neon rounded py-1 px-2 m-4"
  >
    Resume
  </a>
)
