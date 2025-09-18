import fs from 'fs';
import path from 'path';

const netlifyPlugin = () => ({
  name: 'netlify-redirects',
  writeBundle() {
    const redirectContent = '/* /index.html 200';
    const outputPath = path.resolve(process.cwd(), 'dist', '_redirects');
    fs.writeFileSync(outputPath, redirectContent);
    console.log('Generated _redirects file for Netlify');
  },
});

export default netlifyPlugin;

