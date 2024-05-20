# Babel Street Design System Toolkit (ds-toolkit)

## Introduction

Welcome to the Babel Street Design System Toolkit (ds-toolkit) repository! This toolkit is a React component library developed to facilitate the creation of user interfaces for Babel Street's production applications. It uses the [MUI](https://mui.com/) component library under the hood.

In this guide, we'll walk you through the essential information to get started with ds-toolkit, whether you're a new developer or an experienced contributor.

You might find yourself perusing this README if you're either integrating the ds-toolkit into your application or considering contributing to the ds-toolkit project.

## Table of Contents

1. [Installing ds-toolkit to your machine](#installing-ds-toolkit-to-your-machine)
2. [Integrating ds-toolkit into your app](#integrating-ds-toolkit-into-your-app)
3. [Storybook](#storybook)
4. [MUI](#mui-material-user-interface)
5. [Version Release Workflow](#version-release-workflow)
6. [Pseudo Release Workflow](#pseudo-release-workflow)
7. [FAQs](#faqs)

## Installing ds-toolkit to your machine

To configure the ds-toolkit repository on your local machine for either contributing or accessing Storybook, adhere to the following steps:

**1. Clone the Repository**: Navigate to your preferred projects directory and clone the repository using the following command:

```bash
git clone https://git.babelstreet.com/babelstreet/design-system.git
```

**2. Install Dependencies**: Move into the root directory of the cloned repository and install the necessary dependencies:

```bash
cd design-system
yarn install
```

**3. Set Up Figma Credentials**: Navigate to ./packages/design-token-service/ and create a file named .env.json. Copy and paste the following Figma credentials into this file.
[Click here to get the FIGMA_TOKEN from the Babel Stret BitWarden password and secrets manager.](https://bitwarden.babelstreet.com/#/vault?organizationId=674fd725-1f33-4747-859a-a95f010512ba&itemId=41c776af-e4b8-42a4-b399-b15300e0202e)

```json
// env.json
{
  "FIGMA_FILE_ID": "TZydv8oeNtlzA0TU8aFW4c",
  "FIGMA_TOKEN": "figd_Y-I***************"
}
```

**3. Pull Design Tokens**: Navigate to the root directory and run the following command. It will pull down the design tokens from our design system in Figma:

```bash
yarn tokens
```

**4. Launch Storybook**: launch Storybook locally to view our components and their related documentation.

```bash
yarn dev:storybook
```

Congratulations! You've completed the installation of the ds-toolkit repository.

## Integrating ds-toolkit into your app

You do not need to install the ds-toolkit to your local machine in order to integrate ds-toolkit library into your application.

Follow these steps to add ds-toolkit to your app:

**1. Ensure you have permissions to download from Nexus**: In order to download the ds-toolkit you first need to be added to the npm-group permissions group on Nexus. Ensure you are added to this group before proceeding.

**2. Create Nexus config file**: Create a config file in order to allow you to download the ds-toolkit from Nexus.

If you are using **NPM** to manage your dependencies in your project: Create a .npmrc file at the root directory of your project. Add the following:

```
always-auth = true
save-exact = true
package-lock = true
engine-strict = true
registry = https://nexus.babelstreet.com/repository/npm-group/
metrics-registry = https://nexus.babelstreet.com/repository/npm-group/
sentrycli_cdnurl = https://nexus.babelstreet.com/repository/sentry-cli/
```

And then run `npm install`. You should see the console/terminal complete the ds-toolkit download and install successfully.

If you are using **yarn** to manage your dependencies in your project: Create a .yarnrc file at the root directory of your project. Add the following lines:

```
always-auth true
save-exact true
package-lock true
engine-strict true
registry https://nexus.babelstreet.com/repository/npm-group/
sentrycli_cdnurl https://nexus.babelstreet.com/repository/sentry-cli/
```

And then run `yarn`. You should see the console/terminal complete the ds-toolkit download and install successfully.

**3. Using ds-toolkit components**

You may now begin using the React components provided from the ds-toolkit. These components will largely be wrappers of MUI components. You will occasionally see components not found in MUI. In order to see what components are available to use, and to try them out, you can run Storybook locally or view our Storybook hosted on Chromatic [here](https://www.chromatic.com/library?appId=62ab8c00c906f1a6f4aa3785).

If you would rather run Storybook locally on your machine see the [Installing ds-toolkit to your machine](#installing-ds-toolkit-to-your-machine) section above.

## Storybook

[Here](https://babelstreet.atlassian.net/wiki/x/IQA2D) is a rundown on what Storybook is and how we use it.

## MUI (Material User Interface)

[Here](https://babelstreet.atlassian.net/wiki/spaces/FREEM/pages/205127684/What+is+MUI+and+how+do+we+use+it) is a detailed rundown on what MUI is and why we use it.

## Version release workflow

[Here](https://babelstreet.atlassian.net/wiki/spaces/FREEM/pages/99778601/Code+Journey+ds-toolkit) is a detailed rundown of how to release a new version of ds-toolkit.

## Pseudo release workflow

[Here](https://babelstreet.atlassian.net/wiki/x/HYBOD) is a rundown on how to make a pseudo release for ds-toolkit for development/testing with your application.
