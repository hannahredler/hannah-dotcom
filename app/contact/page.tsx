import { ContactForm } from './contact-form'

export default () => {
  return (
    <div className="w-1/3">
      <h2 className="text-sm pb-5">
        Need software building, or simply fancy a chat? Use the form below:
      </h2>
      <ContactForm />
      <h2 className="text-lg pt-5">
        Or alternatively find me e-hanging out at:
      </h2>
      <div className="flex flex-row justify-between">
        <Row
          icon={<i className="fa fa-linkedin fa-lg" />}
          title="Linkedin"
          link="https://www.linkedin.com/in/hannah-redler/"
        />
        <Row
          icon={<i className="fa fa-medium fa-lg" />}
          title="Medium"
          link="https://medium.com/@hannahjredler"
        />
        <Row
          icon={<i className="fa fa-github fa-lg" />}
          title="Github"
          link="https://github.com/hannahredler"
        />
      </div>
    </div>
  )
}

const Row: React.FC<{
  icon: React.ReactElement
  title: string
  link: string
}> = ({ icon, title, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      className="flex flex-row text-lg gap-2 items-center justify-center"
    >
      {icon}
      {title}
    </a>
  )
}
