import { HttpResponse, Model } from '@srclaunch/types';
declare const _default: {
    create: ({ entity }: {
        entity: Model;
    }) => Promise<HttpResponse<Model>>;
    delete: ({ entity }: {
        entity: Model;
    }) => Promise<HttpResponse<null>>;
    getOne: ({ name, id, }: {
        name: Model['name'];
        id: Model['id'];
    }) => Promise<HttpResponse<Model>>;
    list: ({ name, }: {
        name: Model['name'];
    }) => Promise<HttpResponse<Model[]>>;
    update: ({ entity }: {
        entity: Model;
    }) => Promise<HttpResponse<Model>>;
};
export default _default;
//# sourceMappingURL=EntityService.d.ts.map