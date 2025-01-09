import { signUpEndpoint } from '../config/api'
import { courseGroup } from '../config/constants'
import { post } from '../utils/client'

export const requestSignUp = async (body) => {
  const response = await post(signUpEndpoint, {
    ...body,
    course_group: courseGroup
  })

  return await response.json()
}
