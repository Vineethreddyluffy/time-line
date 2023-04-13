import {Component} from 'react'

import {Chrono} from 'react-chrono'

import ProjectTimeLine from '../ProjectTimelineCard'
import CourseTimeLine from '../CourseTimelineCard'

import './index.css'

class TimeLineView extends Component {
  render() {
    const {timelineItemsList} = this.props
    return (
      <div className="cont">
        <h1 className="main-head">
          MY JOURNEY OF <br />
          <span className="main-para">CCBP 4.0</span>
        </h1>
        <div className="chrono-cont">
          <Chrono
            mode="VERTICAL_ALTERNATING"
            items={timelineItemsList}
            disableNavOnKey
            theme={{
              primary: '#2b237c',
              secondary: '#ffffff',
              cardBgColor: '#ffffff',
              cardForeColor: 'violet',
              titleColor: '#0967d2',
            }}
          >
            {timelineItemsList.map(each => {
              if (each.tagsList === undefined) {
                return <ProjectTimeLine key={each.id} item={each} />
              }
              return <CourseTimeLine key={each.id} item={each} />
            })}
          </Chrono>
        </div>
      </div>
    )
  }
}
export default TimeLineView
