import Link from "next/link";
import { getAllPosts } from "../../utils/mdx";

export default function BlogList({ posts }) {
  return (
    <div className="wrapper">
      <h1>All Posts</h1>
      <p>
        Click the link below to navigate to a page generated by{" "}
        <code>mdx-bundler</code>.
      </p>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <Link href={`blog/${post.slug}`}>
              <a className="link">{post.frontmatter.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: { posts },
  };
};
