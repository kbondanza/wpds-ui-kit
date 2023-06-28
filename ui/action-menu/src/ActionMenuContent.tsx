import * as React from "react";

import { theme, styled } from "@washingtonpost/wpds-theme";

import * as ActionMenuPrimitive from '@radix-ui/react-dropdown-menu';

import {
  DropdownMenuContentProps as RadixDropdownMenuContentProps,
} from "@radix-ui/react-dropdown-menu";
import { ActionMenuPortal } from "./ActionMenuPortal";

export const ContentStyles = {
  background: theme.colors.secondary,
  // border: `solid 1px ${theme.colors.subtle}`,
  borderRadius: theme.radii["012"],
  boxShadow: theme.shadows["200"],
  color: theme.colors.primary,
  width: "fit-content",
  minWidth: "150px",
  maxHeight: "var(--radix-dropdown-menu-content-available-height)",
  maxWidth: "var(--radix-dropdown-menu-content-available-width)",
  overflow: "auto",
}

export const StyledContent = styled(ActionMenuPrimitive.Content, ContentStyles);

const StyledArrow = styled(ActionMenuPrimitive.Arrow, {
  fill: theme.colors.secondary,
});

export const ActionMenuContent = React.forwardRef<HTMLDivElement, RadixDropdownMenuContentProps>(({ children, ...props }: RadixDropdownMenuContentProps, ref) => {
  return <ActionMenuPortal>
    <StyledContent {...props} ref={ref} >
      <StyledArrow
        stroke={theme.colors.subtle.value}
        strokeWidth="2"
        strokeDasharray="0 30 28.284"
      />
      {children}
    </StyledContent>
  </ActionMenuPortal>
});