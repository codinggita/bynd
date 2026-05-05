const { z } = require('zod');

/**
 * BYND Validation Schemas
 * Used to validate incoming request bodies before processing.
 */

const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  organization: z.string().min(1, 'Organization link is required'),
});

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

const updateProfileSchema = z.object({
  name: z.string().min(2).optional(),
  organization: z.string().optional(),
});

module.exports = {
  registerSchema,
  loginSchema,
  updateProfileSchema
};
