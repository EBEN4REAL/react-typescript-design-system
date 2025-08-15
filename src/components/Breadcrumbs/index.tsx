import clsx from 'clsx';
import { Link } from 'react-router-dom';

type Crumb = { label: string; href?: string };
type BreadcrumbsProps = { items: Crumb[] };

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="breadcrumb" className="flex space-x-1 text-sm">
      {items.map((crumb, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <span key={idx} className="inline-flex items-center">
            {crumb.href && !isLast ? (
              <Link to={crumb.href} className="text-blue-600 hover:underline">
                {crumb.label}
              </Link>
            ) : (
              <span className={clsx(isLast && 'font-semibold')}>{crumb.label}</span>
            )}
            {!isLast && <span className="mx-1">/</span>}
          </span>
        );
      })}
    </nav>
  );
}