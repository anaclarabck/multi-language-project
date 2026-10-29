"use client";
import React from "react";
import { Breadcrumbs as MUIBreadcrumbs, Link, Box } from "@mui/material";
import { useBreadcrumbs } from "@/hooks";
import { KeyboardArrowRightRounded } from "@mui/icons-material";

const Breadcrumbs: React.FC = () => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <Box sx={{ pt: 2, pb: 2 }}>
      <MUIBreadcrumbs
        aria-label="breadcrumb"
        separator={<KeyboardArrowRightRounded />}
      >
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
