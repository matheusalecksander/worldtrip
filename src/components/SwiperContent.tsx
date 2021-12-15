import { Flex, Text, useBreakpointValue } from '@chakra-ui/react'

export function SwiperContent() {
  const isWideVersion = useBreakpointValue({
    base: false,
    large: true,
  })
  return (
    <Flex w="80%" justify="center" mx="auto">
      <Flex direction="column" align="center">
        <Text fontFamily="Poppins" fontSize={isWideVersion ? "6xl" : "xl"} fontWeight="medium">
          Vamos nessa?
        </Text>
        <Text fontFamily="Poppins" fontSize={isWideVersion ? "6xl" : "xl"} fontWeight="medium">
          Então escolha seu continente
        </Text>
      </Flex>
    </Flex>
  )
}