import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Box, Container, Flex, InputGroup, Input, InputRightElement, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { ArrowRightIcon } from '@chakra-ui/icons'
import { useSubscription } from '../../generated/graphql'

const ButtonSend = (props: any) => {
    return (
      <IconButton
        type="submit"
        colorScheme="green"
        bgColor="green.600"
        color="white"
        size={useBreakpointValue(["sm", "md"])}
        aria-label="Drop a message"
        title="Drop a message"
        icon={<ArrowRightIcon />}
        {...props}
      />
    );
};

const Groups = () => {
    const router = useRouter()
    const { pid } = router.query

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setMessage(content)
    }

    const [content, setContent] = useState<string | null>(null)
    const [message, setMessage] = useState<string | null>(null)
    const [currentUser, setCurrentUser] = useState("Jalan Singh")
    const [user, setUser] = useState("Jalan Singh")

    const [{ data }] = useSubscription()

    return (
      <>
        <div style={{ 
            display: 'flex', 
            justifyContent: currentUser === user ? 'flex-end' : 'flex-start',
            paddingBottom: '1em' 
        }}>
            {currentUser !== user && (
                <div style={{
                    border: "2px solid #e5e6ea",
                    height: 50,
                    width: 50,
                    borderRadius: 25,
                    fontSize: "22px",
                    marginRight: "0.5em",
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center"
                }}>
                    {user.slice(0,2).toUpperCase()}
                </div>
            )}
            {message ? <div style={{
                background: currentUser === user ? "#58bf56" : "#e6e5ea",
                color: currentUser === user ? 'white' : 'black',
                padding: '1em',
                maxWidth: "60%",
                borderRadius: "1em"
            }}>
                {message}
            </div> : null}
        </div>
        <Box minHeight={["4.5rem", "5rem"]} position="relative">
            <Box
              position="fixed"
              bottom="0"
              left="0"
              width="full"
              py={3}
              borderRadius="4px"
            >
              <Container maxW={{ lg: "1200px" }} px={[4, 4, 6]}>
                <form onSubmit={e => handleSubmit(e)} method="post">
                  <Flex>
                    <InputGroup>
                      <Input
                        id="message"
                        name="message"
                        color="gray.800"
                        bgColor="white"
                        boxShadow="md"
                        height={["3rem", "3.5rem"]}
                        pr="4rem"
                        autoComplete="off"
                        placeholder="Drop a message to others"
                        _placeholder={{ color: "gray.400" }}
                        _selection={{ background: "teal.600", color: "white" }}
                        value={content}
                        onChange={e => setContent(e.target.value)}
                      />
                      <InputRightElement
                        top="50%"
                        transform="translateY(-50%)"
                        right="12px"
                        children={<ButtonSend />}
                      />
                    </InputGroup>
                  </Flex>
                </form>
              </Container>
            </Box>
          </Box>
        </>
    )
}

export default Groups
