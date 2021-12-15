import { Flex, Button } from '@chakra-ui/react'
import Link from 'next/link'

interface HeaderProps {
  backButton?: boolean
}

export function Header({ backButton = false }: HeaderProps) {
  return (
    <Flex as="header"
      w="100%"
      maxWidth={1920}
      mx="auto"
      align="center"
      p="3"
    >
      {
        backButton &&
        <Flex
          width="20%"
          justify="center"
          bg="transparent"
        >
          <Link href="/">
            <Button as="a">
              <img src='/images/chevronleft.svg' alt='botão voltar' />
            </Button>
          </Link>
        </Flex>
      }
      <Flex
        flex={1}
        justify="center"
        ml={backButton ? "-20%" : "0%"} // Mantém a logo sempre centralizada
      >
        <img src='/images/logo.svg' alt='Logo WorldTrip' />
      </Flex>
    </Flex>
  )
}