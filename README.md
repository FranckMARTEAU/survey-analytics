# SurveyJS Dashboard
[![Build Status](https://dev.azure.com/SurveyJS/SurveyJS%20Integration%20Tests/_apis/build/status/SurveyJS%20Library?branchName=master)](https://dev.azure.com/SurveyJS/SurveyJS%20Integration%20Tests/_build/latest?definitionId=7&branchName=master)
<a href="https://github.com/DevExpress/testcafe">
<img alt="Tested with TestCafe" src="https://img.shields.io/badge/tested%20with-TestCafe-2fa4cf.svg">
</a>
<a href="https://github.com/surveyjs/survey-analytics/issues">
<img alt="Open Issues" title="Open Issues" src="https://img.shields.io/github/issues/surveyjs/survey-analytics.svg">
</a>
<a href="https://github.com/surveyjs/survey-analytics/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aclosed+">
<img alt="Closed issues" title="Closed issues" src="https://img.shields.io/github/issues-closed/surveyjs/survey-analytics.svg">
</a>

The SurveyJS Dashboard library lets you build survey data dashboards and simplify survey data analysis with interactive and customizable charts and tables. Visualize your insights and analyze survey results in one view.

![SurveyJS Analytics](docs/images/survey-analytics-overview.png)

## Features

- Supported chart and graph types:
  - Bar chart
  - Donut graph
  - Pie chart
  - Line chart (also known as line graph or curve chart)
  - Gauge chart
  - Bullet graph
  - Scatter plot
  - Word cloud
- Interactive value filtering ordering
- Customizable colors
- Dynamic layout
- Drag-and-drop chart reordering

## Get Started

- [Angular](https://surveyjs.io/Documentation/Analytics?id=get-started-angular)
- [Vue](https://surveyjs.io/Documentation/Analytics?id=get-started-vue)
- [React](https://surveyjs.io/Documentation/Analytics?id=get-started-react)
- [Knockout / jQuery](https://surveyjs.io/Documentation/Analytics?id=get-started-knockout-jquery)

## Resources

- [Website](https://surveyjs.io/)
- [Documentation](https://surveyjs.io/Documentation/Analytics)
- [Live Examples](https://surveyjs.io/Examples/Analytics)
- [What's New](https://surveyjs.io/WhatsNew)

## Build SurveyJS Analytics from Sources

1. **Clone the repo**

    ```
    git clone https://github.com/surveyjs/survey-analytics.git
    cd survey-analytics
    ```

1. **Install dependencies**          
Make sure that you have Node.js v6.0.0 or later and npm v2.7.0 or later installed.

    ```
    npm install
    ```

1. **Build the library**

    ```
    npm run build:prod
    ```

    You can find the built scripts and style sheets in the `packages` folder.

1. **Run test examples**

    ```
    npm start
    ```

    This command runs a local HTTP server at http://localhost:8080/.

1. **Run unit tests**

    ```
    npm test
    ```

## Licensing

SurveyJS Analytics is **not available for free commercial usage**. If you want to integrate it into your application, you must purchase a [commercial license(s)](https://surveyjs.io/licensing) for software developer(s) who will be working with the SurveyJS product's APIs and implementing their integration.
