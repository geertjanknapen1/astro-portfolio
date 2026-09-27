const base = import.meta.env.BASE_URL;

export function internalPath(path = ''): string {
    const normalizedBase = `/${base}`.replace(/\/+/g, '/').replace(/\/?$/, '/');
    const normalizedPath = path.replace(/^\/+/, '');

    return `${normalizedBase}${normalizedPath}`;
}
