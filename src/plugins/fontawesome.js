import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faEye,
  faEyeSlash,
  faClockRotateLeft,
  faPlus,
  faCircleInfo,
  faCircleCheck,
  faTriangleExclamation,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'
import {
  faEnvelope,
  faCircleQuestion,
} from '@fortawesome/free-regular-svg-icons'
import {
  faFacebook,
  faFacebookMessenger,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

// Solid
library.add(
  faEye,
  faEyeSlash,
  faClockRotateLeft,
  faPlus,
  faCircleInfo,
  faCircleCheck,
  faTriangleExclamation,
  faXmark
)
// Regular
library.add(faEnvelope, faCircleQuestion)
// Brands
library.add(faFacebook, faFacebookMessenger, faGithub, faLinkedin)

export default FontAwesomeIcon
