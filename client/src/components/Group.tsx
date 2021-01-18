import React from 'react'
import { Flex, Text, Button, Link } from '@chakra-ui/react'

const Listing = (props: any) => {
    return (
        <Flex
            flexDirection="column"
            alignItems="stretch"
            justifyContent="flex-start"
            border="3px solid green"
            width="30em"
            p={5}
            rounded="15px"
            boxShadow="md"
        >
            <Flex minWidth="100%" alignItems="center" justifyContent="center">
                {/* <Flex alignItems="center" minWidth="140px" justifyContent="space-between">
                    <Avatar name={ fetching ? "" : data?.user?.name } round="50%" size="40px" />
                    <Text>{ fetching ? "" : data?.user?.name }</Text>
                </Flex> */}
                <Text fontWeight="bold" fontSize="2xl">{ props.name }</Text>
            </Flex>
            <Text pt={2}>{ props.description }</Text>
            <br />
            <Link width="100%" _hover={{ textDecoration: "none" }} href={`/groups/${props.id}`}>
                <Button width="100%" bgGradient="linear(to-r, green.300, green.600)" color="white" _hover={{ background: "green" }}>
                    Go to group
                </Button>
            </Link>
        </Flex>
    )
}

export default Listing
