import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimeLine = props => {
  const {item} = props
  const {courseTitle, description, duration, tagsList} = item
  return (
    <div>
      <div className="duration-cont">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="icon-cont">
          <AiFillClockCircle />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="desc">{description}</p>
      <ul className="card-cont">
        {tagsList.map(each => (
          <li key={each.id}>
            <p className="button">{each.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default CourseTimeLine
