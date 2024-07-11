import fs from "fs";
import path from "path";
import { VFile } from "vfile";
import { matter } from "vfile-matter";

export const parseMDXFile = <T>(rawContent: string): { frontmatter: T; content: string } => {
  const vfile = new VFile(rawContent);
  matter(vfile, { strip: true });
  return { frontmatter: vfile.data.matter as T, content: vfile.toString() };
};

interface MdxFile {
  fullPath: string;
  relativePath: string[];
}

export const getAllMdxFiles = (
  directory: string,
  rootDirectory: string,
  filesArray: MdxFile[] = [],
  includeIndexMdx = false
): MdxFile[] => {
  const files = fs.readdirSync(directory);

  files.forEach((file) => {
    const filePath = path.join(directory, file);
    const fileStat = fs.statSync(filePath);

    if (fileStat.isDirectory()) {
      getAllMdxFiles(filePath, rootDirectory, filesArray, includeIndexMdx);
    } else if (path.extname(file) === ".mdx" && (includeIndexMdx || file !== "index.mdx")) {
      const relativePath = path
        .relative(rootDirectory, filePath)
        .split(path.sep)
        .map((segment) => segment.replace(".mdx", ""));
      filesArray.push({ fullPath: filePath, relativePath });
    }
  });
  return filesArray;
};
