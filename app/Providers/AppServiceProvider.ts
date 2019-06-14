import Octokit from '@octokit/rest'
import { Container } from 'typedi'
import Jira from '@atlassian/jira'
import { CacheProxy } from '../Services/CacheProxy';
const Netlify = require('netlify')
const Heroku = require('heroku-client')
const Cache = require('cached')
import * as config from '../../config'

export class AppServiceProvider
{
    register()
    {
        // GitHub
        const octokit = new Octokit({ auth: config.services.github.token })
        Container.set(Octokit, octokit)

        // Netlify
        const netlify = new Netlify(config.services.netlify.token, {
            pathPrefix: '/api/v1/digital-risks'
        })
        Container.set('Netlify', netlify)

        // Heroku
        const heroku = new Heroku({
            token: config.services.heroku.token,
            headers: {
                Accept: [
                    'application/vnd.heroku+json; version=3.review-apps',
                    'application/vnd.heroku+json; version=3.pipelines',
                ],
            },
        })
        Container.set('Heroku', heroku)

        // Heroku Kolkrabbi
        const kolkrabbi = new Heroku({
            host: 'https://kolkrabbi.heroku.com',
            token: config.services.heroku.token,
        })
        Container.set('Kolkrabbi', kolkrabbi)

        // JIRA
        const jira = new Jira({ baseUrl: config.services.jira.base })
        jira.authenticate(config.services.jira.auth)
        Container.set(Jira, jira)

        // Cache
        const cache = Cache(config.app.name, { backend: { type: config.cache.driver }})
        Container.set('Cache', cache)
    }
}
