import { createApi } from 'unsplash-js'
import { fetch } from 'ofetch'

const config = useRuntimeConfig()
const ACCESS_KEY = config.public.UNSPLASH_ACCESS_KEY

export const unsplash = createApi({
  accessKey: `${ACCESS_KEY}`,
  fetch,
})
