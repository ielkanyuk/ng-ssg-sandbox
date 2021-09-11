import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import { getSitemapPlugin } from '@gammastream/scully-plugin-sitemap';

const SitemapPlugin = getSitemapPlugin();
setPluginConfig(SitemapPlugin, {
  urlPrefix: 'https://example.com',
  sitemapFilename: 'sitemap.xml',
  changeFreq: 'daily',
  priority: [
    '1.0',
    '0.8',
  ],
  ignoredRoutes: ['/404']
});

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'ng-ssg-sandbox',
  outDir: './dist/static', // directory for scully build artifacts
  defaultPostRenderers: [],
  routes: {},
  extraRoutes: [
  ],
  puppeteerLaunchOptions: {
    args: [
      '--disable-gpu',
      '--renderer',
      '--no-sandbox',
      '--no-service-autorun',
      '--no-experiments',
      '--no-default-browser-check',
      '--disable-dev-shm-usage',
      '--disable-setuid-sandbox',
      '--no-first-run',
      '--no-zygote',
      '--single-process',
      '--disable-extensions'
    ]
  }
};
