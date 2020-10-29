import {
  Link as ChakraLink,
  Text,
  Code,
  Icon,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/core'

import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'

const Index = () => (
  <Container>
    <Hero />
    <Main>
    </Main>

    <DarkModeSwitch />
  </Container>
)

export default Index
