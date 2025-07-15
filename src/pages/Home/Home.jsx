import style from './Home.module.css'

import FormContact from '../../layout/FormContact/FormContact'
import Location from '../../layout/Location/Location'
import HeroSection from '../../layout/HeroSection/HeroSection'
import Cards from '../../layout/Cards/Cards'
import ButtonWhatsapp from '../../components/ButtonWhatsapp/ButtonWhatsapp'
import Consultation from '../../layout/Consultation/Consultation'
import SocialMedia from '../../layout/SocialMedia/SocialMedia'
import About from '../../layout/About/About'

export default function Home(){

    return (

        <>

            <HeroSection />
            <About />
            <Cards />
            <Consultation />
            <Location />
            <FormContact />
            <SocialMedia />
            <ButtonWhatsapp />

        </>

    )

}