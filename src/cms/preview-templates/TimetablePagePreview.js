import React from 'react'
import PropTypes from 'prop-types'
import { TimetablePageTemplate } from '../../templates/timetable'

const TimetablePagePreview = ({ entry, widgetFor }) => (
  <TimetablePageTemplate
    title={entry.getIn(['data', 'title'])}
    image={entry.getIn(['data', 'image'])}
    content={widgetFor('body')}
  />
)

TimetablePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default TimetablePagePreview
