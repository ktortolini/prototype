export default ({ title, children }: Lume.Data, helpers: Lume.Helpers) => {
	return (
		<html data-theme='dark'>
			<head>
				<meta charSet='utf-8' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<title>{title}</title>
				<link rel='stylesheet' href='/unocss.css' />
				<script src='https://cdn.jsdelivr.net/npm/p5@1.9.0/lib/p5.js' />
				<script src='/static/prototypeArt.js' defer />
			</head>
			<body className='flex bg-black justify-center'>
				<div className='h-full text-center select-none all:transition-400'>
					<main className='container'>{children}</main>
				</div>
			</body>
		</html>
	);
};
