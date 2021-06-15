import styled from "styled-components";
import Link from "next/link";
import { getAllPosts } from "../../utils/mdx";

const GoBackButton = styled.a`
  width: 100px;
  height: 50px;
  opacity: 0.75;
  text-decoration: none;
  background-color: var(--color-btn);
  font-family: inherit;
  font-size: 18px;
  border: none;
  border-radius: 4px;
  padding: 16px;
  transition: all 150ms ease;
  cursor: pointer;
  :hover {
    opacity: 1;
  }
`;

const PostsSection = styled.div`
  margin: 0 0 60px 0;
`;

export default function BlogList({ posts }) {
  return (
    <div className="wrapper">
      <PostsSection>
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
      </PostsSection>
      <Link href="/">
        <GoBackButton>Go back to home</GoBackButton>
      </Link>
    </div>
  );
}

export const getStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: { posts },
  };
};
