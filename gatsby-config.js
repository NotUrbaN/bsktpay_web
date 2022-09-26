module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
{
  resolve: "@plasmicapp/loader-gatsby",
  options: {
    projects: [
      {
        id: "Yp6yiU3rLrsKqC9mmG1bh",
        token: "DZ4zKVBbvQsumH8PlzHKBA7NUrkTzfwGl1kuKNQC9cSGBQv8vhBZ9DPEg10yq0qP1nu9FDqrGCzEtJXw",
      },
    ], // An array of project ids.
    preview: false,
    defaultPlasmicPage: require.resolve("./src/templates/defaultPlasmicPage.jsx"),
  },
},
{
  resolve: "gatsby-plugin-react-helmet",
}
]
}
