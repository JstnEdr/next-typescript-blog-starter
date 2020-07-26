import BlogPost from '../../components/BlogPost';
import Hello from '../../posts/hello.mdx';

const HelloRoute = () => {
  return (
    <BlogPost>
      <Hello siteTitle="ok then hi" siteDescription="hmmmm" />
    </BlogPost>
  );
};

export default HelloRoute;
