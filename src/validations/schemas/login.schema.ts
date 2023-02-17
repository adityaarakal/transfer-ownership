/**
 * The data below is dummy and not suitable for validations schema
 * Refer to fomik guides for appropriate data (link below)
 * https://formik.org/docs/guides/validation
 */

export const LoginSchema = {
  username: {
    type: 'string',
    validations: {
      required: true,
      length: {
        min: 8,
        max: 12,
      },
    },
  },
  password: {
    type: 'string',
    validations: {
      required: true,
      length: {
        min: 8,
        max: 12,
      },
    },
  },
};
