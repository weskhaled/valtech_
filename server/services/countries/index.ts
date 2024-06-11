import { ofetch } from 'ofetch'
import { unsplash } from '../../utils'
import staticCountries from './staticCountries.json'

const config = useRuntimeConfig()
const API_RESTCOUNTRIES_URL = config.public.API_RESTCOUNTRIES_URL

const countries: any[] = staticCountries

async function getAllCountries() {
  if (countries.length > staticCountries.length)
    return countries

  const result = await ofetch(`${API_RESTCOUNTRIES_URL}/rest/v2/all`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })

  countries.push(...result)

  return countries
}

export async function getCountries(skip = 0) {
  // Disabled get countries from API
  // await getAllCountries()

  const from = skip
  const to = skip + 21

  const { response } = await unsplash.search.getPhotos({
    query: 'nature',
    perPage: 21,
    orientation: 'squarish',
  })

  const ResultCountries = countries.slice(from, to).map(country => ({
    name: country.country || country.country?.capital[0],
    logoUrl: country.logoUrl,
    country: country.name.common || country.name,
    description: country.description,
    imageUrl: country.imageUrl,
    flag: country.flags?.svg,
    latlng: country.latlng,
  }))

  const resultImages = response?.results.map((image: any) => ({
    imageUrl: image.urls.regular,
    alt: image.alt_description,
  }))

  return Array.from({ length: 21 }, (_, index) => ({
    isPrimary: index === 0 || index === 7 || index === 14,
    isSecondary: index === 1 || index === 6 || index === 8 || index === 13 || index === 17 || index === 18,
    name: ResultCountries[index]?.name,
    logoUrl: ResultCountries[index]?.logoUrl,
    country: ResultCountries[index]?.country,
    description: ResultCountries[index]?.description,
    imageUrl: ResultCountries[index]?.imageUrl || (resultImages ? resultImages[index]?.imageUrl : ''),
    alt: resultImages ? resultImages[index]?.alt : '',
    extras: {
      flag: ResultCountries[index]?.flag,
      latlng: ResultCountries[index]?.latlng,
    },
  }))
}
