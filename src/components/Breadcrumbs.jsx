import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

// Visible breadcrumb trail. `items` is an ordered list of { name, path }; the last item is the current page.
const Breadcrumbs = ({ items }) => (
  <nav aria-label="Breadcrumb" className="mb-6">
    <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <li key={item.path} className="inline-flex items-center gap-1.5">
            {isLast ? (
              <span aria-current="page" className="font-medium text-white">
                {item.name}
              </span>
            ) : (
              <>
                <Link to={item.path} className="transition-colors hover:text-white">
                  {item.name}
                </Link>
                <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              </>
            )}
          </li>
        );
      })}
    </ol>
  </nav>
);

export const trailFor = (meta) => [
  { name: "Home", path: "/" },
  { name: meta.breadcrumb, path: meta.path },
];

export default Breadcrumbs;
