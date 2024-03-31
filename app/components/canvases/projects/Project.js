import React from 'react'
import Link from 'next/link'
import Heading_4 from '../../ui/headings/Heading_4'
import Project_Canvas from '../Project_Canvas'
import Paragraph from '../../ui/paragraphs/Paragraph'
import Wave_Image from '../Wave_Image'

const Project = ({ className, title, description, url, detailedDescription }) => {
    return (
        <div className={`div ${className}`}>
            <Heading_4
                className='title'
                h4Text={title}
            />
            <Paragraph
                className='description'
                pText={description}
            />

            <Link
                href={url}
                target='_blank'
            >
                <Project_Canvas projectComponent={
                    <Wave_Image textureUrl='./images/mara_river.png' />
                }/>
            </Link>
            <Paragraph
                className='detailed_description'
                pText={detailedDescription}
            />
        </div>
    )
}

export default Project