import { useBreakpointValue, Box, Flex, Text } from '@chakra-ui/react'

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Box
      bgImage="url('/images/background.png')"
      bgSize="cover"
      bgRepeat="no-repeat"
      w="100%"
      h={isWideVersion ? 300 : 165}
      mb={isWideVersion ? "40px" : 0}
    >
      <Flex
        justify="space-between"
        w="80%"
        mx="auto"
        h={isWideVersion ? 340 : 165}
      >
        <Flex
          direction="column"
          align="flex-start"
          justify="center"
          h={isWideVersion ? "300px" : "165px"}
          flex={1}
        >
          <Text fontFamily="Poppins" fontSize="2xl" fontWeight="medium" color="gray.200" >
            5 Continentes,
            <Text>infinitas possibilidades.</Text>
          </Text>
          <Text fontFamily="Poppins" fontWeight="regular" color="gray.400" >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Flex>
        {
          isWideVersion &&
          <img src='/images/airplane.svg' alt='Avião' />
        }
      </Flex>
    </Box>
  )
}