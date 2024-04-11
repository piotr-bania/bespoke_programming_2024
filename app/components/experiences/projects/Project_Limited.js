import Heading_4 from '../../ui/headings/Heading_4'
import Paragraph from '../../ui/paragraphs/Paragraph'
import Technologies from './Technologies'
import Link from 'next/link'
import Project_Canvas from '../canvases/Project_Canvas'
import Route_Change from '../../ui/transitions/Route_Change'
import Button from '../../ui/buttons/Button'

const Project_Limited = ({ className, title, shortDescription, url, projectComponent }) => {
    return (
        <div className={`div ${className}`}>
            <Heading_4
                className='title'
                h4Text={title}
            />

            <Link
                href={url}
                target='_blank'
            >
                <Project_Canvas projectComponent={projectComponent} />
            </Link>

            <Paragraph
                className='short_description'
                pText={shortDescription}
            />

            <div className='project_links'>
                <Route_Change href={url}>
                    <Button
                        buttonText='See the Live Site'
                        className='button'
                    />
                </Route_Change>
            </div>
        </div>
    )
}

export default Project_Limited