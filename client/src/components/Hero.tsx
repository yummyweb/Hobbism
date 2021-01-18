import React from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Heading,
  Stack,
  Text
} from "@chakra-ui/react";
import { useMeQuery, useLogoutMutation } from '../generated/graphql'
import { useRouter } from 'next/router'

export default function Hero({
  title,
  subtitle,
  image,
  ctaText,
  ...rest
}) {
  const [{ data, fetching }] = useMeQuery()
  let loggedIn: boolean

  if (fetching) loggedIn = false
  else if (data?.me) loggedIn = true
  else loggedIn = false

  const [, logout] = useLogoutMutation()

  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      minH="70vh"
      px={8}
      mb={16}
      {...rest}
    >
      <Stack
        spacing={4}
        w={{ base: "80%", md: "40%" }}
        align={["center", "center", "flex-start", "flex-start"]}
      >
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="green.700"
          textAlign={["center", "center", "left", "left"]}
        >
          {title}
        </Heading>
        <Heading
          as="h2"
          size="md"
          color="green.800"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={["center", "center", "left", "left"]}
        >
          {subtitle}
        </Heading>
          <Button
            bg="green.500"
            color="white"
            borderRadius="8px"
            _hover={{ bg: "green.400", color: "white" }}
            py="4"
            px="4"
            lineHeight="1"
            size="md"
            onClick={async () => {
              if (loggedIn) {
                await logout()
                window.location.reload()
              }
            }}
          >
            {!loggedIn ? "Create your account now" : "Logout"}
          </Button>
        <Text
          fontSize="xs"
          mt={2}
          textAlign="center"
          color="green.700"
          opacity="0.6"
        >
          No credit card required.
        </Text>
      </Stack>
      <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
        <Image src={image} size="100%" rounded="1rem" shadow="2xl" />
      </Box>
    </Flex>
  );
}
