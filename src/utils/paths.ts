const base = import.meta.env.BASE_URL;

export function internalPath(path = ''): string {
    const normalizedBase = `/${base}`.replace(/\/+/g, '/');
    const normalizedPath = path.replace(/^\/+/, '');

    return `${normalizedBase.replace(/\/?$/, '/')}${normalizedPath}`;
}