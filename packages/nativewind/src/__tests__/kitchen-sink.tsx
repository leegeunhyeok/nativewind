import {
  createMockComponent,
  resetStyles,
} from "react-native-css-interop/testing-library";
import { invalidProperty, invalidValue, style, testCases } from "../test-utils";

afterEach(() => resetStyles());

describe("Interactivity - Accent Color", () => {
  testCases([
    ["accent-inherit", invalidValue("accent-color", "inherit")],
    ["accent-current", invalidProperty("accent-color")],
    ["accent-white", invalidProperty("accent-color")],
  ]);
});

describe("Layout - Align Content", () => {
  testCases([
    ["content-center", style({ alignContent: "center" })],
    ["content-start", style({ alignContent: "flex-start" })],
    ["content-end", style({ alignContent: "flex-end" })],
    ["content-between", style({ alignContent: "space-between" })],
    ["content-around", style({ alignContent: "space-around" })],
    ["content-evenly", invalidValue("align-content", "space-evenly")],
  ]);
});

describe("Layout - Align Items", () => {
  testCases([
    ["items-center", style({ alignItems: "center" })],
    ["items-start", style({ alignItems: "flex-start" })],
    ["items-end", style({ alignItems: "flex-end" })],
    ["items-baseline", style({ alignItems: "baseline" })],
    ["items-stretch", style({ alignItems: "stretch" })],
  ]);
});

describe("Layout - Align Self", () => {
  testCases([
    ["self-auto", style({ alignSelf: "auto" })],
    ["self-start", style({ alignSelf: "flex-start" })],
    ["self-end", style({ alignSelf: "flex-end" })],
    ["self-center", style({ alignSelf: "center" })],
    ["self-stretch", style({ alignSelf: "stretch" })],
    ["self-baseline", style({ alignSelf: "baseline" })],
  ]);
});

describe("Interactivity - Appearance", () => {
  testCases([["appearance-none", invalidProperty("appearance")]]);
});

describe("Layout - Aspect Ratio", () => {
  testCases([
    ["aspect-square", style({ aspectRatio: 1 })],
    ["aspect-video", style({ aspectRatio: "16 / 9" })],
    ["aspect-[4/3]", style({ aspectRatio: "4 / 3" })],
  ]);
});

describe("Filters - Backdrop Blur", () => {
  testCases([["backdrop-blur-none", invalidProperty("backdrop-filter")]]);
});

describe("Filters - Backdrop Brightness", () => {
  testCases([["backdrop-brightness-0", invalidProperty("backdrop-filter")]]);
});

describe("Filters - Backdrop Contrast", () => {
  testCases([["backdrop-contrast-0", invalidProperty("backdrop-filter")]]);
});

describe("Filters - Backdrop Grayscale", () => {
  testCases([["backdrop-grayscale-0", invalidProperty("backdrop-filter")]]);
});

describe("Filters - Backdrop Hue Rotate", () => {
  testCases([["backdrop-hue-rotate-0", invalidProperty("backdrop-filter")]]);
});

describe("Filters - Backdrop Invert", () => {
  testCases([["backdrop-invert-0", invalidProperty("backdrop-filter")]]);
});

describe("Filters - Backdrop Opacity", () => {
  testCases([["backdrop-opacity-0", invalidProperty("backdrop-filter")]]);
});

describe("Filters - Backdrop Saturate", () => {
  testCases([["backdrop-saturate-0", invalidProperty("backdrop-filter")]]);
});

describe("Filters - Backdrop Saturate", () => {
  testCases([["backdrop-sepia-0", invalidProperty("backdrop-filter")]]);
});

describe.only("Filters - Blur", () => {
  testCases([["blur", invalidProperty("filter")]]);
});

describe("Backgrounds - Background Attachment", () => {
  testCases([
    ["bg-fixed", invalidProperty("background-attachment")],
    ["bg-local", invalidProperty("background-attachment")],
    ["bg-scroll", invalidProperty("background-attachment")],
  ]);
});

describe("Effects - Background Blend Mode", () => {
  testCases([
    ["bg-blend-normal", invalidProperty("background-blend-mode")],
    ["bg-blend-multiply", invalidProperty("background-blend-mode")],
    ["bg-blend-screen", invalidProperty("background-blend-mode")],
    ["bg-blend-overlay", invalidProperty("background-blend-mode")],
    ["bg-blend-darken", invalidProperty("background-blend-mode")],
    ["bg-blend-lighten", invalidProperty("background-blend-mode")],
    ["bg-blend-color-dodge", invalidProperty("background-blend-mode")],
    ["bg-blend-color-burn", invalidProperty("background-blend-mode")],
    ["bg-blend-hard-light", invalidProperty("background-blend-mode")],
    ["bg-blend-soft-light", invalidProperty("background-blend-mode")],
    ["bg-blend-difference", invalidProperty("background-blend-mode")],
    ["bg-blend-exclusion", invalidProperty("background-blend-mode")],
    ["bg-blend-hue", invalidProperty("background-blend-mode")],
    ["bg-blend-saturation", invalidProperty("background-blend-mode")],
    ["bg-blend-color", invalidProperty("background-blend-mode")],
    ["bg-blend-luminosity", invalidProperty("background-blend-mode")],
  ]);
});

describe("Backgrounds - Background Clip", () => {
  testCases([
    ["bg-clip-border", invalidProperty("background-clip")],
    ["bg-clip-padding", invalidProperty("background-clip")],
    ["bg-clip-content", invalidProperty("background-clip")],
    ["bg-clip-text", invalidProperty("background-clip")],
  ]);
});

describe("Typography - Background Color", () => {
  testCases([
    ["bg-current", invalidValue("background-color", "currentcolor")],
    ["bg-transparent", style({ backgroundColor: "rgba(0, 0, 0, 0)" })],
    [
      "bg-white",
      {
        style: { backgroundColor: "rgba(255, 255, 255, 1)" },
        meta: { variables: { "--tw-bg-opacity": 1 } },
      },
    ],
  ]);
});

describe("Backgrounds - Background Image", () => {
  testCases([
    ["bg-none", invalidProperty("background-image")],
    ["bg-gradient-to-t", invalidProperty("background-image")],
  ]);
});

describe("Backgrounds - Background Origin", () => {
  testCases([
    ["bg-origin-border", invalidProperty("background-origin")],
    ["bg-origin-padding", invalidProperty("background-origin")],
    ["bg-origin-content", invalidProperty("background-origin")],
  ]);
});

describe("Backgrounds - Background Position", () => {
  testCases([["bg-bottom", invalidProperty("background-position")]]);
});

describe("Backgrounds - Background Repeat", () => {
  testCases([["bg-repeat", invalidProperty("background-repeat")]]);
});

describe("Backgrounds - Background Size", () => {
  testCases([
    ["bg-auto", invalidProperty("background-size")],
    ["bg-cover", invalidProperty("background-size")],
    ["bg-contain", invalidProperty("background-size")],
  ]);
});

describe("Tables - Border Collapse", () => {
  testCases([
    ["border-collapse", invalidProperty("border-collapse")],
    ["border-separate", invalidProperty("border-collapse")],
  ]);
});
