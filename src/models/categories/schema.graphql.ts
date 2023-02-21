export const typeDefs = `#graphql
    type Category {
        name: String
    }
    type Query {
        categories: [Category]
    }
`;
