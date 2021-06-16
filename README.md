This was the [Issue](https://github.com/kentcdodds/mdx-bundler/issues/56)

and the Solution is this:
<details open>
<summary>Solution:</summary>

```js
  export const getSinglePost = async (slug) => {
    const source = getSourceOfFile(slug);
    const imagesUrl = `/img/blog/${slug}`;
    const directory = path.join(POSTS_PATH, slug);
  
    const { code, frontmatter } = await bundleMDX(source, {
      cwd: directory,
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
          ".gif": "file",
        };
  
        options.publicPath = imagesUrl;
        options.write = true;
  
        return options;
      },
    });
  
    return {
      frontmatter,
      code,
    };
  };
```
</details>

You can find the complete file [here](https://github.com/podfinkx/nextjs-esbuild-error-example/blob/working/lib/data/posts.js).
If you have any questions feel free to contact me via [email](mailto:podfinkx@pm.me) or [Twitter](https://twitter.com/podfinkx)

PD: This was a simple stupid problem that I had and solved after 4 hours ... 🤡, I just want to say don't give up and keep trying, something will work sooner or later.
