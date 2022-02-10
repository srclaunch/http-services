import { HttpResponse, Model } from '@srclaunch/types';

import { SrcLaunchApi } from './api/srclaunch';

export default {
  create: async ({ entity }: { entity: Model }): Promise<HttpResponse<Model>> =>
    await SrcLaunchApi.entities.create({ entity }),
  delete: async ({ entity }: { entity: Model }): Promise<HttpResponse<null>> =>
    await SrcLaunchApi.entities.delete({ entity }),
  getOne: async ({
    name,
    id,
  }: {
    name: Model['name'];
    id: Model['id'];
  }): Promise<HttpResponse<Model>> =>
    await SrcLaunchApi.entities.getOne({ id, name }),
  list: async ({
    name,
  }: {
    name: Model['name'];
  }): Promise<HttpResponse<Model[]>> =>
    await SrcLaunchApi.entities.list({ name }),
  update: async ({ entity }: { entity: Model }): Promise<HttpResponse<Model>> =>
    await SrcLaunchApi.entities.update({ entity }),
};
