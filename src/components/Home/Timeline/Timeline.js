import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa'
import { data } from '../../../data/data'
import 'react-vertical-timeline-component/style.min.css'

const Timeline = () => {
    return (
        <div className = 'timeline'>
            <h3 className = 'title'>Estudios y experiencia</h3>
            <VerticalTimeline animate = { false }>
                {
                    data.experiences.map((experience) => {
                        return (
                            <VerticalTimelineElement
                                contentArrowStyle={{ borderRight: '7px solid black' }}
                                contentStyle = {{ borderBottom: '1px solid black', borderRadius: 0, boxShadow: 'none', paddingTop: 0 }}
                                date = { experience.from === experience.to ? experience.from : `${experience.from} - ${experience.to}` }
                                icon = { experience.type === 'studies' ? <FaGraduationCap color = 'white'/> : <FaBriefcase color = 'white'/> }
                                iconStyle = {{ backgroundColor: 'black' }}>
                                <h4>{ experience.type === 'studies' ? experience.name : experience.job }</h4>
                                <h5>{ experience.type === 'studies' ? experience.at : experience.company }</h5>
                            </VerticalTimelineElement>
                        )
                    })
                }
            </VerticalTimeline>
            <hr className = 'divider'/>
        </div>
    )
}

export default Timeline