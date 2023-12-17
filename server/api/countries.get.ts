import { getCountries } from '../services'

export default defineEventHandler(async (event) => {
  const {
    skip,
  } = getQuery(event)

  return await getCountries(Number(skip) || undefined).catch((error) => {
    console.error(error)
    throw createError({
      statusCode: 400,
    })
  })
})
