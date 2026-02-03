import { useTranslation } from 'react-i18next'
import { Info } from 'phosphor-react'
import { motion } from 'framer-motion'

export function About() {
  const { t } = useTranslation()
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center gap-4 p-8"
    >
      <Info size={48} weight="duotone" className="text-emerald-500" />
      <h1 className="text-2xl font-bold">{t('about')}</h1>
    </motion.div>
  )
}
