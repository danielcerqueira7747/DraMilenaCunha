import style from './ButtonWhatsapp.module.css'

import { FaWhatsapp } from 'react-icons/fa'

export default function ButtonWhatsapp(){

    return (

        <div className={style.divButton}>

            <a 
                id='btn-whatsapp-fixed'
                href="https://api.whatsapp.com/send?phone=5571999970396&amp;text=Olá! Eu gostaria de agendar um atendimento!" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="WhatsApp"

            >

                <button className={style.btnWhatsapp}>

                    <FaWhatsapp />

                </button>

            </a>

        </div>

    )

}