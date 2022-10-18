const path = require(`path`);

async function turnClubsIntoPages({ graphql, actions }) {
  const clubTemplate = path.resolve('./src/templates/Club.js');
  const { data } = await graphql(`
    query {
      clubs: allSanityClub {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);
  data.clubs.nodes.forEach((club) => {
    actions.createPage({
      path: `club/${club.slug.current}`,
      component: clubTemplate,
      context: {
        slug: club.slug.current,
      },
    });
  });
}

exports.createPages = async (params) => {
  await Promise.all([turnClubsIntoPages(params)]);
};
