module.exports = {
    InvalidEmail: { code: 'BadRequest', message: '"email" must be a valid email' },

    EmptyEmail: { code: 'BadRequest', message: '"email" is not allowed to be empty' },

    EmailAlreadyExists: { code: 'Conflit', message: 'User already registered' },

    EmptyPassword: { code: 'BadRequest', message: '"password" is not allowed to be empty' },

    InvalidPassword: {
        code: 'BadRequest',
        message: '"password" length must be 6 characters long',
    },

    InvalidName: {
        code: 'BadRequest',
        message: '"displayName" length must be at least 8 characters long',
    },

    InvalidFields: { code: 'BadRequest', message: 'Invalid fields' },

    UserNotFound: { code: 'NotFound', message: 'User does not exist' },
    categoryIdsNotFound: { code: 'BadRequest', message: '"categoryIds" not found' },

    fieldIsRequired: (field) => ({ code: 'BadRequest', message: `"${field}" is required` }),
};