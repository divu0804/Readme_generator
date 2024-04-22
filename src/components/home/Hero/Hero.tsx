import * as React from 'react'
import { useTranslation } from 'next-i18next'
import {
  Container,
  Group,
  Button,
  useMantineTheme,
  Text,
  Space,
  Box,
} from '@mantine/core'
import { NextLink } from '@mantine/next'

const BREAKPOINT = '@media (max-width: 960px)'

export interface IHeroProps {}

export function Hero(props: IHeroProps) {
  const theme = useMantineTheme()
  const { t } = useTranslation('home')

  return (
    <Container size="xl" px="16px" mt="xl" style={{ color: 'white' }}>
      <Container
        sx={() => ({
          textAlign: 'center',
        })}
      >
        <Box
          component="h1"
          sx={() => ({
            fontSize: '3.5rem',
            lineHeight: '4rem',
            fontWeight: 800,
            letterSpacing: '-.025em',
            marginBottom: '1rem',
            backgroundImage: 'linear-gradient(to right, rgb(96, 165, 250), rgb(52, 211, 153))',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          })}
        >
          Create READMEs <br /> with ease
        </Box>
        <Text
          sx={() => ({
            fontSize: 24,
            color: 'white',
            [BREAKPOINT]: {
              fontSize: 18,
            },
          })}
        >
          Generate professional READMEs for your projects in minutes. Share your
          project's story, installation instructions, usage examples, and much more.
        </Text>
        <Space h="lg" />
        <Group position="center">
          <Button
            component={NextLink}
            href="/editor"
            size="xl"
            variant="gradient"
            gradient={{ from: 'blue', to: 'teal', deg: 105 }}
            sx={() => ({
              width: '100%',
              [theme.fn.largerThan('sm')]: {
                width: 'auto',
              },
            })}
          >
            Get started
          </Button>
        </Group>
        <Space h="lg" />
        <Container
          sx={() => ({
            textAlign: 'left',
          })}
        >
          <Box
            sx={() => ({
              backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent white background
              padding: '20px',
              borderRadius: '8px',
              marginBottom: '20px',
            })}
          >
            {/* Image Box */}
            <Text
              sx={() => ({
                fontSize: 20,
                color: 'white',
                marginBottom: '10px',
              })}
            >
            </Text>
            <Box
              sx={() => ({
                border: '2px solid white', // White border around the image
              })}
            >
              <img src="/fonts/p1.png" alt="Project Image" style={{ width: '100%' }} />
            </Box>
          </Box>
          <Box
            sx={() => ({
              backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent white background
              padding: '20px',
              borderRadius: '8px',
            })}
          >
            {/* Feature List */}
            <Text
              sx={() => ({
                fontSize: 20,
                color: 'white',
                marginBottom: '10px',
              })}
            >
              Features:
            </Text>
            <ul>
              <li>User-friendly editor: Create your README files with ease using our intuitive editor.</li>
              <li>Customizable template: Choose from a variety of sections to get started quickly.</li>
            </ul>
          </Box>
        </Container>
      </Container>
    </Container>
  )
}
