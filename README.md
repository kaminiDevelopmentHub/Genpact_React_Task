## Compassites Code Challenge

## Table of Contents

- [Requirment](#requirment)
- [Description](#description)
- [Folder Structure](#folder-structure)
- [Technical Skills](#technical-skills)

## Requirment

You need to create a Gantt Timeline which looks like this. Original picture is available on the folder as “GanttTimeline.png”

Above chart displays events for a year for different online-campaigns. There are three types of campaigns, Social, Search and Display. These need to be available as accordions which can be collapsed and expanded.

On the top month names will be displayed. There will be not more than 12 months of data at once. But there can be less than 12 months of data for a search.

For individual campaign types, an aggregated data will be shown at top level. In the picture it is displayed as Black, Green and Pink bars. These bars need to be visible even when the campaign details are collapsed.

For each campaign there will be multiple target websites being listed. Each target websites will have its own campaign start and end times.

This is just a read-only UI. No need for any EDIT and ADD

A sample JSON data is available in folder as “gantt.json”

All the dates are in yyyy-mm-dd format

You can use create-react-app or any boilerplates available for development

![coverage report](https://github.com/shree214ram/Compassite-Task/blob/master/assets/images/GanttTimeline.png?raw=true)

## Description

Important Keys :

* Created a React Redux app with Node/React/Redux.
* Configured with npm react/redux/babel/webpack/Bootstrap/Saas-Less plugins.
* Created a Home Component with Redux pattern .
* Call an API with Json file.
* Shown Left Navigation with compain states.
* Shown Right Content Area with 1) Dynamic `types` with Header Average timeline chart and 2) `entities` with respectively timeline chart.

Steps for use :

* Take a git clone https://github.com/shree214ram/Compassite-Task.
* Go to in this folder.
* Run `npm install` command.
* Run `npm start` command.
## Folder Structure

After creation, your project should look like this:

```
Compassite-Task/
  assets/
    images
  config/
    dev.js
    gaintt.json
    int.js
    preprod.js
    prod.js
    qa.js
  node_modules/
  src/
    actions/
      ActionConfigs.js
      ActionType.js
      ActionURL.js
      CompainAction.js
    assets/
      images
    Components/
      Footer
      Header
      Home
      Routes
      Shared
      SideMenuBar
      index.js
    data/
      de.json
      en.json
      fr.json
    helpers/      
    reducers/
      CompainReducers.js
      index.js
    services/
      config.js
    store/
      store.js
    theme/
      _global.scss
    App.css
    App.js
    App.test.js
    config.js
    index.css
    index.js
    logo.svg
  .babelrc
  .eslintrc
  .gitignore
  index.html
  package-lock.josn
  package.json
  README.md
  webpack.config.js
  yarn.lock    
``
```

## Technical Skills

**Operating Systems :** Linux(Ubantu) Terminal command based system handling 

**Databases :**: Json API

**Server Side Languages :** Json API

**Design :** HTML5, CSS3 , Bootstrap 

**Technology :** React-Redux.

**Coding Editor :** Visual Studio.

**Local Server :**  Node Server.

**Scripting Languages :** JavaScript,ECMS-Script6,NodeJS,NPM,ReactJS-Redux,Webpack,babel,Saas/Less

**Version Control Tool :** GIT

