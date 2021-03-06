<!--lint disable list-item-indent-->
<!--lint disable list-item-bullet-indent-->

# Quasar Test

[![Build Status](https://www.travis-ci.org/s-light/quasar_test.svg?branch=master)](https://www.travis-ci.org/s-light/quasar_test)

some simple tests with the Quasar Framework.

for the SPA (single Page Application) Web-Version you can go to:
[https://s-light.github.io/quasar_test/dist/spa/#/](https://s-light.github.io/quasar_test/dist/spa/)

## getting started
if you are new to quasar and so i recommend [this tutorial](https://github.com/hawkeye64/electron-quasar-file-explorer)

and of course all the other getting-started guides...


## Meta
how to use & install this repository
- clone the repository
- make sure you have
    - node installed  
        ```bash
        $ node -v
        v12.3.1
        ```
    - check [Resolving EACCES permissions errors when installing packages globally](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally)
    - [yarn installed](https://yarnpkg.com/)
    - [quasar installed](https://quasar.dev/quasar-cli/installation)  
        ```bash
        $ npm install -g @quasar/cli
        # ....
        $ quasar -v
        1.0.0-beta.7
        ```
- change to this project folder
    ```bash
    $ cd quasar_test/
    /quasar_test$
    ```
- install requirements
    ```bash
    /quasar_test$ yarn
    # ....
    ```
- then start the SPA app in dev mode
    ```bash
    /quasar_test$ quasar dev
    # ....
    # browser opens and you can use the app ;-)
    ```
- or as electron app
    ```bash
    /quasar_test$ quasar dev --mode electron
    # ....
    ```
