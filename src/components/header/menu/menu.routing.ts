export interface Route {
  name: string;
  url: string;
  routes?: Routes;
}
export type Routes = Route[];
export const routes: Routes = [
  {
    name: "Spas Serie Vector",
    url: '',
    routes: [
      {
        name: "Spas Serie Vector",
        url: "spas/vector",
      }
    ]
  },
  {
    name: "Spas Serie Crown",
    url: '',
    routes: [
      {
        name: 'Spas Serie Crown',
        url: "spas/crown",
      }
    ]
  },
  {
    name: "Spas Serie Strato",
    url: '',
    routes: [
      {
        name: 'Spas Serie Strato',
        url: "spas/vector",
      }
    ]
  },
  {
    name: "Recomendations",
    url: "",
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
  },
  {
    name: 'Contact Us',
    url: '/contact'
  }
] 