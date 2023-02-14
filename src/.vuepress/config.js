module.exports = {
    dest: 'docs',
    base: 'plan-de-estudios',
    title: 'Plan de estudios',
    description:
        'Acá se mostrará todo lo que veremos en el curso (todo está sujeto a cambios).',
    head: [
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        [
            'meta',
            { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
        ],
    ],
    themeConfig: {
        editLinks: false,
        editLinkText: '',
        lastUpdated: false,
        nav: [
            {
                text: 'Plan de estudios',
                link: '/',
            },
        ],
        sidebar: [
            '/',
            '/01-fundamentos/',
            '/02-introdccion-lenguaje/',
            '/03-sentencias-de-control/',
            '/04-estructuras-de-datos/',
            '/05-ordenamiento/',
            '/06-programacion-orientada-a-objetos/',
            '/07-introducion-desarrollo-web/',
            '/08-html/',
            '/09-css/',
            '/10-js/',
            '/11-reactjs/',
        ],
    },
    plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom'],
}
