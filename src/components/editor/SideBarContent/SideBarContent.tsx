import * as React from 'react'
import { SidebarFilterForm, SideBarListCard } from '~/components/editor'
import { useAtomValue } from 'jotai/utils'
import { Navbar, ScrollArea, Box, List } from '@mantine/core'
import { inActiveBlocksAtom, allBlocks } from '~/store'

export function SideBarContent() {
  const list = useAtomValue(inActiveBlocksAtom)
  const blocks = useAtomValue(allBlocks)
  const [query, setQuery] = React.useState('')

  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.currentTarget.value)

  const data = React.useMemo(
    () =>
      list.map((id) => ({
        id,
        name: blocks[id]?.name,
      })),
    [list, blocks]
  )

  const filteredData = React.useMemo(
    () => data.filter(({ name }) => name.toLowerCase().includes(query.toLowerCase())),
    [data, query]
  )

  return (
    <>
      <Navbar.Section>
        <SidebarFilterForm query={query} handleQuery={handleQuery} />
      </Navbar.Section>
      <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
        <Box py="md">
          <List listStyleType="none">
            {filteredData.map(({ id, name }) => (
              <SideBarListCard id={id} name={name} key={id} />
            ))}
          </List>
        </Box>
      </Navbar.Section>
    </>
  )
}
