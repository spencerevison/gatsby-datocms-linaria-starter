module.exports = {
  siteMetadata: {
    title: "Gatsby Linaria Starter",
    siteUrl: "https://www.gatsbylinaria.com",
  },
  plugins: [
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: "caf21b109029e563d2c467bfe34c35",
      },
    },
    "gatsby-plugin-linaria",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-alias-imports",
      options: {
        aliases: {
          components: "src/components",
          pages: "src/pages",
          svg: "static/images/svg",
          "site.config.json": "src/site.config.json",
          styles: "src/styles",
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-prefetch-google-fonts",
      options: {
        fonts: [
          {
            family: "Manrope",
            variants: ["200", "400", "600", "800"],
          },
        ],
      },
    },
  ],
};
