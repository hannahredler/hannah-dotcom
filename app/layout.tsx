import './globals.css'
import type { Metadata } from 'next'
import { fontPoppins, fontMono } from './utils/fonts'

export const metadata: Metadata = {
  title: 'Hannah Redler - Software Engineer',
  description:
    'Hannah Redler, freelance full-stack software engineer. Website and contact information.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="dark" lang="en">
      <head></head>
      <body
        className={`flex flex-col box-border min-h-screen mx-auto max-w-[1200px]  bg-darkBlue text-lightGrey ${fontPoppins.className}`}
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
    href="HANNAH_REDLER_RESUME.pdf"
    download="hannah_redler_resume.pdf"
    target="_blank"
    className="text-neon border border-neon rounded py-1 px-2 m-4 hover:shadow-buttonGlow transition ease-in-out delay-600"
    aria-label="Download resume"
  >
    Resume
  </a>
)
