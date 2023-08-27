import z from 'zod'

const career = z.object({
  career_name: z.string({
    invalid_type_error: 'Career name must be a string',
    required_error: 'Career name is required.'
  }),
  duration_years: z.number().int().positive(),
  careerlevelId: z.number().int().positive()
})

const careerLevel = z.object({
  level_name: z.string({
    invalid_type_error: 'Career level name must be a string',
    required_error: 'Career level name is required.'
  })
})

export function validateCareer(input) {
  return career.safeParse(input)
}

export function validatePartialCareer(input) {
  return career.partial().safeParse(input)
}

// For lavel
export function validateCareerLevel(input) {
  return careerLevel.safeParse(input)
}
