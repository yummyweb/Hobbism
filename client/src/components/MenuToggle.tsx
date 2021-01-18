import React, { MouseEventHandler } from 'react'
import { Box } from '@chakra-ui/react'
import CloseIcon from '../icons/CloseIcon'
import MenuIcon from '../icons/MenuIcon'

interface IProps {
    toggle: MouseEventHandler<HTMLDivElement>,
    isOpen: boolean
}

const MenuToggle: React.FC<IProps> = ({ toggle, isOpen }) => {
    return (
        <Box display={{ base: "block", md: "none" }} onClick={toggle}>
            {isOpen ? <CloseIcon /> : <MenuIcon />}
        </Box>
    )
}

export default MenuToggle
