import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'

import CountryCard from '~/components/CountryCard.vue'

const item = {
  isPrimary: true,
  isSecondary: false,
  name: 'Valtech_',
  country: 'Front-End',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  imageUrl: 'https://images.unsplash.com/photo-1554147090-e1221a04a025?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D',
}

describe ('countryCard.vue', () => {
  it('should render passed props', async () => {
    const component = await mountSuspended(CountryCard, {
      props: {
        item,
      },
    })

    expect(component.find('h3').text()).toBe(item.country)
    expect(component.find('p').text()).toBe(item.description)
  })
})
