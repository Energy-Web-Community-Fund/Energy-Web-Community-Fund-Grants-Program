const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const mdxMermaid = require('mdx-mermaid');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'EW Community Fund Committee Grants',
  tagline: 'Funding Software Development and Research Efforts related to Energy Web Chain and Volta.',
  url: 'https://Energy-Web-Community-Fund.github.io',
  baseUrl: '/Energy-Web-Community-Fund-Grants-Program/',
  onBrokenLinks: 'warn',    // Revert back to 'throw' once initial release is up
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/EnergyWebCommunityFund.png',
  organizationName: 'Energy-Web-Community-Fund', // Usually your GitHub org/user name.
  trailingSlash: false,
  projectName: 'Grants-Program', // Usually your repo name.

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    sidebar: {
      hideable: true,
      autoCollapseCategories: true,
    },
    announcementBar: {
      id: 'announcement',
      content:
        'We will be announcing the launch of the grants program soon! Check Twitter <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/energywebx/"> to stay posted</a>!',
      backgroundColor: '#000',
      textColor: '#ffffff',
      isCloseable: true,
    },
    navbar: {
      title: 'EW CF Grants Program',
      logo: {
        alt: 'EW CF Grants Program',
        src: 'img/EnergyWebCommunityFund.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'docs/introduction',
          label: 'Introduction',
        },
        {
          type: 'doc',
          docId: 'applications/index',
          position: 'left',
          label: 'List of Grants',
        },
        {
          type: 'doc',
          docId: 'docs/faq',
          label: 'FAQ',
        },
        {
          type: 'doc',
          docId: 'docs/Process/how-to-apply',
          position: 'right',
          label: 'Apply',
        },
        {
          type: 'doc',
          docId: 'docs/contribute',
          position: 'right',
          label: 'Contribute',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'More Info',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Energy-Web-Community-Fund/Energy-Web-Community-Fund-Grants-Program',
            },
            {
              label: 'Website',
              href: 'https://energy-web-foundation.gitbook.io/energy-web/community-resources/energy-web-community-fund',
            },
            {
              label: 'Privacy Policy',
              to: 'docs/Support%20Docs/privacy_policy',
            },
          ],
        }, 
        {
          title: 'Connect',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/energywebx',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} EW Community Fund Committee`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    algolia: {
      appId: 'R1K0E59SD9',
      apiKey: 'a2fb2a3099ec3d1ad6f1b84fe782e242',
      indexName: 'grants-program',
      contextualSearch: true,
      externalUrlRegex: 'https://Energy-Web-Community-Fund.github.io',
      searchParameters: {},
      searchPagePath: 'search',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: '.',
          routeBasePath: '/', 
          editUrl: 'https://github.com/Energy-Web-Community-Fund/Energy-Web-Community-Fund-Grants-Program/edit/master/',
          // showLastUpdateAuthor: true,
          // showLastUpdateTime: true,
          sidebarPath: require.resolve('./sidebars.js'),
          beforeDefaultRehypePlugins: [
          ],
          beforeDefaultRemarkPlugins: [
          ],
          remarkPlugins: [
            mdxMermaid
          ],
          rehypePlugins: [
          ],
          exclude: [
            'applications/application-template.md',
            'applications/example-project.md',
            'applications/maintenance/maintenance-template.md',
            'applications/application-template-research.md',
            'docs/RFPs/suggestion-template.md',
            '.docusaurus/**',
            '.github/**',
            '.vscode/**',
            'build/**',
            'node_modules/**',
            'src/**',
            'static/**',
            'babel.config.js',
            '.gitignore',
            'LICENSE',
            'package-lock.json',
            'package.json',
            'sidebars.js',
            'README.md'
          ],
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    function (context, options) {
      return {
        name: 'webpack-configuration-plugin',
        configureWebpack(config, isServer, utils) {
          return {
            resolve: {
              symlinks: false,
            }
          };
        }
      };
    },
  ],
};
