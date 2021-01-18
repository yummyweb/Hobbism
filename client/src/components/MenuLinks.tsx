import React from 'react'
import { Box, Stack, Button } from '@chakra-ui/react'
import MenuItem from './MenuItem'
import { useColorMode, IconButton } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

interface IProps {
    isOpen: boolean,
    loggedIn: boolean,
    name: string | null
}

const MenuLinks: React.FC<IProps> = ({ isOpen, loggedIn, name }) => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
        >
            <Stack
                spacing={8}
                align="center"
                justify={["center", "space-between", "flex-end", "flex-end"]}
                direction={["column", "row", "row", "row"]}
                pt={[4, 4, 0, 0]}
            >
                {loggedIn ? 
                    <>
                        <MenuItem to="/profile">{ name }</MenuItem>
                        <MenuItem to="/explore">Explore</MenuItem>
                        <MenuItem to="/groups">Groups</MenuItem>
                        <MenuItem to="/create/listing" isLast>
                            <Button
                                size="sm"
                                rounded="md"
                                color="white"
                                bg="green.500"
                                _hover={{ bg: "green.400", color: "white" }}
                            >
                                + Create new listing
                            </Button>
                        </MenuItem>
                        <IconButton aria-label="moon" onClick={toggleColorMode} icon={colorMode === "Dark" ? <SunIcon /> : <MoonIcon />} />
                    </>
                :
                    <>
                        <MenuItem to="/login">Login</MenuItem>
                        <MenuItem to="/register" isLast>
                            <Button
                                size="sm"
                                rounded="md"
                                color="white"
                                bg="green.500"
                                _hover={{ bg: "green.400", color: "white" }}
                            >
                                Create Account
                            </Button>
                        </MenuItem>
                        <IconButton aria-label="moon" onClick={toggleColorMode} icon={colorMode === "Dark" ? <SunIcon /> : <MoonIcon />} />
                    </>
                }
            </Stack>
        </Box>
    )
}

export default MenuLinks
