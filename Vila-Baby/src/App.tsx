import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import ValuesSection from './components/ValuesSection'
import ProgramsSection from './components/ProgramsSection'
import Footer from './components/Footer'

const valueCards = [
  {
    iconClassName: 'fa-solid fa-heart',
    title: 'Acolhimento',
    description: 'Recebemos cada bebê com carinho e atenção, respeitando sua individualidade.',
    accentClassName: 'value-card--mint',
  },
  {
    iconClassName: 'fa-solid fa-star',
    title: 'Desenvolvimento',
    description: 'Estimulação adequada para cada fase do desenvolvimento físico, emocional e cognitivo.',
    accentClassName: 'value-card--gold',
  },
  {
    iconClassName: 'fa-solid fa-book-open',
    title: 'Aprendizado',
    description: 'Atividades lúdicas que incentivam a curiosidade, a criatividade e a autonomia.',
    accentClassName: 'value-card--lilac',
  },
  {
    iconClassName: 'fa-solid fa-sun',
    title: 'Bem-estar',
    description: 'Ambiente seguro, higienizado e preparado para o conforto e a felicidade do seu bebê.',
    accentClassName: 'value-card--sun',
  },
]

const programsSection = {
  title: 'Sobre a',
  schoolName: 'Vila Camaleão Baby',
  description:
    'Somos um berçário e maternal que acredita que os primeiros anos de vida são fundamentais para a formação de seres humanos felizes, confiantes e preparados para o futuro. Aqui, seu bebê cresce cercado de amor, segurança e estímulos que fazem a diferença.',
  imageSrc: '/sala.jpeg',
  imageAlt: 'Sala infantil da Vila Camaleão Baby com brinquedos e decoração acolhedora',
  programsHeading: 'Nossos programas',
  programsHeadingIconClassName: 'fa-regular fa-sun',
  programs: [
    {
      imageSrc: '/green-chameleon.jpeg',
      imageAlt: 'Camaleão verde ilustrado para o programa Berçário',
      title: 'Berçário',
      subtitle: 'Do nascimento a 1 ano e 6 meses',
      description: 'Ambiente acolhedor para os primeiros descobrimentos, com rotina segura e estímulos adequados para cada fase.',
      themeClassName: 'program-card--green',
    },
    {
      imageSrc: '/lilac-chameleon.jpeg',
      imageAlt: 'Camaleão lilás ilustrado para o programa Maternal',
      title: 'Maternal',
      subtitle: 'De 1 ano e 6 meses a 3 anos',
      description: 'Estimulo à autonomia, socialização e aprendizado por meio de atividades lúdicas e experiências significativas.',
      themeClassName: 'program-card--lilac',
    },
  ],
}

const footerColumns = [
  {
    title: 'Institucional',
    links: [
      { href: '#escola', label: 'A Escola' },
      { href: '#proposta', label: 'Proposta Pedagógica' },
      { href: '#bercario', label: 'Berçário' },
      { href: '#maternal', label: 'Maternal' },
    ],
  },
  {
    title: 'Informações',
    links: [
      { href: '#galeria', label: 'Galeria' },
      { href: '#blog', label: 'Blog' },
      { href: '#trabalhe-conosco', label: 'Trabalhe Conosco' },
    ],
  },
]

const footerContactItems = [
  { iconClassName: 'fa-brands fa-whatsapp', lines: ['(11) 99999-9999'] },
  { iconClassName: 'fa-regular fa-envelope', lines: ['contato@vilacamaleaobaby.com.br'] },
  { iconClassName: 'fa-solid fa-location-dot', lines: ['Rua das Cores, 123', 'Vila Feliz - SP'] },
]

const footerSocialLinks = [
  {
    href: 'https://www.instagram.com',
    label: 'Instagram',
    iconClassName: 'fa-brands fa-instagram',
    className: 'footer-social-link--instagram',
  },
  {
    href: 'https://www.facebook.com',
    label: 'Facebook',
    iconClassName: 'fa-brands fa-facebook-f',
    className: 'footer-social-link--facebook',
  },
]

function App() {
  return (
    <div className="site-shell">
      <Header logoSrc="/vila%20baby.jpg" logoAlt="Logo Vila Camaleão Baby" />

      <Hero
        eyebrow="Vila Camaleão Baby"
        title={'Cuidado, amor <span>e aprendizado</span> desde os primeiros passos.'}
        description="No Vila Camaleão Baby, cada bebê é acolhido com carinho, respeito e atenção para desenvolver todo o seu potencial em um ambiente seguro e estimulante."
        imageSrc="/baby-smile.png"
        imageAlt="Bebê sorrindo em ambiente infantil acolhedor"
      />

      <ValuesSection items={valueCards} />

      <ProgramsSection {...programsSection} />

      <Footer
        logoSrc="/vila%20baby.jpg"
        logoAlt="Logo Vila Camaleão Baby"
        columns={footerColumns}
        contactTitle="Contato"
        contactItems={footerContactItems}
        socialLinks={footerSocialLinks}
        copyrightText="© 2024 Vila Camaleão Baby. Todos os direitos reservados."
      />
    </div>
  )
}

export default App
