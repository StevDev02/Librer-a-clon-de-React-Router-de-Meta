import { Link } from "../../Router/services/Link"

export function AboutPage() {
    return (
      <>
      <h1>The About Page</h1>
      <img src="https://scontent.fuio23-1.fna.fbcdn.net/v/t39.30808-1/420201953_122108071892243294_6539494308427362023_n.jpg?stp=dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFBOtZ4uF3IEuyNXi6QCcWw-Y9k0dIOQ9H5j2TR0g5D0QifSWXPuGM9GCnLR-5tATuZUIYpu1H9AGgt6R8Mkmez&_nc_ohc=x95rXXh3PLAAb7JWeCw&_nc_ht=scontent.fuio23-1.fna&oh=00_AfDMqCZMARbORcjnAVwGLcPK4tvoD9MqeZ5_0fcWl77N9w&oe=662C6EBC" alt="Imagen de StevDev02" />
      <p>Hola mi nombre es Steven o StevDev02, y estoy creando un clon de React Router</p>
      <Link to='/'>Ir al Home</Link>
      </>
    )
  }