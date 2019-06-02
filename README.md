<!--lint disable list-item-indent-->
<!--lint disable list-item-bullet-indent-->

# Quasar Test

some simple tests with the Quasar Framework.

for the SPA (single Page Application) Web-Version you can go to:
[https://s-light.github.io/quasar_test/helloworld/dist/spa/#/](https://s-light.github.io/quasar_test/helloworld/dist/spa/)


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
    - [quasar installed](https://quasar.dev/quasar-cli/installation)  
        ```bash
        $ npm install -g @quasar/cli
        # ....
        $ quasar -v
        1.0.0-beta.7
        ```
- change to quasar-app folder
    ```bash
    $ cd helloworld/
    /helloworld$
    ```
- install requirements
    ```bash
    /helloworld$ npm install
    # ....
    ```
- then start the SPA app in dev mode
    ```bash
    /helloworld$ quasar dev
    # ....
    # browser opens and you can use the app ;-)
    ```
