import { z } from 'zod'
import { universityCareerStatuses } from '../models/careerEnrollmentModel.js'

const careerEnrollmentSchema = z.object({
  status: z.enum(universityCareerStatuses),
  studentId: z.number(),
  careerId: z.number()
})

export function validateCareerEnrollmentSchema(input) {
  return careerEnrollmentSchema.safeParse(input)
}

export function validatePartialCareerEnrollmentSchema(input) {
  return careerEnrollmentSchema.partial().safeParse(input)
}
