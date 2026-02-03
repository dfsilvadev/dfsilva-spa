import { useTranslation } from 'react-i18next'
import { House } from 'phosphor-react'

export function Home() {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <House size={48} weight="duotone" className="text-indigo-500" />
      <h1 className="text-2xl font-bold">{t('welcome')}</h1>
      <p className="text-gray-600 dark:text-gray-400">{t('home')}</p>
    </div>
  )
}
