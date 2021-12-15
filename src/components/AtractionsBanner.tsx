import { Flex, useBreakpointValue } from '@chakra-ui/react'
import { Atractions } from './Atractions'

export function AtractionsBanner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
  return (
    <Flex
      width="80%"
      mx="auto"
      justify={isWideVersion ? "space-between" : "center"}
      flexWrap="wrap"
    >
      <Atractions
        description="Vida noturna"
        imageUrl="/images/cocktail.svg"
        mr="5"
      />
      <Atractions
        description="Praia"
        imageUrl="/images/surf.svg"
        mr="5"
      />
      <Atractions
        description="Moderno"
        imageUrl="/images/building.svg"
        mr="5"
      />
      <Atractions
        description="Clássico"
        imageUrl="/images/museum.svg"
        mr="5"
      />
      <Atractions
        description="... e mais"
        imageUrl="/images/earth.svg"
      />
    </Flex>
  )
}