import { useEffect } from "react"

export function Query({routeParams}) {
    useEffect(() =>{
        document.title = (`${routeParams.query}`)
    }, [])
    return <h1>Has buscado: {routeParams.query} </h1> 
}