import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import ValuesSection from './components/ValuesSection'

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
    </div>
  )
}

export default App
