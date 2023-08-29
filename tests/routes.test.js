/* eslint-disable space-before-function-paren */
/* eslint-disable no-undef */
import { describe, expect } from '@jest/globals'
import { app } from '../app.js'

import request from 'supertest'

describe('Get Endpoint', () => {
  it('should get all students', async () => {
    const res = await request(app).get('/student')
    expect(res.statusCode).toEqual(200)
    expect(res.body.error).toBe(null || undefined)
    expect(res.body.length >= 1).toBe(true)
  })
})
