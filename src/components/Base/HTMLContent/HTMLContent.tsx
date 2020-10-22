import React from 'react';

export interface HTMLContentProps {
  content: string;
  className?: string;
}

const HTMLContent: React.FC<HTMLContentProps> = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);

export default HTMLContent;
