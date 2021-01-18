import React from 'react'
import { Flex } from '@chakra-ui/react'

interface IProps {
    
}

const NavbarContainer: React.FC<IProps> = ({ children, ...props }) => {
    return (
        <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        mb={8}
        p={8}
        bgColor="white"
        color="green.500"
        {...props}
      >
            {children}
      </Flex>
    )
}

export default NavbarContainer
