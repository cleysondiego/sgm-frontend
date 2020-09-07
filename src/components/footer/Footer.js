import React from 'react'
import FooterComponents from '.'
import Icon from '../icons'

export function Footer() {
    return (
        <FooterComponents>
            <FooterComponents.Wrapper>
                <FooterComponents.Row>
                    <FooterComponents.Column>
                        <FooterComponents.Title>Redes Sociais</FooterComponents.Title>
                        <FooterComponents.Link href='#'><Icon className="fab fa-facebook-f" />Facebook</FooterComponents.Link>
                        <FooterComponents.Link href='#'><Icon className="fab fa-youtube" />YouTube</FooterComponents.Link>
                        <FooterComponents.Link href='#'><Icon className="fab fa-instagram" />Instagram</FooterComponents.Link>
                    </FooterComponents.Column>
                    <FooterComponents.Column>
                        <FooterComponents.Title>Links Úteis</FooterComponents.Title>
                        <FooterComponents.Link href='#'>Microsoft Live</FooterComponents.Link>
                        <FooterComponents.Link href='#'>Moodle</FooterComponents.Link>
                        <FooterComponents.Link href='#'>Websai</FooterComponents.Link>
                    </FooterComponents.Column>
                    <FooterComponents.Column>
                        <FooterComponents.Title>Cursos</FooterComponents.Title>
                        <FooterComponents.Link href='#'>ADS</FooterComponents.Link>
                        <FooterComponents.Link href='#'>Comércio Exterior</FooterComponents.Link>
                        <FooterComponents.Link href='#'>Gestão Empresarial</FooterComponents.Link>
                    </FooterComponents.Column>
                    <FooterComponents.Column>
                        <FooterComponents.Title>Institucional</FooterComponents.Title>
                        <FooterComponents.Link href='#'>AACC</FooterComponents.Link>
                        <FooterComponents.Link href='#'>Iniciação Científica</FooterComponents.Link>
                        <FooterComponents.Link href='#'>Trabalho de Graduação</FooterComponents.Link>
                    </FooterComponents.Column>
                </FooterComponents.Row>
                <hr />
                <FooterComponents.H5>
                    <h5>Fatec Indaiatuba - Dr. Archimedes Lamogglia | (19) 3885-1923 | Rua Dom Pedro I, 65 - Cidade Nova I | CEP 13334-100</h5>
                </FooterComponents.H5>
            </FooterComponents.Wrapper>
        </FooterComponents>
    )
}