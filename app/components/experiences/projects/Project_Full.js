import Heading_4 from '../../ui/headings/Heading_4'
import Paragraph from '../../ui/paragraphs/Paragraph'
import Technologies from './Technologies'
import Link from 'next/link'
import Project_Canvas from '../canvases/Project_Canvas'
import Route_Change from '../../ui/transitions/Route_Change'
import Button from '../../ui/buttons/Button'

const Project_Full = ({ className, title, technologies, case_url, live_url, detailedDescription, projectComponent }) => {
    return (
        <div className={`div ${className}`}>
            <Heading_4
                className='title'
                h4Text={title}
            />

            <Link
                href={live_url}
                target='_blank'
            >
                <Project_Canvas projectComponent={projectComponent} />
            </Link>

            <Paragraph
                className='detailed_description'
                pText={detailedDescription}
            />

            <Technologies technologies={technologies} />

            <div className='project_links'>
                <Route_Change href={case_url}>
                    <Button
                        buttonText='View Case Study'
                        className='button'
                    />
                </Route_Change>

                <Link
                    href={live_url}
                    target='_blank'
                >
                    <Button
                        buttonText='See the Live Site'
                        className='button'
                    />
                </Link>
            </div>
        </div>
    )
}

export default Project_Full