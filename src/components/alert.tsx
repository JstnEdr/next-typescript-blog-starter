import Container from './container';
import cn from 'classnames';
import { EXAMPLE_PATH } from '../lib/constants';

type Props = {
  preview?: boolean;
};

const Alert = ({ preview }: Props) => {
  return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white dark:bg-gray-900 dark:border-gray-900': preview,
        'bg-accent-1 border-accent-2 dark:bg-gray-900 dark:border-gray-900': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This page is a preview.{' '}
              <a
                href="/api/exit-preview"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                Click here
              </a>{' '}
              to exit preview mode.
            </>
          ) : (
            <>
              The source code for this blog is{' '}
              <a
                href={`https://github.com/JstnEdr/next-typescript-blog-starter`}
                className="underline hover:text-success duration-200 transition-colors"
              >
                available on GitHub
              </a>
              , inspired by{' '}
              <a
                href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
                className="underline hover:text-success duration-200 transition-colors"
              >
                blog-starter-example
              </a>
              .
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Alert;
