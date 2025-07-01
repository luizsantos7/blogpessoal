import { FacebookLogo } from "@phosphor-icons/react/dist/ssr/FacebookLogo"
import { InstagramLogo } from "@phosphor-icons/react/dist/ssr/InstagramLogo"
import { LinkedinLogo } from "@phosphor-icons/react/dist/ssr/LinkedinLogo"
import { useContext, type ReactNode } from "react"
import { AuthContext } from "../../contexts/AuthContext"

function Footer() {

    let data = new Date().getFullYear()

    const {usuario} = useContext(AuthContext)

    let component:ReactNode

    if(usuario.token != ""){
        component =
        
        <div className="flex justify-center bg-indigo-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            Blog Pessoal Generation | Copyright: {data}
                        </p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
                        <a href="https://www.linkedin.com/in/luizhenrique-dev/" target="_blank">
                        <LinkedinLogo size={48} weight='bold' />
                        </a>
                        <a href="https://www.instagram.com/luizsantos7_/" target="_blank">
                        <InstagramLogo size={48} weight='bold' />
                        </a>
                        <a href="https://www.facebook.com/luishenrique.santos.735507/?locale=pt_BR" target="_blank">
                        <FacebookLogo size={48} weight='bold' />
                        </a>
                    </div>
                </div>
            </div>
    }

    return (
        <>
           {component}
        </>
    )
}


export default Footer