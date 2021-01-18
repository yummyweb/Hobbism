import React from 'react'
import { Flex, Box, Text, SimpleGrid } from '@chakra-ui/react'
import Avatar from 'react-avatar'
import { useMeQuery, useListingsQuery } from '../generated/graphql'
import Listing from '../components/Listing'

const Profile = () => {
    const [{ data, fetching }] = useMeQuery()
    const [{ data: listingsData, fetching: loading }] = useListingsQuery()

    let body: any = null
    if (fetching) body = null
    else if (data.me) body = data.me
    else body = null

    return (
        <Flex>
            <Box
                minWidth="100%"
                display="flex"
                justifyContent="center"
                flexDirection="column"
                alignItems="center"
                minHeight="100%"
            >
                <Avatar round="50%" name={body ? body.name : ""} />
                <Text fontWeight="bold" color="green.600" fontSize="2xl" mt={4}>
                    { body ? body.name : "" }
                </Text>

                {/* Listings Section */}
                <Flex minWidth="80%" pt={5} pb={5} justifyContent="center" mt={10}>
                    <SimpleGrid columns={[1, null, 2]} spacing="40px">
                        {!loading ? listingsData?.listings?.map(listing => (
                            <Listing title={listing.title} body={listing.body} tags={listing.tags} id={listing.creatorId} />
                        )) : "Loading..."}
                    </SimpleGrid>
                </Flex>
            </Box>
        </Flex>
    )
}

export default Profile
