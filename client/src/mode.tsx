import { useColorModeValue } from '@chakra-ui/react'

function Mode() {
    const colorPrimary = useColorModeValue("green.", "gray.800")
    const colorHeading = useColorModeValue("green.700", "green.200")
    const colorSecondary = useColorModeValue("green.400", "gray.700")
}

export { Mode }