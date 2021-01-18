import React, { useState } from 'react'
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import Wrapper from '../../components/Wrapper'
import { InputField } from '../../components/InputField'
import { Formik, Form } from 'formik'
import { useCreateGroupMutation, useHobbiesQuery } from '../../generated/graphql'
import { useRouter } from 'next/router'
import { CUIAutoComplete } from 'chakra-ui-autocomplete'

const Group = () => {
    interface Item {
        label: string;
        value: any;
    }

    const router = useRouter()
    const [, createGroup] = useCreateGroupMutation()

    const [{ data, fetching }] = useHobbiesQuery()

    let hobbies: any[] = []

    const [hobbysId, setHobbysId] = useState<any[]>([])

    if (!fetching) {
        data?.hobbies?.forEach(hobby => {
            hobbies.push({ value: hobby.id, label: hobby.name })
        })
    }

    const [selectedItems, setSelectedItems] = useState<Item[]>([])

    const handleSelectedItemsChange = (selectedItems?: Item[]) => {
        if (selectedItems) {
          setSelectedItems(selectedItems);
          setHobbysId([])
          selectedItems.forEach(item => {
            hobbysId.push(parseFloat(item.value))
          })
        }
        console.log(hobbysId)
    }

    const customRender = (selected: any) => {
        return (
          <Flex flexDir="row" alignItems="center">
            <Text>{selected.label}</Text>
          </Flex>
        )
    }
    return (
        <Wrapper variant="regular">
            <Formik initialValues={{ name: '', description: '', hobbiesId: [5, 6]  }} 
                onSubmit={async values => {
                    console.log(hobbysId)
                    const response = await createGroup(values)
                    //router.push(`/groups/${response.data?.createGroup.id}`)
                }}>
                {(values) => (
                    <Form>
                        <InputField label="Group Name" id="name" placeholder="Name" name="name" />

                        <Box mt={4}>
                            <InputField textarea={true} name="description" label="Group Description" id="description" placeholder="Description" />
                        </Box>

                        <Box mt={4}>
                            <CUIAutoComplete
                                {...values}
                                label="Choose your group's hobby"
                                placeholder="Type a Hobby"
                                items={!fetching ? hobbies : [{value: "loading", label: "Loading..."}]}
                                selectedItems={selectedItems}
                                onSelectedItemsChange={(changes) =>
                                    handleSelectedItemsChange(changes.selectedItems)
                                }
                                tagStyleProps={{
                                    color: "black"
                                }}
                                itemRenderer={customRender}
                            />
                        </Box>

                        <Box mt={5}>
                            <Button type="submit" isLoading={values.isSubmitting} colorScheme="purple">
                                Create Group
                            </Button>
                        </Box>
                    </Form>
                )}
            </Formik>
        </Wrapper>
    )
}

export default Group
