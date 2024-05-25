import { Stack} from 'expo-router'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://zerjavinec.us-east-a.ibm.stepzen.net/api/exacerbated-mite/__graphql',
    cache: new InMemoryCache(),
    headers: {
        Authorization:
        'apikey zerjavinec::local.net+1000::55fdefe4a6e2f4d5f9c39dbd1087d22c59f5f9ffdc4ed8493e4ad09196848782'
    }
});

const RootLayout = () => {
    return (
        <ApolloProvider client={client}>
            <Stack screenOptions={{
                headerShown: false,
            }}
                   >
            </Stack>
        </ApolloProvider>
    );
};

export default RootLayout;