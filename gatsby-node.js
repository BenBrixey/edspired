const fetch = require('node-fetch');

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

async function fetchBeersAndTurnIntoNodes({
  actions,
  createNodeId,
  createContentDigest,
}) {
  const res = await fetch('https://api.open5e.com/races/');
  const items = await res.json();

  for (const dndClass of items) {
    const nodeMeta = {
      id: createNodeId(`class-${dndClass.name}`),
      parent: null,
      children: [],
      internal: {
        type: 'dnd',
        mediaType: 'application/json',
        contentDigest: createContentDigest(dndClass),
      },
    };
    actions.createNode({
      ...dndClass,
      ...nodeMeta,
    });
  }
}
exports.sourceNodes = async (params) => {
  await Promise.all([fetchBeersAndTurnIntoNodes(params)]);
};
exports.createPages = async (params) => {
  await Promise.all([turnClubsIntoPages(params)]);
};
