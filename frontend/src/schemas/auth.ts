import * as yup from 'yup';

export const registerSchema = yup.object().shape({
    email: yup.string().email().required('Email is required'),
    password: yup.string().min(5).required('Password must be at least 5 characters'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match').required('Password confirmation is required'),
})

export const loginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
})
