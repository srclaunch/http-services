import { HttpResponse, HttpResponseBody, Model } from '@srclaunch/types';

import { SrcLaunchHttpClient } from './index';

export default {
  entities: {
    create: ({
      entity,
    }: {
      entity: Model;
    }): Promise<HttpResponse<HttpResponseBody<Model>>> =>
      SrcLaunchHttpClient.post(`/entity/${entity.name}`, {
        entity,
      }),
    delete: ({ entity }: { entity: Model }): Promise<HttpResponse<null>> =>
      SrcLaunchHttpClient.delete(`/entity/${entity.name}/${entity.id}`),
    getOne: ({
      name,
      id,
    }: {
      name: Model['name'];
      id: Model['id'];
    }): Promise<HttpResponse<Model>> =>
      SrcLaunchHttpClient.get(`/entity/${name}/${id}`),
    list: ({ name }: { name: Model['name'] }): Promise<HttpResponse<Model[]>> =>
      SrcLaunchHttpClient.get(`/entity/${name}`),
    update: ({ entity }: { entity: Model }): Promise<HttpResponse<Model>> =>
      SrcLaunchHttpClient.put(`/entity/${entity.name}/${entity.id}`, {
        entity,
      }),
  },
};
