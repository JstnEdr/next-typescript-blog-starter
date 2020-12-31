import { ReactNode } from 'react';
import markdownStyles from './markdown-styles.module.css';

type Props = {
  content: ReactNode;
};

const PostBody = ({ content }: Props) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white dark:bg-gray-800">
        <h1 className="text-gray-900 dark:text-white">Dark mode is here!</h1>
        <p className="text-gray-600 dark:text-gray-300">Lorem ipsum...</p>
      </div>
      <div className={markdownStyles['markdown']}>{content}</div>
    </div>
  );
};

export default PostBody;
