import { defaultTheme, defineUserConfig, viteBundler } from 'vuepress';

export default defineUserConfig({
  base: '/',
  title: 'Fast Cars',
  description: 'All about the fastest and coolest cars in the world',

  bundler: viteBundler({
    // vite bundler options here
  }),
  theme: defaultTheme({
    // default theme options here
  }),
});
