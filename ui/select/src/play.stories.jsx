import * as React from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectLabel,
  SelectContent,
  SelectItem,
  SelectGroup,
} from "./";

import * as SelectPrimitive from "@radix-ui/react-select";

export default {
  title: "Select",
  component: Select.Root,
  subcomponents: {
    Trigger: SelectTrigger,
    Value: SelectValue,
    Item: SelectItem,
    Group: SelectGroup,
    Label: SelectPrimitive.Label,
    Content: SelectPrimitive.Content,
  },
};

const Template = (args) => {
  const countries = {
    france: "🇫🇷",
    "united-kingdom": "🇬🇧",
    spain: "🇪🇸 Spain",
    peru: "🇵🇪 Peru",
    chile: "🇨🇱",
    ecuador: "🇪🇨 Ecuador",
  };

  const [value, setValue] = React.useState("france");

  return (
    <Select.Root value={value} onValueChange={setValue}>
      <SelectTrigger aria-label="Countries">
        <SelectLabel>Countries</SelectLabel>
        <SelectValue aria-label={value}>{countries[value]}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup label="Europe">
          <SelectItem value="france">France</SelectItem>
          <SelectItem value="united-kingdom">United Kingdom</SelectItem>
          <SelectItem value="spain">Spain</SelectItem>
        </SelectGroup>
        <SelectGroup label="South America">
          <SelectItem value="peru">Peru</SelectItem>
          <SelectItem value="chile">Chile</SelectItem>
          <SelectItem value="ecuador">Ecuador</SelectItem>
        </SelectGroup>
        <SelectGroup label="Europe">
          <SelectItem value="france">France</SelectItem>
          <SelectItem value="united-kingdom">United Kingdom</SelectItem>
          <SelectItem value="spain">Spain</SelectItem>
        </SelectGroup>
        <SelectGroup label="South America">
          <SelectItem value="peru">Peru</SelectItem>
          <SelectItem value="chile">Chile</SelectItem>
          <SelectItem value="ecuador">Ecuador</SelectItem>
        </SelectGroup>
        <SelectGroup label="Europe">
          <SelectItem value="france">France</SelectItem>
          <SelectItem value="united-kingdom">United Kingdom</SelectItem>
          <SelectItem value="spain">Spain</SelectItem>
        </SelectGroup>
        <SelectGroup label="South America">
          <SelectItem value="peru">Peru</SelectItem>
          <SelectItem value="chile">Chile</SelectItem>
          <SelectItem value="ecuador">Ecuador</SelectItem>
        </SelectGroup>
        <SelectGroup label="Europe">
          <SelectItem value="france">France</SelectItem>
          <SelectItem value="united-kingdom">United Kingdom</SelectItem>
          <SelectItem value="spain">Spain</SelectItem>
        </SelectGroup>
        <SelectGroup label="South America">
          <SelectItem value="peru">Peru</SelectItem>
          <SelectItem value="chile">Chile</SelectItem>
          <SelectItem value="ecuador">Ecuador</SelectItem>
        </SelectGroup>
        <SelectGroup label="Europe">
          <SelectItem value="france">France</SelectItem>
          <SelectItem value="united-kingdom">United Kingdom</SelectItem>
          <SelectItem value="spain">Spain</SelectItem>
        </SelectGroup>
        <SelectGroup label="South America">
          <SelectItem value="peru">Peru</SelectItem>
          <SelectItem value="chile">Chile</SelectItem>
          <SelectItem value="ecuador">Ecuador</SelectItem>
        </SelectGroup>
        <SelectGroup label="Europe">
          <SelectItem value="france">France</SelectItem>
          <SelectItem value="united-kingdom">United Kingdom</SelectItem>
          <SelectItem value="spain">Spain</SelectItem>
        </SelectGroup>
        <SelectGroup label="South America">
          <SelectItem value="peru">Peru</SelectItem>
          <SelectItem value="chile">Chile</SelectItem>
          <SelectItem value="ecuador">Ecuador</SelectItem>
        </SelectGroup>
        <SelectGroup label="Europe">
          <SelectItem value="france">France</SelectItem>
          <SelectItem value="united-kingdom">United Kingdom</SelectItem>
          <SelectItem value="spain">Spain</SelectItem>
        </SelectGroup>
        <SelectGroup label="South America">
          <SelectItem value="peru">Peru</SelectItem>
          <SelectItem value="chile">Chile</SelectItem>
          <SelectItem value="ecuador">Ecuador</SelectItem>
        </SelectGroup>
        <SelectGroup label="Europe">
          <SelectItem value="france">France</SelectItem>
          <SelectItem value="united-kingdom">United Kingdom</SelectItem>
          <SelectItem value="spain">Spain</SelectItem>
        </SelectGroup>
        <SelectGroup label="South America">
          <SelectItem value="peru">Peru</SelectItem>
          <SelectItem value="chile">Chile</SelectItem>
          <SelectItem value="ecuador">Ecuador</SelectItem>
        </SelectGroup>
        <SelectGroup label="Europe">
          <SelectItem value="france">France</SelectItem>
          <SelectItem value="united-kingdom">United Kingdom</SelectItem>
          <SelectItem value="spain">Spain</SelectItem>
        </SelectGroup>
        <SelectGroup label="South America">
          <SelectItem value="peru">Peru</SelectItem>
          <SelectItem value="chile">Chile</SelectItem>
          <SelectItem value="ecuador">Ecuador</SelectItem>
        </SelectGroup>
        <SelectGroup label="Europe">
          <SelectItem value="france">France</SelectItem>
          <SelectItem value="united-kingdom">United Kingdom</SelectItem>
          <SelectItem value="spain">Spain</SelectItem>
        </SelectGroup>
        <SelectGroup label="South America">
          <SelectItem value="peru">Peru</SelectItem>
          <SelectItem value="chile">Chile</SelectItem>
          <SelectItem value="ecuador">Ecuador</SelectItem>
        </SelectGroup>
        <SelectGroup label="Europe">
          <SelectItem value="france">France</SelectItem>
          <SelectItem value="united-kingdom">United Kingdom</SelectItem>
          <SelectItem value="spain">Spain</SelectItem>
        </SelectGroup>
        <SelectGroup label="South America">
          <SelectItem value="peru">Peru</SelectItem>
          <SelectItem value="chile">Chile</SelectItem>
          <SelectItem value="ecuador">Ecuador</SelectItem>
        </SelectGroup>
        <SelectGroup label="Europe">
          <SelectItem value="france">France</SelectItem>
          <SelectItem value="united-kingdom">United Kingdom</SelectItem>
          <SelectItem value="spain">Spain</SelectItem>
        </SelectGroup>
        <SelectGroup label="South America">
          <SelectItem value="peru">Peru</SelectItem>
          <SelectItem value="chile">Chile</SelectItem>
          <SelectItem value="ecuador">Ecuador</SelectItem>
        </SelectGroup>
        <SelectGroup label="Europe">
          <SelectItem value="france">France</SelectItem>
          <SelectItem value="united-kingdom">United Kingdom</SelectItem>
          <SelectItem value="spain">Spain</SelectItem>
        </SelectGroup>
        <SelectGroup label="South America">
          <SelectItem value="peru">Peru</SelectItem>
          <SelectItem value="chile">Chile</SelectItem>
          <SelectItem value="ecuador">Ecuador</SelectItem>
        </SelectGroup>
        <SelectGroup label="Europe">
          <SelectItem value="france">France</SelectItem>
          <SelectItem value="united-kingdom">United Kingdom</SelectItem>
          <SelectItem value="spain">Spain</SelectItem>
        </SelectGroup>
        <SelectGroup label="South America">
          <SelectItem value="peru">Peru</SelectItem>
          <SelectItem value="chile">Chile</SelectItem>
          <SelectItem value="ecuador">Ecuador</SelectItem>
        </SelectGroup>
        <SelectGroup label="Europe">
          <SelectItem value="france">France</SelectItem>
          <SelectItem value="united-kingdom">United Kingdom</SelectItem>
          <SelectItem value="spain">Spain</SelectItem>
        </SelectGroup>
        <SelectGroup label="South America">
          <SelectItem value="peru">Peru</SelectItem>
          <SelectItem value="chile">Chile</SelectItem>
          <SelectItem value="ecuador">Ecuador</SelectItem>
        </SelectGroup>
        <SelectGroup label="Europe">
          <SelectItem value="france">France</SelectItem>
          <SelectItem value="united-kingdom">United Kingdom</SelectItem>
          <SelectItem value="spain">Spain</SelectItem>
        </SelectGroup>
        <SelectGroup label="South America">
          <SelectItem value="peru">Peru</SelectItem>
          <SelectItem value="chile">Chile</SelectItem>
          <SelectItem value="ecuador">Ecuador</SelectItem>
        </SelectGroup>
        <SelectGroup label="Europe">
          <SelectItem value="france">France</SelectItem>
          <SelectItem value="united-kingdom">United Kingdom</SelectItem>
          <SelectItem value="spain">Spain</SelectItem>
        </SelectGroup>
        <SelectGroup label="South America" divider={false}>
          <SelectItem value="peru">Peru</SelectItem>
          <SelectItem value="chile">Chile</SelectItem>
          <SelectItem value="ecuador">Ecuador</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select.Root>
  );
};

export const Play = Template.bind({});

Play.args = {};

Play.storyName = "Select";