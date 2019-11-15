import React from 'react'
import { Row } from 'react-bootstrap'
import './Introduction.css'

const Introduction = () => {
    return (
        <div className = 'introduction'>
            <h3 className = 'title'>Introducción</h3>
            <Row className = 'fix-margin'>
                <span className = 'text'>
                    Desde muy temprana edad ya tiene como aficción todo lo que tuviese que ver con
                    los ordenadores. Hasta tal punto que hasta el día de hoy no he tenido ni un solo 
                    ordenador personal que no haya montado yo mismo. Al poco tiempo me topé con el
                    mundo de la programación que me ha tenido absuelto estos últimos años aprendiendo 
                    todo lo que se cruzaba en mi camino, solucionando problemas que parecían imposibles
                    de solucionar y haciéndome ver que este es mi futuro.
                </span>
                <br/>
                <span>
                    Siempre dispuesto a aprender las últimas tecnologías que surgen cada día, 
                    de encontrar las mejores formas de solucionar cualquier problema que se 
                    presente y de ayudar a cualquier persona que necesite mi ayuda.
                </span>
                <br/>
                <span>
                    Es por todo esto y más, que me gustaría formar parte de un gran equipo de 
                    trabajo como el vuestro. Con el que pueda desarrollarme personal y 
                    profesionalmente contribuyendo de forma paralela a los objetivos generales
                    de la empresa.
                </span>
            </Row>
            <hr className = 'divider'/>
        </div>
    )
}

export default Introduction