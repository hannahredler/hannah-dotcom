import { SocialButton } from './components/SocialButton'
import { TypedString } from './components/TypedString'
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MediumIcon,
} from './utils/icons'

const Home: React.FC = () => {
  const iconClass = 'text-neon text-sm h-7 hover:animate-spin'
  return (
    <>
      <div className="w-full flex-col text-center justify-center items-stretch -mt-80">
        <TypedString />
        <h2 className="text-[#8892af] mt-1">Software Engineer</h2>
        <div className="flex flex-row w-full justify-center gap-5 p-2">
          <SocialButton
            link="https://www.linkedin.com/in/hannah-redler/"
            ariaLabel="Navigate to Linkedin"
            icon={<LinkedinIcon className={iconClass} />}
          />
          <SocialButton
            link="https://github.com/hannahredler"
            ariaLabel="Navigate to Github"
            icon={<GithubIcon className={iconClass} />}
          />
          <SocialButton
            link="https://medium.com/@hannahjredler"
            ariaLabel="Navigate to Medium"
            icon={<MediumIcon className={iconClass} />}
          />
          <SocialButton
            link="https://www.instagram.com/madebyhumans__/"
            ariaLabel="Navigate to Instagram"
            icon={<InstagramIcon className={iconClass} />}
          />
        </div>
      </div>
    </>
  )
}

export default Home
