import { usePathname } from "next/navigation";
import { useMemo } from "react";

interface Breadcrumb {
  label: string;
  path: string;
}

interface PathNames {
  [key: string]: string;
}

const pathNames: PathNames = {
  "/pt": "Home",
  "/en": "Home",
  "/pt/professional-experience": "Experiência Profissional",
  "/en/professional-experience": "Professional Experience",
};

function useBreadcrumbs(): Breadcrumb[] {
  const pathname = usePathname();

  const breadcrumbs = useMemo(() => {
    const paths = (pathname ?? "").split("/").filter((item: string) => item);
    const breadcrumbs: Breadcrumb[] = paths.map(
      (path: string, index: number) => {
        const url = `/${paths.slice(0, index + 1).join("/")}`;
        const label = pathNames[url];
        return { label, path: url };
      }
    );

    return breadcrumbs;
  }, [pathname]);

  return breadcrumbs;
}

export default useBreadcrumbs;
