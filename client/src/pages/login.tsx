import React from 'react'
import { Box, Button } from '@chakra-ui/react'
import { Formik, Form } from 'formik'
import { InputField } from '../components/InputField'
import Wrapper from '../components/Wrapper'
import { useLoginMutation } from '../generated/graphql'

interface IProps {

}

const Login: React.FC<IProps> = () => {
    const [, login] = useLoginMutation()
    return (
        <Wrapper variant="small">
            <Formik initialValues={{ email: '', password: '' }} 
                onSubmit={async (values, { setErrors }) => {
                    const response = await login(values)
                    console.log(response)
                    let prop: string = response.error.graphQLErrors[0].originalError!.extensions.exception.validationErrors[0].property
                    setErrors({
                        email: prop === "email" ? "Email is invalid!" : "",
                        password: prop === "password" ? "Password is invalid. Should be 8-16 characters." : ""
                    })
                }}>
                {({ isSubmitting }) => (
                    <Form>
                        <InputField label="Your Email ID" placeholder="Email ID" name="email" />

                        <Box mt={4}>
                            <InputField label="Your Password" placeholder="Password" name="password" type="password" />
                        </Box>

                        <Button mt={5} type="submit" isLoading={isSubmitting} colorScheme="green">
                            Login
                        </Button>
                    </Form>
                )}
            </Formik>
        </Wrapper>
    )
}

export default Login
