import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";
import { getAllPosts } from "../utils/mdx";

const BrowseAllButton = styled.a`
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

const Greetings = styled.div`
  text-align: left;
`;

const PostsSection = styled.div`
  margin: 0 0 60px 0;
`;

export default function Home({ posts }) {
  return (
    <div className="container">
      <Head>
        <title>Home</title>
        <meta name="description" content="Home page" />
      </Head>
      <div className="content">
        <Greetings>
          <h2 className="title2">Hi there👋</h2>
        </Greetings>
        <PostsSection>
          <h1 className="title1">Latest posts</h1>
          <ul>
            {posts.map((post, index) => (
              <li key={index}>
                <Link href={`/blog/${post.slug}`}>
                  <a className="link">{post.frontmatter.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </PostsSection>
        <Link href="/blog">
          <BrowseAllButton>Browse all posts</BrowseAllButton>
        </Link>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: {
      posts: posts.slice(0, 4),
    },
  };
};
