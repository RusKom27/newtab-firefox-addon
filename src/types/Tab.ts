

type Link = {
    name: string,
    link: string
}

type LinksContainer = {
    name: string,
    links: Link[]
}

type Tab = {
    name: string,
    linksContainers: LinksContainer[]
}

export type {Tab, Link, LinksContainer};