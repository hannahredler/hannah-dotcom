import { ContactForm } from './contact-form'

const Contact = () => {
  return (
    <div className="m-5 md:w-2/2">
      <h2 className="text-sm pb-5">
        Need software building, or simply fancy a chat? Use the form below:
      </h2>
      <ContactForm />
      <h2 className="text-sm py-2">
        Or alternatively find me e-hanging out at:
      </h2>
      <div className="flex flex-row justify-between text-sm">
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
      className="flex flex-row gap-2 items-center justify-center text-sm border  border-white rounded-lg p-1 px-2"
    >
      {icon}
      {title}
    </a>
  )
}

export default Contact
