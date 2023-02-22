export interface RouterLink {
    name:  string;
    path:  string;
    title: string;
}

export const routeLinks: RouterLink[] = [
    { name: 'home', path: '/', title: 'Inicio' },
    { name: 'authentication', path: '/authenticacion', title: 'Login' }
]