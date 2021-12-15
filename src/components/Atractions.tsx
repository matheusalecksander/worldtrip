import { Flex, useBreakpointValue, Text } from '@chakra-ui/react'

import { BulletPoint } from './BulletPoint'

interface AtractionsProps {
  description: string,
  imageUrl: string,
  mr?: string
}

export function Atractions({ description, imageUrl, mr = "0" }: AtractionsProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Flex
      direction={isWideVersion ? "column" : "row"}
      w="110px"
      h="110px"
      align="center"
      justify={isWideVersion ? "space-between" : "center"}
      mr={mr}
      ml={mr}
    >
      {
        isWideVersion ?
          <img src={imageUrl} alt={description} />
          :
          <BulletPoint />
      }
      <Text
        fontWeight="bold"
        fontFamily="Poppins"
        fontSize="smaller"
        ml={isWideVersion ? "0" : "2"}
      >
        {description}
      </Text>

    </Flex>
  )
}