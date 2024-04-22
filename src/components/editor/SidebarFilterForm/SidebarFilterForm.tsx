import { useAtom } from 'jotai'
import * as React from 'react'
import { FiPlus } from 'react-icons/fi'
import { customBlockModalStateAtom } from '~/store'
import CustomBlockModal from '../CustomBlockModal/CustomBlockModal'
import { useTranslation } from 'next-i18next'
import { Stack, Button, TextInput } from '@mantine/core'

export interface ISidebarFilterFormProps {
  query: string
  handleQuery: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function SidebarFilterForm({ query, handleQuery }: ISidebarFilterFormProps) {
  const [isOpen, toggleModal] = useAtom(customBlockModalStateAtom)
  const { t } = useTranslation('editor')
  return (
    <Stack spacing="sm">
      <TextInput
        value={query}
        onChange={handleQuery}
        placeholder={t('search-placeholder')}
        aria-label="Search blocks"
        style={{ fontFamily: 'Arial, sans-serif' }}
      />
      <Button
        leftIcon={<FiPlus />}
        onClick={() => toggleModal()}
        style={{ fontFamily: 'Arial, sans-serif' }}
      >
        {t('custom-block')}
      </Button>
      {isOpen ? <CustomBlockModal /> : null}
    </Stack>
  )
}
