import React from 'react';
import classnames from 'classnames';

export interface HTMLContentProps {
  content: string;
  className?: string;
}

const HTMLContent: React.FC<HTMLContentProps> = ({ content, className }) => (
  <div
    className={classnames('prose prose-sm md:prose-lg dark-mode:prose-dark', className)}
    dangerouslySetInnerHTML={{ __html: content }}
  />
);

export default HTMLContent;
