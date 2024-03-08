import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from "@contentlayer/source-files"

const computedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc: any) => {
      return `/${doc._raw.flattenedPath}`
    },
  },
  slugAsParams: {
    type: "string",
    resolve: (doc: any) => {
      return doc._raw.flattenedPath.split("/").slice(1).join("/")
    },
  },
}

const computedTags: ComputedFields = {
  tags: {
    type: "list",
    resolve: (doc: any) => {
      const folder = doc._raw.sourceFileDir.split("/")[1]
      const appliedTags = doc.tags?._array || []
      if (!folder) {
        return appliedTags
      }
      return [...appliedTags, folder]
    },
  },
}

export const Docs = defineDocumentType(() => ({
  name: "Docs",
  filePathPattern: "docs/*.mdx",
  fields: {
    title: {
      type: "string",
      required: true,
      description: "The title of the documentation",
    },
    date: {
      type: "date",
      required: true,
      description: "Last updated date of the documentation",
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
  },
}));

export const Blog = defineDocumentType(() => ({
  name: "Blogs",
  filePathPattern: `blogs/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
      required: true,
    },
    published: {
      type: "boolean",
      default: true,
    },
    image: {
      type: "string",
      required: true,
    },
    authors: {
      type: "list",
      of: { type: "string" },
      required: true,
    },
    tags: {
      type: "list",
      of: { type: "string" },
    },
  },
  computedFields: { ...computedFields, ...computedTags },
}))

export const ChangeLog = defineDocumentType(() => ({
  name: "ChangeLogs",
  filePathPattern: `changelogs/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    author: { type: "string", required: true },
    publishedAt: { type: "date", required: true },
    image: { type: "string", required: true },
    summary: { type: "string", required: true },
  },
  computedFields,
}));

export const Author = defineDocumentType(() => ({
  name: "Author",
  filePathPattern: `authors/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    _type: {
      type: "string",
      required: true,
    },
    url: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    avatar: {
      type: "string",
      required: true,
    },
    twitter: {
      type: "string",
      required: true,
    },
  },
  computedFields,
}))

export const Tags = defineDocumentType(() => ({
  name: "Tags",
  filePathPattern: `tags/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    image: {
      type: "string",
      required: true,
    },
    icon: {
      type: "string",
    },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Docs, Blog, Author, ChangeLog, Tags],
});
