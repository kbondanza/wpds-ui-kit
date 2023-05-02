// /* eslint-disable @next/next/no-img-element */
import * as React from "react";
import {
  Icon,
  styled,
  AlertBanner,
  Checkbox,
  Container,
  Button,
  InputLabel,
  InputText,
  InputPassword,
  InputTextarea,
  HelperText,
  ErrorMessage,
  RadioGroup,
  RadioButton,
  css,
  Divider,
  Avatar,
  PaginationDots,
  Drawer,
  Tooltip,
  Card,
  Popover,
  Switch,
  Tabs,
} from "@washingtonpost/wpds-ui-kit";
import { Chart, Settings, Info } from "@washingtonpost/wpds-assets";

const Headline = styled("h1", {
  paddingTop: "$200",
  color: "$primary",
  fontFamily: "$headline",
  fontSize: "$300",
  lineHeight: "$headline",
});

const Stack = styled("section", {
  display: "flex",
  flexDirection: "column",
  gap: "$100",
  marginBlockStart: "$200",
  borderRadius: "$075",
});

const HStack = styled("section", {
  display: "flex",
  flexDirection: "row",
  gap: "$100",
  borderRadius: "$075",
});

const StyledTabsContent = styled(Tabs.Content, {
  minHeight: "50px",
  paddingTop: "20px",
  color: "$primary",
});

