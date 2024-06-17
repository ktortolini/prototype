import Server from 'lume/core/server.ts';

const server = new Server({
	port: 8000,
	root: `${Deno.cwd()}/public`,
});

server.start();

console.log('🚀 ~ file: serve.ts:10 ~ server:', server);