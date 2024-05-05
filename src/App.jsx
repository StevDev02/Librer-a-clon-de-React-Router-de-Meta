import { Suspense, lazy } from "react"
import { Page404 } from "./components/pages/404"
import { HomePage } from "./components/pages/Home"
import { Route } from "./Router/components/Route"
import { Router } from "./Router/components/Router"
import { routes } from "./Router/const/consts"

// const LazyHomePage = lazy(() => import("./components/pages/About"))
const LazyAboutPage = lazy(() => import("./components/pages/About"))

function App() {
  

  return (
    <>
    <main>
      <Suspense fallback={<div>Loading...</div>}  >
        <Router routes={routes} defaultComponent={Page404}>
            <Route path='/' Component={HomePage} />
            <Route path='/about' Component={LazyAboutPage} /> 
        </Router>
      </Suspense>
    </main>
      
    </>
  )
}

export default App
