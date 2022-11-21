# Micro-Frontend (MFE)
Micro-frontend Demo Project in Angular

## Topic List
- Load remote module/component using "webpack module federation"
- Load remote component from HTML
- Input/Output binding with remote component using "ngx-mfe"
- Communication between MFE using CustomEvent
- Communication between MFE using Shared Service and RxJs
- MFE using web components (@angular/elements)
- Load remote MFE from another MFE
- Necessary libraries
  - Webpack module federation
  - ngx-mfe
  - angular/elements
  - nx
  - elementjs
  - single-spa
- Shared resources:
  - library/services
  - style
  - config
  - version mismatch issue
- Passing Injector to MFE, Why & when do we need this? 
- Router snapshot/navigate behaviour within Shell (Host) & MFE
- Config based remote module loading from Shell
- References


## Load remote module/component using "webpack module federation"
Ref - https://github.com/angular-architects/module-federation-plugin/blob/main/libs/mf/tutorial/tutorial.md
### Project setup
- #### Create workspace
    `ng n micro-frontend-demo --create-application false`

- #### Go to workspace directory
    `cd micro-frontend-demo`

- #### Create shell (host) application
    `ng generate application shell --routing`

- #### Add component into shell (host) application
    `ng g c landingpage --project=shell`

- #### Create MFE application
    `ng generate application products --routing`

- #### Add module into MFE application
    `ng g module dashboard --routing --project=products`

    `ng g module catalog --routing --project=products`

- #### Add component into MFE application
    `ng g c dashboard/dashboard-table --project=products`

    `ng g c catalog/catalog --project=products`

- #### Install and configure module federation library into the Shell
    `ng add @angular-architects/module-federation --project shell --type host --port 4200`

- #### Install and configure module federation library into the mfe
    `ng add @angular-architects/module-federation --project products --type remote --port 4201`
