import React from 'react'
import PropTypes from 'prop-types'
import { TimetablePageTemplate } from '../../templates/Timetable'

const TimetablePagePreview = ({ entry, widgetFor }) => (
  <TimetablePageTemplate
    title={entry.getIn(['data', 'title'])}
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
