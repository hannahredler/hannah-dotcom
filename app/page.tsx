import { TypedString } from './components/TypedString'
import { GithubIcon, LinkedinIcon, MediumIcon } from './utils/icons'

const Home: React.FC = () => {
  const iconClass = 'text-neon text-sm h-7 hover:animate-spin'
  return (
    <>
      <div className="w-full flex-col text-center justify-center items-stretch -mt-80">
        <TypedString text={'Hannah Redler'}></TypedString>
        <h2 className="text-[#8892af] mt-1">Software Engineer</h2>
        <div className="flex flex-row w-full justify-center gap-5 p-2">
          <a href="https://www.linkedin.com/in/hannah-redler/" target="_blank">
            <LinkedinIcon className={iconClass} />
          </a>
          <a href="https://github.com/hannahredler" target="_blank">
            <GithubIcon className={iconClass} />
          </a>
          <a href="https://medium.com/@hannahjredler" target="_blank">
            <MediumIcon className={iconClass} />
          </a>
        </div>
      </div>
    </>
  )
}

export default Home
