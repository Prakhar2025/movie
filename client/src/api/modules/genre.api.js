import remoteClient from "../client/remote.client";

const genreEndpoints = {
  list: ({ mediaType }) => `${mediaType}/genres`
};

const genreApi = {
  getList: async ({ mediaType }) => {
    try {
      const response = await remoteClient.get(genreEndpoints.list({ mediaType }));

      return { response };
    } catch (err) { return { err }; }
  }
};

export default genreApi;