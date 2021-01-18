import React from 'react'
import { Flex, Text, Tag } from '@chakra-ui/react'
import Avatar from 'react-avatar'
import { useQuery } from 'urql'

const Listing = (props: any) => {
    const USER_QUERY = `
    query User($id: Float!) {
        user(id: $id) {
            id
            name
        }
    }
    `

    const userId: number = props.id
    const [result] = useQuery({ query: USER_QUERY, variables: {id: userId} })
    const { data, fetching, error } = result
    
    return (
        <Flex
            flexDirection="column"
            alignItems="stretch"
            justifyContent="flex-start"
            border="1px solid gray"
            width="30em"
            p={5}
            rounded="15px"
        >
            <Flex minWidth="100%" alignItems="center" justifyContent="space-between">
                <Flex alignItems="center" minWidth="140px" justifyContent="space-between">
                    <Avatar name={ fetching ? "" : data?.user?.name } round="50%" size="40px" />
                    <Text>{ fetching ? "" : data?.user?.name }</Text>
                </Flex>
                <Text fontWeight="bold" fontSize="2xl">{ props.title }</Text>
            </Flex>
            <Text pt={2}>{ props.body }</Text>
            <Flex justifyContent="space-around">
                {props.tags.split(' ').forEach((tag) => {
                    <Tag mt={5} variant="solid" colorScheme="red">
                        {tag}
                        {console.log(tag)}
                    </Tag>
                })}
            </Flex>
        </Flex>
    )
}

export default Listing
