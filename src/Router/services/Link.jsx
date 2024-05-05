import { EVENTS } from "../const/consts"

function navigate (href) {
    window.history.pushState({}, '', href)
  
    //Evento personalizado
    const navigateEvent = new Event(EVENTS.PUSHSTATE)
  
    //Eneviamos el evento 
    window.dispatchEvent(navigateEvent)
  }


export function Link ({target, to, ...props}) {

  const handleClick = (e) => {
    

    const isMainEvent = e.button === 0 //Primary Click
    const isModifiedEvent = e.metaKey || e.altKey || e.ctrlKey || e.shiftKey
    const isManageableEvent = target === undefined || target === '_self'

    if ( isMainEvent && isManageableEvent && !isModifiedEvent ) {
      e.preventDefault()
      navigate(to)
    }

  }
  

  return <a onClick={handleClick} href={to} target={target} {...props} />


}