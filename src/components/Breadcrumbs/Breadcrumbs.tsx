import React from "react";
import { Breadcrumbs as MUIBreadcrumbs, Link, Box } from "@mui/material";
import { useBreadcrumbs } from "@/hooks";

const Breadcrumbs: React.FC = () => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <Box paddingTop={2} paddingBottom={2}>
      <MUIBreadcrumbs aria-label="breadcrumb" separator=">">
        {breadcrumbs.map(({ label, path }, index) =>
          index + 1 < breadcrumbs.length ? (
            <Link key={index} color="inherit" href={path}>
              {label}
            </Link>
          ) : (
            <span key={index}>{label}</span>
          )
        )}
      </MUIBreadcrumbs>
    </Box>
  );
};

export default Breadcrumbs;
