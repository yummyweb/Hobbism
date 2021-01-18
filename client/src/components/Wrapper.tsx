import React from 'react'
import { Box } from '@chakra-ui/react'

interface IProps {
    variant: "small" | "regular"
}

const Wrapper: React.FC<IProps> = ({ children, variant="regular" }) => {
    return (
        <Box mt={8} mx="auto" maxW={variant == "regular" ? "800px" : "400px"} w="100%">{children}</Box>
    )
}

export default Wrapper
