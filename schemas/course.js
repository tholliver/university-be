import z from 'zod'

const course = z.object({
  course_name: z.string({
    invalid_type_error: 'Career name must be a string',
    required_error: 'Career name is required.'
  }),
  year: z.number().int().positive(),
  semester: z.number().int().positive(),
  optative: z.boolean()
})

export function validateCourse(input) {
  return course.safeParse(input)
}

export function validatePartialCourse(input) {
  return course.partial().safeParse(input)
}
