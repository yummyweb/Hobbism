import React from 'react'
import Listing from '../components/Listing'
import { useListingsQuery } from '../generated/graphql'
import { SimpleGrid, Flex } from '@chakra-ui/react'

const Explore = () => {
    const [{ data, fetching }] = useListingsQuery()
    let listingInfo
    if (fetching) listingInfo = null
    else listingInfo = data?.listings

    return (
        <Flex justifyContent="center">
            <SimpleGrid columns={[1, null, 2]} spacing="40px">
                {listingInfo ? listingInfo.map(listing => (
                    <Listing title={listing.title} body={listing.body} tags={listing.tags} id={listing.creatorId} />
                )) : "Loading..."}
            </SimpleGrid>
        </Flex>
    )
}

export default Explore
