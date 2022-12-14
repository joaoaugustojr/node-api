import { MissingParamError } from './../errors/missing-param-error'
import { HttpResponse, HttpRequest } from '../protocols/http'
import { badRequest } from './../helpers/http-helper'
import { Controller } from './../protocols/controller'

export class SignUpController implements Controller {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = [
      'name',
      'email',
      'password',
      'passwordConfirmation'
    ]

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }

    return {
      statusCode: 400,
      body: new Error('Generic Error')
    }
  }
}
