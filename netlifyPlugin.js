import fs from 'fs';
import path from 'path';

const netlifyPlugin = () => ({
  name: 'netlify-redirects',
  writeBundle() {
    const redirectContent = '/* /index.html 200';
    const distPath = path.resolve(process.cwd(), 'dist');
    const outputPath = path.resolve(distPath, '_redirects');
    
    if (!fs.existsSync(distPath)) {
      fs.mkdirSync(distPath, { recursive: true });
    }
    
    fs.writeFileSync(outputPath, redirectContent);
    console.log('Generated _redirects file for Netlify');
  },
});

export default netlifyPlugin;

