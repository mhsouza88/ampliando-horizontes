import React from "react"
import * as C from './Styles'
import { Header } from "../../components/Header/Header"
import { Form } from "../../components/Form/Form"
import { Footer } from '../../components/Footer/Footer'

const HomePage = () => {
    return (
        <C.Container>
            <Header />
                <Form />
                    <Footer />    
        </C.Container>
    )
}

export default HomePage