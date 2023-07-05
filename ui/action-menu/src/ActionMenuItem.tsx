import * as React from "react";

import WPDS, { theme, styled } from "@washingtonpost/wpds-theme";

import * as ActionMenuPrimitive from '@radix-ui/react-dropdown-menu';

import { DropdownMenuItemProps as RadixDropdownMenuItemProps } from "@radix-ui/react-dropdown-menu";

import { Divider } from "@washingtonpost/wpds-divider";

export const ItemStyles = {
  alignItems: "center",
  background: theme.colors.secondary,
  display: "flex",
  flexBasis: "auto",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  transition: `background ${theme.transitions.fast} ${theme.transitions.inOut}`,
  paddingLeft: theme.sizes["100"],
  paddingRight: theme.sizes["100"],

  "&:hover": {
    backgroundColor: theme.colors.alpha25,
    cursor: "pointer",
  },

  "&[data-disabled]": {
    color: theme.colors.disabled,
    pointerEvents: "none",
  },

  "&[data-disabled] svg": {
    fill: theme.colors.disabled,
  },
}

export const ItemContent = styled("div", {
  display: "flex",
  flexDirection: "row",
  marginRight: theme.sizes["075"],
  alignItems: "center",
});

const StyledItem = styled(ActionMenuPrimitive.Item, ItemStyles);

export type ActionMenuItemProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
} & RadixDropdownMenuItemProps;


export const ActionMenuItem = React.forwardRef<HTMLDivElement, ActionMenuItemProps>(({ children, ...props }: ActionMenuItemProps, ref) => {
  return <div>
    <StyledItem {...props} ref={ref} className="action-menu-item">
      <ItemContent>
        {children}
      </ItemContent>
    </StyledItem>
    <Divider />
  </div >
});
