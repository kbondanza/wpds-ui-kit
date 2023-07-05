import * as React from "react";

import WPDS, { styled } from "@washingtonpost/wpds-theme";

import * as ActionMenuPrimitive from '@radix-ui/react-dropdown-menu';

import {
  DropdownMenuRadioGroupProps as RadixDropdownMenuRadioGroupProps,
} from "@radix-ui/react-dropdown-menu";

export const StyledRadioGroup = styled(ActionMenuPrimitive.RadioGroup, {});

export type ActionMenuRadioGroupProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
} & RadixDropdownMenuRadioGroupProps;


export const ActionMenuRadioGroup = React.forwardRef<HTMLDivElement, ActionMenuRadioGroupProps>(({ children, ...props }: ActionMenuRadioGroupProps, ref) => {
  return (
    <StyledRadioGroup {...props} ref={ref} >
      {children}
    </StyledRadioGroup>
  );
});