import { Link } from "../../Router/services/Link"


export function HomePage() {
    return (
      <>
      <h1>The Home Page</h1>
      <p>Esta es la pagina Home de inicio para el React Router</p>
      <Link to='/about'>Ir al About</Link>
      </>
    )
  }