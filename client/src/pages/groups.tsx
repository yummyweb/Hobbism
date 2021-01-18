import React from 'react'
import { useGroupsQuery } from '../generated/graphql'
import { Flex, SimpleGrid } from '@chakra-ui/react'
import Group from '../components/Group'

const Groups = () => {
    const [{ data, fetching }] = useGroupsQuery()
    let groupsInfo
    if (fetching) groupsInfo = null
    else groupsInfo = data?.groups

    return (
        <Flex justifyContent="center">
            <SimpleGrid columns={[1, null, 2]} spacing="40px">
                {groupsInfo ? groupsInfo.map(group => (
                    <Group name={group.name} id={group.id} description={group.description} />
                )) : "Loading..."}
            </SimpleGrid>
        </Flex>
    )
}

export default Groups
