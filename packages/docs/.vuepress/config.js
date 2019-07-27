module.exports = {
    title: 'Looped',
    description: 'The TypeScript starter kit inspired by the DX of Laravel',
    port: process.env.PORT,
    themeConfig: {
        logo: '/hero.png',
        sidebar: [
            {
                title: 'Prologue',
                collapsable: false,
                children: [
                    '/introduction.html',
                    '/contributions.html',
                ]
            },
            {
                title: 'Getting Started',
                collapsable: false,
                children: [
                    '/installation.html',
                    '/configuration.html',
                    '/structure.html',
                ]
            },
            {
                title: 'Architecture Concepts',
                collapsable: false,
                children: [
                    '/lifecycle.html',
                    '/container.html',
                    '/providers.html',
                ]
            },
            {
                title: 'The Basics',
                collapsable: false,
                children: [
                    '/routing.html',
                    '/middleware.html',
                    '/controllers.html',
                    '/requests.html',
                    '/responses.html',
                    '/views.html',
                    '/templates.html',
                    '/validation.html',
                    '/errors.html',
                    '/logging.html',
                    '/localization.html',
                ]
            },
            {
                title: 'Security',
                collapsable: false,
                children: [
                    '/authentication.html',
                    '/authorization.html',
                    '/verification.html',
                    '/encryption.html',
                    '/hashing.html',
                    '/passwords.html',
                ]
            },
            {
                title: 'Digging Deeper',
                collapsable: false,
                children: [
                    '/artisan.html',
                    '/broadcasting.html',
                    '/cache.html',
                    '/collections.html',
                    '/events.html',
                    '/filesystem.html',
                    '/helpers.html',
                    '/mail.html',
                    '/notifications.html',
                    '/packages.html',
                    '/queues.html',
                    '/scheduling.html',
                ]
            },
            {
                title: 'Database',
                collapsable: false,
                children: [
                    '/database.html',
                    '/queries.html',
                    '/pagination.html',
                    '/migrations.html',
                    '/seeding.html',
                    '/redis.html',
                ]
            },
            {
                title: 'Eloquent ORM',
                collapsable: false,
                children: [
                    '/eloquent.html',
                    '/eloquent-relationships.html',
                    '/eloquent-collections.html',
                    '/eloquent-mutators.html',
                    '/eloquent-resources.html',
                    '/eloquent-serialization.html',
                ]
            },
            {
                title: 'Testing',
                collapsable: false,
                children: [
                    '/testing.html',
                    '/http-tests.html',
                    '/console-tests.html',
                    '/dusk.html',
                    '/database-testing.html',
                    '/mocking.html',
                ]
            },
            {
                title: 'Official Packages',
                collapsable: false,
                children: [
                    '/billing.html',
                    '/dusk.html',
                    '/envoy.html',
                    '/horizon.html',
                    '/passport.html',
                    '/scout.html',
                    '/socialite.html',
                    '/telescope.html',
                ]
            },
        ],
        nav: [
            { text: 'Home', link: '/' },
            { text: 'GitHub', link: 'https://github.com/morrislaptop/looped' },
        ]
    }
}
