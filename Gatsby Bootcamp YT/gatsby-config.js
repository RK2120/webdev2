module.exports = {
    siteMetadata: {
        title: 'R3D2',
        author: 'Rahul Kamath'
    },
    plugins: [
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`
            }
        },
        'gatsby-transformer-remark'
    ]
}