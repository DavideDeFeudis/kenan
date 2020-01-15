import React from 'react'
import Container from 'react-bootstrap/Container'
// import { Container } from 'react-bootstrap' // import the whole library

export default function Layout(props) {
    return (
        <Container>
            {props.children}
        </Container>
    )
}
