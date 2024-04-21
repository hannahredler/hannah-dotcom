import { TypedString } from './components/TypedString'

export default function Home() {
  return (
    <>
      <div className="w-full h-full flex flex-col text-center justify-center">
        <TypedString text={'Hannah Redler'}></TypedString>
        <h2 className="text-[#8892af]">Software Engineer</h2>

        <div className="flex flex-row w-full justify-center gap-5 p-3">
          <a href="https://www.linkedin.com/in/hannah-redler/" target="_blank">
            {<i className="fa-brands fa-linkedin fa-2x text-neon" />}
          </a>
          <a href="https://medium.com/@hannahjredler" target="_blank">
            {<i className="fa text-sm fa-medium fa-2x text-neon" />}
          </a>
          <a href="https://github.com/hannahredler" target="_blank">
            {<i className="fa text-base fa-github fa-2x text-neon" />}
          </a>
        </div>
      </div>
    </>
  )
}
