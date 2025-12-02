import React from 'react';
import { scrollToId } from '../utils';

interface SafeAnchorProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  onHash?: (id: string, event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const SafeAnchor: React.FC<SafeAnchorProps> = ({
  href,
  className,
  children,
  onHash,
}) => {
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof href === "string" && href.startsWith("#")) {
      e.preventDefault();
      const id = href.slice(1);
      scrollToId(id);
      if (onHash) onHash(id, e);
    }
  };
  return (
    <a href={href} onClick={onClick} className={className}>
      {children}
    </a>
  );
};

export default SafeAnchor;