import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Home",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "viniciusnevescosta.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#FFFCF0",
          lightgray: "#E6E4D9",
          gray: "#9F9D96",
          darkgray: "#575653",
          dark: "#1C1B1A",
          secondary: "rgb(102, 128, 11)",
          tertiary: "rgb(135, 154, 57)",
          highlight: "rgba(36, 131, 123, 0.12)",
          textHighlight: "#3AA99F",
        },
        darkMode: {
          light: "#1C1B1A",
          lightgray: "#403E3C",
          gray: "#9F9D96",
          darkgray: "#CECDC3",
          dark: "#FFFCF0",
          secondary: "rgb(102, 128, 11)",
          tertiary: "rgb(135, 154, 57)",
          highlight: "rgba(58, 169, 159, 0.18)",
          textHighlight: "#3AA99F",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config

// lightMode: {
//   light: "#F5F5F4",         // Cinza off-white
//   lightgray: "#E1E1DE",
//   gray: "#9C9C97",
//   darkgray: "#565653",
//   dark: "#262625",
//   secondary: "#8C5E3C",     // Cobre
//   tertiary: "#B07C4F",      // Cobre claro
//   highlight: "rgba(176, 124, 79, 0.2)",
//   textHighlight: "#B07C4F"
// },
// darkMode: {
//   light: "#262625",
//   lightgray: "#565653",
//   gray: "#9C9C97",
//   darkgray: "#D1D1CE",
//   dark: "#F5F5F4",
//   secondary: "#B07C4F",
//   tertiary: "#8C5E3C",
//   highlight: "rgba(176, 124, 79, 0.25)",
//   textHighlight: "#D7A879"
// }
