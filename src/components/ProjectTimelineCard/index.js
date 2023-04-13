import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimeLine = props => {
  const {item} = props
  const {projectTitle, description, imageUrl, duration, projectUrl} = item
  return (
    <div>
      <img src={imageUrl} alt="project" className="image" />
      <div className="text-cont">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="icon-cont">
          <AiFillCalendar />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="desc">{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}
export default ProjectTimeLine
