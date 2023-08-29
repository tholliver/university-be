/* eslint-disable no-undef */
/* eslint-disable space-before-function-paren */
import { describe, expect } from '@jest/globals'
import { app } from '../app.js'

import request from 'supertest'

describe('Get Endpoint', () => {
  it('should enroll a new student', async () => {
    const res = await request(app).post('/career-enrollment').send({
      student_name: 'newStudentTest',
      student_lastname: 'Test',
      date_birth: '2000-01-14',
      email: 'test.does@example.com',
      phone_number: '1234567890',
      careerId: 2
    })
    expect(res.statusCode).toEqual(201)
    expect(res.body.error).toBe(null || undefined)
    expect(res.body.length >= 1).toBe(true)
  })
})
