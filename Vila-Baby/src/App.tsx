import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'

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
    </div>
  )
}

export default App
