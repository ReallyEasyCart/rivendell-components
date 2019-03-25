
new Vue({
    el: '#app',
    data: {
        designs: {
            header: {
                default: {
                    name: 'Clean <em>- Rivendell Default</em>',
                    image: './docs/default-screenshots/rivendell-default-header-desktop-ecom.png',
                    instructions: [
                        'This is the default header so no changes needed',
                    ],
                },
                'top-bar-and-right-menu': {
                    name: 'Topbar &amp; Right Menu',
                    image: './headers/top-bar-and-right-menu/screenshots/cms-header-desktop.png',
                    instructions: [
                        'In the rivendell template, replace the following files:',
                        'Replace html/sections/header.html.twig with <a href="./headers/top-bar-and-right-menu/html/sections/header.html.twig" target="_blank">this file content</a>',
                        'Replace scss/layout/header.scss with <a href="./headers/top-bar-and-right-menu/scss/layout/header.scss" target="_blank">this file content</a>',
                        'Replace scss/layout/header-nav.scss with <a href="./headers/top-bar-and-right-menu/scss/layout/header-nav.scss" target="_blank">this file content</a>',
                    ],
                },
                'center-logo-3-col': {
                    name: 'Centered Structure',
                    image: './headers/center-logo-3-col/screenshots/header-center-logo-3col-desktop.png',
                    instructions: [
                        'In the rivendell template, replace the following files:',
                        'Replace html/sections/header.html.twig with <a href="./headers/center-logo-3-col/html/sections/header.html.twig" target="_blank">this file content</a>',
                        'Replace scss/layout/header.scss with <a href="./headers/center-logo-3-col/scss/layout/header.scss" target="_blank">this file content</a>',
                        'Replace scss/layout/header-nav.scss with <a href="./headers/center-logo-3-col/scss/layout/header-nav.scss" target="_blank">this file content</a>',
                    ],
                },
                'center-search': {
                    name: 'Centered Search',
                    image: './headers/center-search/screenshots/center-search-ecom-desktop-header.png',
                    instructions: [
                        'In the rivendell template, replace the following files:',
                        'Replace html/sections/header.html.twig with <a href="./headers/center-search/html/sections/header.html.twig" target="_blank">this file content</a>',
                        'Replace scss/layout/header.scss with <a href="./headers/center-search/scss/layout/header.scss" target="_blank">this file content</a>',
                        'Replace scss/layout/header-nav.scss with <a href="./headers/center-search/scss/layout/header-nav.scss" target="_blank">this file content</a>',
                    ],
                },
            },
            slider: {
                default: {
                    name: 'Above content',
                    image: './docs/default-screenshots/middle-above-content.png',
                    instructions: [
                        'This is the default slider layout so no changes needed',
                    ],
                },
                'sidebar': {
                    name: 'Next to sidebar',
                    image: './docs/default-screenshots/middle-sidebar.png',
                    instructions: [
                        'Edit the html/layouts/index.html.twig file.',
                        'Move the content_slider block into the #main element later down',
                    ]
                },
                'full-width': {
                    name: 'Full width',
                    image: './docs/default-screenshots/middle-full-width.png',
                    instructions: [
                        'Edit the html/layouts/index.html.twig file',
                        'Move the content_slider block above the #middle element',
                        'To close off that margin at the top between the slider and the header, add this to your scss: <code>.slider-slides { margin-top: 0; }</code>',
                    ],
                },
            },
            footer: {
                default: {
                    name: 'Centered <em>- Rivendell Default</em>',
                    image: './docs/default-screenshots/rivendell-default-footer-desktop.png',
                    instructions: [
                        'This is the default footer so no changes needed',
                    ],
                },
                'contact-and-subscribe-3-col': {
                    name: '3 Block Contact &amp; Subscribe',
                    image: './footers/contact-and-subscribe-3-col/screenshots/contact-and-subscribe-3col-footer-desktop.png',
                    instructions: [
                        'In the rivendell template, replace the following files:',
                        'Replace html/sections/footer.html.twig with <a href="./footers/contact-and-subscribe-3-col/html/sections/footer.html.twig" target="_blank">this file content</a>',
                        'Replace html/sections/social-icons.html.twig with <a href="./footers/contact-and-subscribe-3-col/html/sections/social-icons.html.twig" target="_blank">this file content</a>',
                        'Replace scss/layout/footer.scss with <a href="./footers/contact-and-subscribe-3-col/scss/layout/footer.scss" target="_blank">this file content</a>',
                    ],
                },
                '2-split-simple': {
                    name: '2 Block Split',
                    image: './footers/2-split-simple/screenshots/2-split-simpler-footer-desktop.png',
                    instructions: [
                        'In the rivendell template, replace the following files:',
                        'Replace html/sections/footer.html.twig with <a href="./footers/2-split-simple/html/sections/footer.html.twig" target="_blank">this file content</a>',
                        'Replace html/sections/social-icons.html.twig with <a href="./footers/2-split-simple/html/sections/social-icons.html.twig" target="_blank">this file content</a>',
                        'Replace scss/layout/footer.scss with <a href="./footers/2-split-simple/scss/layout/footer.scss" target="_blank">this file content</a>',
                    ],
                },
                '4-col-links': {
                    name: '4 Block Lists',
                    image: './footers/4-col-links-list/screenshots/footer-4-col-links-list.png',
                    instructions: [
                        'In the rivendell template, replace the following files:',
                        'Replace html/sections/footer.html.twig with <a href="./footers/4-col-links-list/html/sections/footer.html.twig" target="_blank">this file content</a>',
                        'Replace scss/layout/footer.scss with <a href="./footers/4-col-links-list/scss/layout/footer.scss" target="_blank">this file content</a>',
                    ],
                },
            }
        },
        selected: {
            header: 'default',
            slider: 'default',
            footer: 'default'
        }
    },
    filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
});
