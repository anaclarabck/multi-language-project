"use client";
import React from "react";
import Link from "next/link";
import { useBreadcrumbs } from "@/hooks";
import { ChevronRight } from "lucide-react";

const Breadcrumbs: React.FC = () => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <nav aria-label="breadcrumb" className="py-4">
      <ol className="flex flex-wrap items-center text-gray-600">
        {breadcrumbs.map(({ label, path }, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <ChevronRight aria-hidden="true" className="mx-2 size-5" />}
            {index + 1 < breadcrumbs.length ? (
              <Link className="hover:underline" href={path}>
                {label}
              </Link>
            ) : (
              <span className="text-gray-900">{label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
