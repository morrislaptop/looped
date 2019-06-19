import { EnvMerger } from "../../app/Services/EnvMerger";

// Run tests
describe("env-merger", () => {

  test("should merge environment variables with vue prefix", () => {
    // Arrange.
    const env1 = {
        VUE_APP_RATING_ENGINE_API_URL: 'https://rating-engine-api-stage.herokuapp.com',
        VUE_APP_QUOTE_API_URL: 'https://quote-api-stage.herokuapp.com/',
        VUE_APP_SOME_SECRET: 'test',
    }
    const env2 = {
        QUOTE_API_URL: 'https://quote-api-dr-357-custom-misd76.herokuapp.com/',
    }

    // Act.
    const env = (new EnvMerger()).mergeWithPrefix(env1, env2)

    // Assert.
    expect(env).toEqual({
        VUE_APP_RATING_ENGINE_API_URL: 'https://rating-engine-api-stage.herokuapp.com',
        VUE_APP_QUOTE_API_URL: 'https://quote-api-dr-357-custom-misd76.herokuapp.com/',
        VUE_APP_SOME_SECRET: 'test',
    })
  })

  test("should create env objet from heroku apps", () => {
    // Arrange.
    const apps = {
        'quote-api': {
            id: 'adfasf',
            name: 'quote-api-dr-357-custom-misd76',
            web_url: 'https://quote-api-dr-357-custom-misd76.herokuapp.com/',
        },
        'rating-engine-api': {
            id: 'adfasf',
            name: 'rating-engine-api-dr-357-custom-misd76',
            web_url: 'https://rating-engine-api-dr-357-custom-misd76.herokuapp.com/',
        }
    }

    // Act.
    const env = (new EnvMerger()).fromHerokuApps(apps)

    // Assert.
    expect(env).toEqual({
        QUOTE_API_URL: 'https://quote-api-dr-357-custom-misd76.herokuapp.com/',
        RATING_ENGINE_API_URL: 'https://rating-engine-api-dr-357-custom-misd76.herokuapp.com/',
    })
  })

  test('should prefix ticket numbers to eventstore vars', () => {
    // Arrange.
    const env = {
        EVENTSTORE_STREAM_QUOTES: 'quotes',
        EVENTSTORE_SUBSCRIPTION_GROUP: 'some-service',
        EVENTSTORE_SUBSCRIPTION_STREAMS: 'quotes,accounts',
        EVENTSTORE_WEB_URL: 'adfas',
        STREAM_PREFIX: '.',
        SOME_SECRET: 'test',
    }

    // Act.
    const prefixed = (new EnvMerger()).prefixTicketToEventstoreVars(env, 'DR-123')

    // Assert.
    expect(prefixed).toEqual({
        EVENTSTORE_STREAM_QUOTES: 'DR-123-quotes',
        EVENTSTORE_SUBSCRIPTION_GROUP: 'DR-123-some-service',
        EVENTSTORE_SUBSCRIPTION_STREAMS: 'DR-123-quotes,DR-123-accounts',
        EVENTSTORE_WEB_URL: 'adfas',
        STREAM_PREFIX: 'DR-123-',
        SOME_SECRET: 'test',
    })
  })

})
