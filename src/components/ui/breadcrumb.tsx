"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { BreadcrumbStructuredData } from "@/components/seo/structured-data";

interface BreadcrumbProps {
  homeElement?: React.ReactNode;
  separator?: React.ReactNode;
  containerClasses?: string;
  listClasses?: string;
  activeClasses?: string;
  capitalizeLinks?: boolean;
}

const defaultProps: BreadcrumbProps = {
  homeElement: <Home className="h-4 w-4" />,
  separator: <ChevronRight className="h-4 w-4 mx-2" />,
  containerClasses: "flex py-3 px-4 text-sm text-muted-foreground",
  listClasses: "flex items-center",
  activeClasses: "text-primary font-medium",
  capitalizeLinks: true,
};

export function Breadcrumb(props: BreadcrumbProps) {
  const pathname = usePathname();
  const paths = pathname.split("/").filter((path) => path);
  
  // Merge default props with user props
  const {
    homeElement,
    separator,
    containerClasses,
    listClasses,
    activeClasses,
    capitalizeLinks,
  } = { ...defaultProps, ...props };

  // Generate breadcrumb items for structured data
  const breadcrumbItems = [
    {
      name: "Ana Sayfa",
      item: "https://nureczanesi.com",
    },
    ...paths.map((path, index) => {
      const href = `/${paths.slice(0, index + 1).join("/")}`;
      let name = path.replace(/-/g, " ");
      
      if (capitalizeLinks) {
        name = name
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
      }
      
      return {
        name,
        item: `https://nureczanesi.com${href}`,
      };
    }),
  ];

  return (
    <nav aria-label="breadcrumbs" className={containerClasses}>
      <ol className={listClasses}>
        <li className="flex items-center">
          <Link href="/" aria-label="Ana Sayfa">
            {homeElement}
          </Link>
          {paths.length > 0 && separator}
        </li>
        
        {paths.map((path, index) => {
          const href = `/${paths.slice(0, index + 1).join("/")}`;
          const isLast = index === paths.length - 1;
          
          let name = path.replace(/-/g, " ");
          if (capitalizeLinks) {
            name = name
              .split(" ")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ");
          }
          
          return (
            <li key={href} className="flex items-center">
              {isLast ? (
                <span className={activeClasses}>{name}</span>
              ) : (
                <>
                  <Link href={href}>{name}</Link>
                  {separator}
                </>
              )}
            </li>
          );
        })}
      </ol>
      
      {/* Add structured data for breadcrumbs */}
      <BreadcrumbStructuredData items={breadcrumbItems} />
    </nav>
  );
}
