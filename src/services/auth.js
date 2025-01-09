import { signUpEndpoint } from '../config/api'
import { courseGroup } from '../config/constants'

export const requestSignUp = async (body) => {
  const response = await fetch(signUpEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ...body, course_group: courseGroup }),
  })

  return await response.json()
}
