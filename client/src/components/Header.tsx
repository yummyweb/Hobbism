import React, { useState } from 'react'
import NavbarContainer from './NavbarContainer'
import MenuLinks from './MenuLinks'
import MenuToggle from './MenuToggle'
import Logo from './Logo'
import { useMeQuery } from '../generated/graphql'

interface IProps {
    
}

const Header: React.FC<IProps> = ({ ...props }) => {
    const toggle = () => setIsOpen(!isOpen)
    const [isOpen, setIsOpen] = useState(false)
    const [{ data, fetching }] = useMeQuery()

    let loggedIn: boolean = false
    if (fetching) loggedIn = false
    else if (data.me) loggedIn = true
    else loggedIn = false

    return (
        <NavbarContainer {...props}>
            <Logo
                w="100px"
                color="green.400"
            />
            <MenuToggle toggle={toggle} isOpen={isOpen} />
            <MenuLinks name={loggedIn ? data.me.name : null} loggedIn={loggedIn} isOpen={isOpen} />
        </NavbarContainer>
    )
}

export default Header
