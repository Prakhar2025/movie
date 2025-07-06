import remoteClient from "../client/remote.client";

const personEndpoints = {
  detail: ({ personId }) => `person/${personId}`,
  medias: ({ personId }) => `person/${personId}/medias`
};

const personApi = {
  detail: async ({ personId }) => {
    try {
      const response = await remoteClient.get(personEndpoints.detail({ personId }));

      return { response };
    } catch (err) { return { err }; }
  },
  medias: async ({ personId }) => {
    try {
      const response = await remoteClient.get(personEndpoints.medias({ personId }));

      return { response };
    } catch (err) { return { err }; }
  }
};

export default personApi;