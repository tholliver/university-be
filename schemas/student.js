import { z } from 'zod'

const studentSchema = z.object({
  student_name: z.string().nonempty('Student name is required'),
  student_lastname: z.string().nonempty('Student lastname is required'),
  date_birth: z.coerce.date(),
  email: z.string().email('Invalid email format').nonempty('Email is required'),
  phone_number: z.string().nonempty('Phone number is required'),
  careerId: z.optional(z.number())
})

export function validateStudent(input) {
  return studentSchema.safeParse(input)
}

export function validatePartialStudent(input) {
  return studentSchema.partial().safeParse(input)
}
