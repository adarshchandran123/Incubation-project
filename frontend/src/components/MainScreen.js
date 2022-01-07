import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import "./MainSreen.css"

const MainScreen = ({title,children}) => {
    return (
        <>
        <Header />
        <div className="mainback">
            <Container>
                <Row>
                    <div className="page">
                        {
                            title && (
                                <>

                            <h1 className="heading">{title}</h1>
                            </>

                            )
                        }
                        {children}
                    </div>
                </Row>
            </Container>
            
        </div>
        <Footer />
        </>
    )
}

export default MainScreen

