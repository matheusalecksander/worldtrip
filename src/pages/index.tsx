import { Header } from '../components/Header'
import { Banner } from '../components/Banner'

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <div>
        <h1>Projeto para destino de viagens</h1>
        <h3>
          Nesse projeto iremos utilizar:
        </h3>
        <ul>
          <li>Chakra-ui</li>
          <li>Next</li>
          <li>Json-server</li>
          <li>Swipper</li>
        </ul>
        <p>
          Para realizar o desafio iremos clonar uma interface feita
          pelos designers da rocketseat que está disponível no figma.
        </p>
      </div>
    </>
  )
}