export const KitchenSink = () => {
  return (
    <>
      <Headline>Kitchen Sink</Headline>
      <p>
        All code in this app is meant for testing components that use objects
        that are only available in JavaScript in the browser.
      </p>

      <Stack>
        <h2>Container</h2>
        <Container
          maxWidth="lg"
          css={{
            width: "100%",
            border: "1px dashed $gray100",
            background: "rgb(148, 83, 140, 0.2)",
            height: "$500",
            color: "$primary",
          }}
        >
          Extra lg
        </Container>

        <h2>Icon with Asset</h2>
        <HStack>
          <Icon label="Chart">
            <Chart />
          </Icon>
          <Icon label="Chart" size="150">
            <Chart />
          </Icon>
          <Icon label="Chart" size="200">
            <Chart />
          </Icon>
        </HStack>

        <h2>AlertBanner</h2>
        <AlertBanner.Root position="relative" variant="error">
          <AlertBanner.Content as="p">
            <strong>Example:</strong> boop
          </AlertBanner.Content>
          <AlertBanner.Trigger />
        </AlertBanner.Root>

        <h2>Button</h2>
        <HStack>
          <Button>Hello World</Button>
        </HStack>

        <h2>Checkbox</h2>
        <HStack>
          <>
            <HStack>
              <Checkbox checked variant="primary" size="125" id="checkbox1" />
              <Checkbox checked variant="secondary" id="checkbox2" />
              <Checkbox checked variant="cta" id="checkbox3" />
            </HStack>
            <HStack>
              <Checkbox checked size="087" id="checkbox4" />
              <Checkbox checked size="125" id="checkbox5" />
            </HStack>
            <HStack>
              <Checkbox checked id="checkbox6" />
              <Checkbox checked isOutline id="checkbox7" />
            </HStack>
            <HStack>
              <Checkbox checked id="checkbox8" />
              <Checkbox checked={false} id="checkbox9" />
              <Checkbox checked="indeterminate" id="checkbox10" />
            </HStack>
            <HStack>
              <Checkbox disabled id="checkbox11" />
            </HStack>
            <HStack>
              <Checkbox
                checked
                variant="primary"
                id="cb1"
                label="With a label"
              />
            </HStack>
          </>
        </HStack>

        <h2>Input Shared</h2>
        <HStack>
          <InputLabel>Input label</InputLabel>
          <HelperText>
            Helper text <a href="#">with link</a>
          </HelperText>
          <ErrorMessage>
            Error Message <strong>with formatting</strong>
          </ErrorMessage>
        </HStack>

        <h2>InputText</h2>
        <HStack>
          <InputText label="Label" name="it-1" id="it-1" />
          <InputText
            label="Label"
            helperText="Helper text"
            defaultValue="Input text"
            name="it-2"
            id="it-2"
          />
          <InputText
            label="Icon"
            defaultValue="Left"
            icon="left"
            name="it-3"
            id="it-3"
          >
            <Icon label="">
              <Settings />
            </Icon>
          </InputText>
          <InputText
            label="Icon"
            defaultValue="Right"
            icon="right"
            buttonIconText="Settings"
            name="it-4"
            id="it-4"
          >
            <Icon label="">
              <Settings />
            </Icon>
          </InputText>
        </HStack>
        <HStack>
          <InputText
            label="Type"
            defaultValue="Search"
            type="search"
            name="it-5"
            id="it-5"
          />
          <InputText
            label="Type"
            defaultValue="Url"
            type="url"
            name="it-6"
            id="it-6"
          />
          <InputText
            label="Type"
            defaultValue="Tel"
            type="tel"
            name="it-7"
            id="it-7"
          />
          <InputText
            label="Type"
            defaultValue="Email"
            type="email"
            name="it-8"
            id="it-8"
          />
        </HStack>
        <HStack>
          <InputText
            label="Behavior"
            defaultValue="Disabled"
            disabled
            name="it-9"
            id="it-9"
          />
          <InputText
            label="Behavior"
            defaultValue="Error"
            error
            errorMessage="Error Message"
            name="it-10"
            id="it-10"
          />
          <InputText
            label="Behavior"
            defaultValue="Success"
            success
            name="it-11"
            id="it-11"
          />
          <InputText
            label="Behavior"
            defaultValue="Required"
            required
            name="it-12"
            id="it-12"
          />
        </HStack>
        <h2>InputPassword</h2>
        <HStack>
          <InputPassword name="ip-1" id="ip-1" />
          <InputPassword name="ip-2" id="ip-2" defaultValue="12345" />
        </HStack>

        <h2>InputTextarea</h2>
        <HStack>
          <InputTextarea label="InputTextarea" name="ita-1" id="ita-1" />
          <InputTextarea
            label="InputTextarea"
            name="ita-1"
            id="ita-1"
            defaultValue="With text content"
          />
        </HStack>

        <h2>RadioGroup</h2>
        <HStack>
          <RadioGroup legend="Primary" variant="primary" name="pri">
            <RadioButton label="Option 1" value="opt1" id="p-opt1" checked />
            <RadioButton label="Option 2" value="opt2" id="p-opt2" />
          </RadioGroup>
          <RadioGroup legend="Secondary" variant="secondary" name="sec">
            <RadioButton label="Option 1" value="opt1" id="s-opt1" checked />
            <RadioButton label="Option 2" value="opt2" id="s-opt2" />
          </RadioGroup>
          <RadioGroup legend="CTA" variant="cta" name="cta">
            <RadioButton label="Option 1" value="opt1" id="c-opt1" checked />
            <RadioButton label="Option 2" value="opt2" id="c-opt2" />
          </RadioGroup>
        </HStack>
        <HStack>
          <RadioGroup
            legend="Primary - outline"
            variant="primary"
            name="pri"
            isOutline
          >
            <RadioButton label="Option 1" value="opt1" id="p-opt1" checked />
            <RadioButton label="Option 2" value="opt2" id="p-opt2" />
          </RadioGroup>
          <div
            className={css({
              backgroundColor: "$onSecondary",
              padding: "$025",
            })()}
          >
            <RadioGroup
              legend={
                <span className={css({ color: "$secondary" })()}>
                  Secondary - outline
                </span>
              }
              variant="secondary"
              name="sec"
              isOutline
            >
              <RadioButton label="Option 1" value="opt1" id="s-opt1" checked />
              <RadioButton label="Option 2" value="opt2" id="s-opt2" />
            </RadioGroup>
          </div>
          <RadioGroup legend="CTA - outline" variant="cta" name="cta" isOutline>
            <RadioButton label="Option 1" value="opt1" id="c-opt1" checked />
            <RadioButton label="Option 2" value="opt2" id="c-opt2" />
          </RadioGroup>
        </HStack>
        <HStack>
          <RadioGroup legend="Disabled" name="dis" disabled>
            <RadioButton label="Option 1" value="opt1" id="d-opt1" checked />
            <RadioButton label="Option 2" value="opt2" id="d-opt2" />
          </RadioGroup>
          <RadioGroup
            legend="Error"
            name="err"
            error
            errorMessage="Error message"
          >
            <RadioButton label="Option 1" value="opt1" id="e-opt1" checked />
            <RadioButton label="Option 2" value="opt2" id="e-opt2" />
          </RadioGroup>
        </HStack>
        <h2>Divider</h2>
        <Divider />
        <h2>Avatar</h2>
        <Avatar size="200">
          <img
            src="https://i.pravatar.cc/300/300"
            alt="An avatar is an atomic component that represents an individual’s identity through a circular photo."
          />
        </Avatar>
        <Avatar>
          <img
            src="https://i.pravatar.cc/300/300"
            width="32"
            height="32"
            alt="An avatar is an atomic component that represents an individual’s identity through a circular photo."
          />
          {/* <Image
            loader={ImageLoader}
            src="https://i.pravatar.cc/300/300"
            width="32"
            height="32"
            layout="fixed"
            alt="An avatar is an atomic component that represents an individual’s identity through a circular photo."
          /> */}
        </Avatar>
        <h2>Pagination Dots</h2>
        <Stack css={{ width: "200px", marginBlockStart: "0" }}>
          <HStack>
            <PaginationDots amount={6} index={1} label="Pagination label" />
          </HStack>
          <HStack>
            <PaginationDots amount={7} index={4} label="Pagination label" />
          </HStack>
          <HStack>
            <PaginationDots amount={5} index={3} label="Pagination label" />
          </HStack>
          <HStack>
            <PaginationDots amount={5} index={5} label="Pagination label" />
          </HStack>
        </Stack>
      </Stack>
      <h2>Drawer</h2>
      <Drawer.Root id="drawer-id">
        <Drawer.Trigger>Trigger Drawer</Drawer.Trigger>
        <Drawer.Content>
          <Drawer.Close />
          Drawer Content
        </Drawer.Content>
        <Drawer.Scrim />
      </Drawer.Root>
      <h2>Tooltip</h2>
      <Tooltip.Provider>
        <Tooltip.Root defaultOpen={true}>
          <Tooltip.Trigger>
            <span>This is a tooltip trigger</span>
          </Tooltip.Trigger>
          <Tooltip.Content side="right">
            i want lots of things to go here and for this to get super super
            long and for this to never stop and i want more fries and i want it
            to rain but i also want the sun and i wasnt a vacataions and it
            doesn&apos;t matter if this is misspelled or whatverer.
          </Tooltip.Content>
        </Tooltip.Root>
      </Tooltip.Provider>
      <h2>Card</h2>
      <Card
        css={{
          display: "flex",
          alignItems: "center",
          gap: "$075",
          maxWidth: "500px",
        }}
      >
        <p>Brand new digital content free with subscription!</p>
        <Button variant="primary">Subscribe</Button>
      </Card>
      <h2>Popover</h2>
      <Popover.Root>
        The Button with Icon triggers a Popover{" "}
        <Popover.Trigger asChild>
          <Button icon="center" css={{ display: "inline" }}>
            <Icon label="info">
              <Info />
            </Icon>
          </Button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content side="top">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam non
            eget consequat pretium.
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
      <h2>Switch</h2>
      <Switch.Root>
        <Switch.Thumb />
      </Switch.Root>
      <h2>Tabs</h2>
      <Tabs.Root defaultValue="tab1">
        <Tabs.List aria-label="Countries' information">
          <Tabs.Trigger value="tab1">France</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Kenya</Tabs.Trigger>
          <Tabs.Trigger value="tab3">Austria</Tabs.Trigger>
        </Tabs.List>
        <StyledTabsContent value="tab1">France is here 🇫🇷</StyledTabsContent>
        <StyledTabsContent value="tab2">Kenya is here 🇰🇪</StyledTabsContent>
        <StyledTabsContent value="tab3">Austira is here 🇦🇹</StyledTabsContent>
      </Tabs.Root>
    </>
  );
};