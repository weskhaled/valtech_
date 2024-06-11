import type { Meta, StoryObj } from '@storybook/vue3'

import CountryCard from './CountryCard.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'Example/CountryCard',
  component: CountryCard,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  decorators: [() => ({ template: '<div style="margin: 0.5rem;"><story/></div>' })],
  argTypes: {
    // Props
    item: { control: 'object' },
    style: { control: 'object' },
  },

} satisfies Meta<typeof CountryCard>

export default meta
type Story = StoryObj<typeof meta>

export const CountryCardStory: Story = {
  args: {
    style: {
      height: '400px',
    },
    item: {
      isPrimary: true,
      isSecondary: false,
      name: 'Valtech_',
      country: 'Front-End',
      logoUrl: undefined,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nihil adipisci nobis recusandae blanditiis cum.',
      imageUrl: 'https://images.unsplash.com/photo-1554147090-e1221a04a025?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D',
    },
  },
}
