export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'image',
            type: 'image',
            title: 'Image'
        },
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'slug',
            type: 'string',
            title: 'slug'
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price'
        },
        {
            name: 'description',
            type: 'string',
            title: 'Description'
        }

        
    ]
}