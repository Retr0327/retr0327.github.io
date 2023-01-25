const isProduction = process.env.NODE_ENV === 'production';

const url = isProduction ? 'https://retr0327.github.io' : '/';

export default url;
