import React from 'react'
import { Box, Button } from '@chakra-ui/react'
import { Formik, Form } from 'formik'
import { InputField } from '../components/InputField'
import Wrapper from '../components/Wrapper'
import { useRegisterMutation } from '../generated/graphql'
import { useRouter } from 'next/router'

interface IProps {

}

const Register: React.FC<IProps> = () => {
    const router = useRouter()
    const [, register] = useRegisterMutation()
    
    return (
        <Wrapper variant="small">
            <Formik initialValues={{ firstName: '', lastName: '', email: '', password: '' }} 
                onSubmit={async (values, { setErrors }) => {
                    const response = await register(values)
                    if (response.error) {
                        const prop = response.error.graphQLErrors[0].originalError!.extensions.exception.validationErrors[0].property 
                        setErrors({
                            email: prop === "email" ? "Email is invalid!" : "",
                            password: prop === "password" ? "Password is invalid. Should be 8-16 characters." : ""
                        })
                    }
                    else {
                        router.push('/login')
                    }
                }}>
                {({ isSubmitting }) => (
                    <Form>
                        <InputField label="Your First Name" placeholder="First Name" name="firstName" />
                        <Box mt={4}>
                            <InputField label="Your Last Name" placeholder="Last Name" name="lastName" />
                        </Box>

                        <Box mt={4}>
                            <InputField label="Your Email ID" placeholder="Email ID" name="email" />
                        </Box>

                        <Box mt={4}>
                            <InputField label="Your Password" placeholder="Password" name="password" type="password" />
                        </Box>

                        <Button mt={5} type="submit" isLoading={isSubmitting} colorScheme="green">
                            Register
                        </Button>
                    </Form>
                )}
            </Formik>
        </Wrapper>
    )
}

export default Register
