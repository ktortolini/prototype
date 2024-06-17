
import lume from 'lume/mod.ts';
import unocss from 'lume/plugins/unocss.ts';
import jsx from 'lume/plugins/jsx_preact.ts';

const site = lume({
	src: './src',
	dest: './public',
	emptyDest: true,
	prettyUrls: true,
	server: {
		port: 8000,
		open: true,
	}
});

site.copy('/styles/');
site.copy('/static/');

site.use(jsx());

site.use(unocss());

export default site;
