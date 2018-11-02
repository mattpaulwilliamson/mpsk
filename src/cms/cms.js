import CMS from 'netlify-cms'

import WelcomePagePreview from './preview-templates/WelcomePagePreview'
import TimetablePagePreview from './preview-templates/TimetablePagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'

CMS.registerPreviewTemplate('welcome', WelcomePagePreview)
CMS.registerPreviewTemplate('timetable', TimetablePagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
