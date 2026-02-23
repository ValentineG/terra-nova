// To automatically convert jpg to WEBP image format

import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

(async () => {
    await imagemin(['src/img/*.{jpg,png}'], {
        destination: 'dist/img',
        plugins: [
            imageminWebp({quality: 75}) // 75 — золота середина якості
        ]
    });
    console.log('Images optimized and converted to WebP!');
})();