// Les formations ne sont plus maintenues dans MyPLE : le catalogue vit sur le site Didanum
const trainingCatalog: Record<string, string> = {
  fr: "https://www.unifr.ch/didanum/fr/formations/catalogue/?targetgroups=15",
  it: "https://www.unifr.ch/didanum/fr/formations/catalogue/?targetgroups=15",
  de: "https://www.unifr.ch/didanum/de/ausbildung/katalog/?targetgroups=15"
}

export const useTrainingCatalogUrl = () => {
  const { locale } = useI18n()
  return computed(() => trainingCatalog[locale.value] ?? trainingCatalog.fr)
}
