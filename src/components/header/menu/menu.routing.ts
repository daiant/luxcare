export interface Route {
  name: string;
  url: string;
  routes?: Routes;
}
export type Routes = Route[];
export const routes: Routes = [
  {
    name: "Spas",
    url: 'spas',
  },
  {
    name: "Serie vector",
    url: "spas/vector",
    routes: [
      {
        name: 'v94l',
        url: "spas/vector/v94l"
      },
      {
        name: 'v84l',
        url: 'spas/vector/v84l'
      }, {
        name: 'v84l',
        url: 'spas/vector/v84l'
      }, {
        name: 'v84l',
        url: 'spas/vector/v84l'
      },
    ]
  }
] 