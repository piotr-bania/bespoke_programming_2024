/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // output: 'export',

    images: {
        domains: ['jasstbixzjpuulnwqllq.supabase.co'],
    },

    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.(glsl|vs|fs|vert|frag)$/,
            use: ['raw-loader'],
        },
        {
            test: /\.(mov|mp4|webm)$/,
            use: [ 'file-loader' ],
        })

        return config
    }
}

module.exports = nextConfig