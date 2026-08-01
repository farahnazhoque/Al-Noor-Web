'use client';

import Link from 'next/link';
import StarBorder from '@/components/ui/StarBorder';

type StarBorderButtonProps = {
  variant?: 'primary' | 'secondary';
  href?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
  type?: 'button' | 'submit' | 'reset';
};

export default function StarBorderButton({
  variant = 'primary',
  href,
  className = '',
  children,
  onClick,
  type = 'button',
}: StarBorderButtonProps) {
  const innerClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';

  const content = (
    <span className={`star-border-inner ${innerClass}`}>{children}</span>
  );

  const sharedProps = {
    className,
    color: '#0a0a0a',
    speed: '4s',
    onClick,
  };

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:');

    if (isExternal) {
      return (
        <StarBorder as="a" href={href} {...sharedProps}>
          {content}
        </StarBorder>
      );
    }

    return (
      <StarBorder as={Link} href={href} {...sharedProps}>
        {content}
      </StarBorder>
    );
  }

  return (
    <StarBorder as="button" type={type} {...sharedProps}>
      {content}
    </StarBorder>
  );
}
