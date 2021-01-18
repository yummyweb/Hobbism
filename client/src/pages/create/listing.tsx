import React from 'react'
import { Box, Button } from '@chakra-ui/react'
import Wrapper from '../../components/Wrapper'
import { InputField } from '../../components/InputField'
import { Formik, Form } from 'formik'
import { useCreateListingMutation } from '../../generated/graphql'
import { useRouter } from 'next/router'

const Listing = () => {
    const router = useRouter()
    const [, createListing] = useCreateListingMutation()

    return (
        <Wrapper variant="regular">
            <Formik initialValues={{ title: '', body: '', tags: '' }} 
                onSubmit={async values => {
                    const response = await createListing(values)
                    router.push('/explore')
                }}>
                {({ isSubmitting }) => (
                    <Form>
                        <InputField label="Listing Title" id="title" placeholder="Title" name="title" />

                        <Box mt={4}>
                            <InputField textarea={true} name="body" label="Listing Body" id="body" placeholder="Body" />
                        </Box>

                        <Box mt={4}>
                            <InputField name="tags" label="Listing Tags" id="tags" placeholder="Tags" />
                            <small>Please seperate tags with spaces</small>
                        </Box>

                        <Box mt={5}>
                            <Button type="submit" isLoading={isSubmitting} colorScheme="purple">
                                Create Listing
                            </Button>
                        </Box>
                    </Form>
                )}
            </Formik>
        </Wrapper>
    )
}

export default Listing
