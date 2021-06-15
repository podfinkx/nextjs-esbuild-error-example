import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";
import { remarkMdxImages } from "remark-mdx-images";

const POSTS_PATH = path.join(process.cwd(), "_content/blog");

export const getSourceOfFile = (filePath) => {
  return fs.readFileSync(path.join(POSTS_PATH, filePath, "index.mdx"));
};

export const getAllPosts = () => {
  return fs
    .readdirSync(POSTS_PATH)
    .map((filePath) => {
      console.log(filePath);
      const source = getSourceOfFile(filePath);
      const slug = filePath.replace(/\.mdx?$/, "");
      const { data } = matter(source);

      return {
        frontmatter: data,
        slug: slug,
      };
    })
    .filter((posts) => !!posts.frontmatter.isPublished)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.publishedOn) -
        new Date(a.frontmatter.publishedOn)
    );
};

export const getSinglePost = async (slug) => {
  const source = getSourceOfFile(slug);
  const imagesUrl = `/img/blog/${slug}/`;

  const { code, frontmatter } = await bundleMDX(source, {
    cwd: POSTS_PATH,
    xdmOptions: (options) => {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        remarkMdxImages,
      ];
      return options;
    },
    esbuildOptions: (options) => {
      options.outdir = path.join(process.cwd(), "public", imagesUrl);
      options.loader = {
        ...options.loader,
        ".webp": "file",
        ".jpeg": "file",
        ".jpg": "file",
        ".svg": "file",
        ".png": "file",
      };

      options.publicPath = imagesUrl;
      options.write = true;

      return options;
    },
  });

  return {
    frontmatter: frontmatter,
    code: code,
  };
};
