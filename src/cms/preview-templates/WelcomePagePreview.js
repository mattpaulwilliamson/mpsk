import React from 'react'
import PropTypes from 'prop-types'
import { WelcomePageTemplate } from '../../templates/welcome'

const WelcomePagePreview = ({ entry, widgetFor }) => (
  <WelcomePageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

WelcomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default WelcomePagePreview
