import React from "react"
import * as C from './Styles'
import { Header } from "../../components/Header/Header"
import { Footer } from "../../components/Footer/Footer"
import Typography from '@mui/material/Typography'
import TY from '../../assets/thankyou.gif'

const HomePage = () => {
    return (
        <C.Container>
            <Header />
                <Typography variant="h5" gutterBottom sx={{margin: '0 2rem 2rem 2rem', textAlign: 'center'}}>
                    Obrigada! Recebemos os seus dados.
                </Typography>
                    <Typography variant="body1" gutterBottom>
                        Em breve entraremos em contato.
                    </Typography>
                        <C.ImgContainer>
                            <img src={TY} alt="Obrigada!" />
                        </C.ImgContainer>
                            <Footer />
            </C.Container>
    )
}

export default HomePage