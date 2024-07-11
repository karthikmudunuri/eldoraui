import fs from "fs";
import path from "path";
import { getDocTypeFromSlug } from "@/utils/docs";
import type { Doc, DocCategory, DocFrontmatter, DocMetadata, DocType } from "@/types/docs";
import { getTableOfContents } from "../utils/toc";
import { getAllMdxFiles, parseMDXFile } from "./mdx";

const getBreadcrumbs = (slug: string[]): { label: string; href: string }[] => {
  const result = slug.map((slugPart, index) => {
    const partPath = path.join(process.cwd(), "content", ...slug.slice(0, index + 1));
    if (fs.existsSync(partPath) && fs.lstatSync(partPath).isDirectory()) {
      // get title from index.mdx
      const indexPath = path.join(partPath, "index.mdx");
      if (fs.existsSync(indexPath)) {
        const fileRawContent = fs.readFileSync(indexPath, "utf-8");
        const { frontmatter } = parseMDXFile<DocFrontmatter>(fileRawContent);
        return {
          label: frontmatter.title,
          href: `/${slug.slice(0, index + 1).join("/")}`,
        };
      }
    } else {
      // get title from last {slug}.mdx
      const filePath = path.join(
        process.cwd(),
        "content",
        ...slug.slice(0, index),
        `${slugPart}.mdx`
      );
      if (fs.existsSync(filePath)) {
        const fileRawContent = fs.readFileSync(filePath, "utf-8");
        const { frontmatter } = parseMDXFile<DocFrontmatter>(fileRawContent);
        return {
          label: frontmatter.title,
          href: `/${slug.slice(0, index + 1).join("/")}`,
        };
      }
    }
  });

  return result.filter((elem) => !!elem) as { label: string; href: string }[];
};

export const getDocFromSlug = async (slug: string[]): Promise<Doc | null> => {
  // 1st scenario: if it's a directory
  const breadcrumbs = getBreadcrumbs(slug);
  const type = slug[0] as DocType;
  const directoryPath = path.join(process.cwd(), "content", ...slug);
  if (fs.existsSync(directoryPath) && fs.lstatSync(directoryPath).isDirectory()) {
    // check if index.mdx exists
    const indexPath = path.join(directoryPath, "index.mdx");
    if (fs.existsSync(indexPath)) {
      // get rawContent & metadata from index.mdx
      const fileRawContent = fs.readFileSync(indexPath, "utf-8");
      const { content, frontmatter } = parseMDXFile<DocFrontmatter>(fileRawContent);
      // get categories from subfolders
      const subfolders = fs
        .readdirSync(directoryPath)
        .filter((item) => fs.lstatSync(path.join(directoryPath, item)).isDirectory());
      const categories = subfolders
        .map((subfolder) => {
          const categoryIndexPath = path.join(directoryPath, subfolder, "index.mdx");
          if (fs.existsSync(categoryIndexPath)) {
            const fileRawContent = fs.readFileSync(categoryIndexPath, "utf-8");
            const { frontmatter } = parseMDXFile<DocFrontmatter>(fileRawContent);
            return {
              label: frontmatter.title,
              href: `/${[...slug, subfolder].join("/")}`,
            };
          }
        })
        .filter((item) => item) as DocCategory[];
      const toc = await getTableOfContents(content);

      return {
        metadata: {
          title: frontmatter.title,
          description: frontmatter.description,
          href: "",
          type,
          breadcrumbs,
          links: frontmatter.links,
        },
        rawContent: content,
        categories,
        toc,
      };
    }
  }

  // 2nd scenario: if it's a file
  const filePath = path.join(
    process.cwd(),
    "content",
    ...slug.slice(0, -1),
    `${slug[slug.length - 1]}.mdx`
  );
  if (fs.existsSync(filePath)) {
    const fileRawContent = fs.readFileSync(filePath, "utf-8");
    const { content, frontmatter } = parseMDXFile<DocFrontmatter>(fileRawContent);
    const toc = await getTableOfContents(content);
    return {
      metadata: {
        title: frontmatter.title,
        description: frontmatter.description,
        href: "",
        type,
        breadcrumbs,
        links: frontmatter.links,
      },
      rawContent: content,
      toc,
    };
  }

  return null;
};

// getDocs() returns all docs from content folder
// getDocs("hooks") returns all docs from content/hooks folder
// getDocs("components/core") returns all docs from content/components/core folder
export const getDocs = (slug?: string, includeIndex = false): DocMetadata[] => {
  const directoryPath = path.join(process.cwd(), "content", ...(slug ? slug.split("/") : []));
  // console.log(
  //   getAllMdxFiles(directoryPath, directoryPath, [], includeIndex).map(
  //     ({ fullPath, relativePath }) => {
  //       const itemRawContent = fs.readFileSync(fullPath, "utf-8");
  //       const { frontmatter } = parseMDXFile<DocFrontmatter>(itemRawContent);
  //       return {
  //         ...frontmatter,
  //         type: getDocTypeFromSlug(slug),
  //         breadcrumbs: [],
  //         href: `${slug ? `/${slug}` : ""}/${relativePath.join("/").replace("/index", "")}`,
  //       };
  //     }
  //   )
  // );
  return getAllMdxFiles(directoryPath, directoryPath, [], includeIndex).map(
    ({ fullPath, relativePath }) => {
      const itemRawContent = fs.readFileSync(fullPath, "utf-8");
      const { frontmatter } = parseMDXFile<DocFrontmatter>(itemRawContent);
      return {
        ...frontmatter,
        type: getDocTypeFromSlug(slug),
        breadcrumbs: [],
        href: `${slug ? `/${slug}` : ""}/${relativePath.join("/").replace("/index", "")}`,
      };
    }
  );
};
