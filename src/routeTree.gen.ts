/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SettingsImport } from './routes/settings'
import { Route as LibraryImport } from './routes/library'
import { Route as DownloadsImport } from './routes/downloads'
import { Route as SectionsNewReleasesImport } from './routes/sections/newReleases'
import { Route as SectionsMostAnticipatedImport } from './routes/sections/mostAnticipated'
import { Route as LibraryOldImport } from './routes/library.old'
import { Route as InfoIdImport } from './routes/info/$id'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const SettingsRoute = SettingsImport.update({
  id: '/settings',
  path: '/settings',
  getParentRoute: () => rootRoute,
} as any)

const LibraryRoute = LibraryImport.update({
  id: '/library',
  path: '/library',
  getParentRoute: () => rootRoute,
} as any)

const DownloadsRoute = DownloadsImport.update({
  id: '/downloads',
  path: '/downloads',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const SectionsNewReleasesRoute = SectionsNewReleasesImport.update({
  id: '/sections/newReleases',
  path: '/sections/newReleases',
  getParentRoute: () => rootRoute,
} as any)

const SectionsMostAnticipatedRoute = SectionsMostAnticipatedImport.update({
  id: '/sections/mostAnticipated',
  path: '/sections/mostAnticipated',
  getParentRoute: () => rootRoute,
} as any)

const LibraryOldRoute = LibraryOldImport.update({
  id: '/old',
  path: '/old',
  getParentRoute: () => LibraryRoute,
} as any)

const InfoIdRoute = InfoIdImport.update({
  id: '/info/$id',
  path: '/info/$id',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/downloads': {
      id: '/downloads'
      path: '/downloads'
      fullPath: '/downloads'
      preLoaderRoute: typeof DownloadsImport
      parentRoute: typeof rootRoute
    }
    '/library': {
      id: '/library'
      path: '/library'
      fullPath: '/library'
      preLoaderRoute: typeof LibraryImport
      parentRoute: typeof rootRoute
    }
    '/settings': {
      id: '/settings'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof SettingsImport
      parentRoute: typeof rootRoute
    }
    '/info/$id': {
      id: '/info/$id'
      path: '/info/$id'
      fullPath: '/info/$id'
      preLoaderRoute: typeof InfoIdImport
      parentRoute: typeof rootRoute
    }
    '/library/old': {
      id: '/library/old'
      path: '/old'
      fullPath: '/library/old'
      preLoaderRoute: typeof LibraryOldImport
      parentRoute: typeof LibraryImport
    }
    '/sections/mostAnticipated': {
      id: '/sections/mostAnticipated'
      path: '/sections/mostAnticipated'
      fullPath: '/sections/mostAnticipated'
      preLoaderRoute: typeof SectionsMostAnticipatedImport
      parentRoute: typeof rootRoute
    }
    '/sections/newReleases': {
      id: '/sections/newReleases'
      path: '/sections/newReleases'
      fullPath: '/sections/newReleases'
      preLoaderRoute: typeof SectionsNewReleasesImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

interface LibraryRouteChildren {
  LibraryOldRoute: typeof LibraryOldRoute
}

const LibraryRouteChildren: LibraryRouteChildren = {
  LibraryOldRoute: LibraryOldRoute,
}

const LibraryRouteWithChildren =
  LibraryRoute._addFileChildren(LibraryRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/downloads': typeof DownloadsRoute
  '/library': typeof LibraryRouteWithChildren
  '/settings': typeof SettingsRoute
  '/info/$id': typeof InfoIdRoute
  '/library/old': typeof LibraryOldRoute
  '/sections/mostAnticipated': typeof SectionsMostAnticipatedRoute
  '/sections/newReleases': typeof SectionsNewReleasesRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/downloads': typeof DownloadsRoute
  '/library': typeof LibraryRouteWithChildren
  '/settings': typeof SettingsRoute
  '/info/$id': typeof InfoIdRoute
  '/library/old': typeof LibraryOldRoute
  '/sections/mostAnticipated': typeof SectionsMostAnticipatedRoute
  '/sections/newReleases': typeof SectionsNewReleasesRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/downloads': typeof DownloadsRoute
  '/library': typeof LibraryRouteWithChildren
  '/settings': typeof SettingsRoute
  '/info/$id': typeof InfoIdRoute
  '/library/old': typeof LibraryOldRoute
  '/sections/mostAnticipated': typeof SectionsMostAnticipatedRoute
  '/sections/newReleases': typeof SectionsNewReleasesRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/downloads'
    | '/library'
    | '/settings'
    | '/info/$id'
    | '/library/old'
    | '/sections/mostAnticipated'
    | '/sections/newReleases'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/downloads'
    | '/library'
    | '/settings'
    | '/info/$id'
    | '/library/old'
    | '/sections/mostAnticipated'
    | '/sections/newReleases'
  id:
    | '__root__'
    | '/'
    | '/downloads'
    | '/library'
    | '/settings'
    | '/info/$id'
    | '/library/old'
    | '/sections/mostAnticipated'
    | '/sections/newReleases'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  DownloadsRoute: typeof DownloadsRoute
  LibraryRoute: typeof LibraryRouteWithChildren
  SettingsRoute: typeof SettingsRoute
  InfoIdRoute: typeof InfoIdRoute
  SectionsMostAnticipatedRoute: typeof SectionsMostAnticipatedRoute
  SectionsNewReleasesRoute: typeof SectionsNewReleasesRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  DownloadsRoute: DownloadsRoute,
  LibraryRoute: LibraryRouteWithChildren,
  SettingsRoute: SettingsRoute,
  InfoIdRoute: InfoIdRoute,
  SectionsMostAnticipatedRoute: SectionsMostAnticipatedRoute,
  SectionsNewReleasesRoute: SectionsNewReleasesRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/downloads",
        "/library",
        "/settings",
        "/info/$id",
        "/sections/mostAnticipated",
        "/sections/newReleases"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/downloads": {
      "filePath": "downloads.tsx"
    },
    "/library": {
      "filePath": "library.tsx",
      "children": [
        "/library/old"
      ]
    },
    "/settings": {
      "filePath": "settings.tsx"
    },
    "/info/$id": {
      "filePath": "info/$id.tsx"
    },
    "/library/old": {
      "filePath": "library.old.tsx",
      "parent": "/library"
    },
    "/sections/mostAnticipated": {
      "filePath": "sections/mostAnticipated.tsx"
    },
    "/sections/newReleases": {
      "filePath": "sections/newReleases.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
