import '~/styles/markdown-color.css'
import '~/styles/markdown.css'
import React, { useState } from 'react'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { MantineProvider, ColorScheme, ColorSchemeProvider, Global } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'

function MyApp(props: AppProps) {
  const { Component, pageProps } = props
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'dark', // Set the default color scheme to dark
  })

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        theme={{ colorScheme, fontFamily: 'Manrope, sans serif' }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Global
          styles={[
            {
              '@font-face': {
                src: `url('/fonts/Manrope.woff2') format("woff2")`,
                fontFamily: 'Manrope',
                fontStyle: 'normal',
                fontWeight: '100 900',
                fontDisplay: 'swap',
              },
            },
            // Set the default background color to black
            {
              'html, body': {
                backgroundColor: 'black',
              },
            },
          ]}
        />
        <Component {...pageProps} />
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default appWithTranslation(MyApp)
