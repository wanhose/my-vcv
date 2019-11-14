import React from 'react'
import { Row } from 'react-bootstrap'
import './Introduction.css'

const Introduction = () => {
    return (
        <div className = 'introduction'>
            <h3 className = 'title'>Introducción</h3>
            <Row className = 'fix-margin'>
                <span className = 'text'>
                    Desde muy pequeño ya cacharreaba con todo lo que me acercaban, me encantaban
                    los juegos de construcción, después comenzó mi aficción por los ordenadores 
                    hasta tal punto que hoy en día no tengo ni un solo ordenador personal que no 
                    haya montado yo mismo y por último descubrí la programación que me ha tenido 
                    absuelto estos últimos años aprendiendo todo lo que se cruzaba en el camino, 
                    solucionando problemas que jamás creí que podría solucionar y haciéndome ver 
                    que aquí se encuentra mi futuro.
                </span>
                <br/>
                <span>
                    Soy un entusiasta del continuo aprendizaje de las últimas tecnologías que
                    surgen cada día, de encontrar las mejores formas de solucionar cualquier 
                    problema que se presente y de ayudar a cualquier persona que necesite mi 
                    ayuda.
                </span>
                <br/>
                <span>
                    Es por todo esto y más que algún día me gustaría formar parte de un gran 
                    equipo de trabajo como el vuestro. Con el que pueda permitirme desarrollarme 
                    de forma personal y profesional. Y por supuesto, contribuyendo a las metas
                    generales de la empresa.
                </span>
            </Row>
            <hr className = 'divider'/>
        </div>
    )
}

export default Introduction