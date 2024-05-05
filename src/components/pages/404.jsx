import { Link } from "../../Router/services/Link"

export function Page404() {
    return ( 

        <>
            <h1>
                This is Page no found in site web
            </h1>
            <h2 className="text-3xl" >Error <span className="font-medium text-red-500">404</span></h2>

            <Link to='/' >Return to Home</Link>
        </>
    )
}