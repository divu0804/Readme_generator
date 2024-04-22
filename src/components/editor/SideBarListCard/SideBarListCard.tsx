import { FiPlus } from 'react-icons/fi'
import { makeBlockActiveAtom } from '~/store'
import { useUpdateAtom } from 'jotai/utils'
import { ThemeIcon, UnstyledButton, Text, ListItem, Box } from '@mantine/core'

export interface ISideBarListCardProps {
  name: string
  id: string
}

export function SideBarListCard({ name, id }: ISideBarListCardProps) {
  const makeBlockActive = useUpdateAtom(makeBlockActiveAtom);

  const handleClick = () => {
    makeBlockActive({ id });
  };

  return (
    <ListItem>
      <UnstyledButton
        onClick={handleClick}
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '10px',
          borderRadius: '8px',
          backgroundColor: 'transparent',
          transition: 'background-color 0.3s ease',
          cursor: 'pointer',
        }}
      >
        <ThemeIcon color="blue" style={{ marginRight: '10px' }}>
          <FiPlus />
        </ThemeIcon>
        <Box style={{ flex: 1 }}>
          <Text size="sm" style={{ margin: 0, fontFamily: 'Arial, sans-serif' }}>{name}</Text>
        </Box>
      </UnstyledButton>
    </ListItem>
  );
}
