import React from 'react'
import { Link, Text } from '@chakra-ui/react'

const MenuItem = ({ children, to="/", ...props }) => {
    return (
        <Link _hover={{ textDecoration: "none" }} href={to}>
            <Text display="block" {...props}>
                {children}
            </Text>
        </Link>
    )
}

export default MenuItem
