import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'


export const client = sanityClient({
    projectId: 'tasv04v8',
    dataset: 'production',
    apiVersion:'2022-02-01',
    token:'skMBygk5OQgtsFzUdYOCQhw8IqndFJE2NfFnEahpO1wA6P4rIpBzXNyNkmnNfO5mdOKNM2iI5pZWEZayAU9dapMF6pdSQgfvVgJxX4eAnYxsrIBRJWptJnnlBZiEA3uoTToShr5GJgiVXxuKHknz3UEMcO4YoQewv6YkG7OexwXHX3MvmAoA',
    useCdn: true,
})

const builder= imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)