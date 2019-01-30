## Project startup

To run a project you will need to have:
1. `nodejs` (version 8.10.0 or later). To switch between `nodejs` versions you can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) (Windows)
2. `npm` (version 5.0.0 or later). Node package manager (`npm`) installs together with `nodejs`

To install dependencies, run a command:
`npm install`. It will install all dependencies required for project from package-lock.json file. This command is need to be run only for the first launching

## Application usage
There are two avaliable types of filters. You can filter candidates list by their name and by their city. 
1. To filter by name, type desired name into first input and click `Search By Candidate's name`. To get all candidates back, click on `Search By Candidate's name` again
2. To filter by city, type desired city into second input and click `Search By City`. To get all candidates back, click on `Search By City` again
3. To move candidates between columns, click on arrows

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run code-analyzer`

Generate Plato report for project <br>
Report containing a lot of useful information such as total amount of lines or average code maintability <br>
It generates report into `report` folter 

### `npm run build-docker-image`

To run this and the next command you need to have an installed [Docker](https://www.docker.com/) on your machine.
This command will create an image of a project

### `npm run start-docker-image`

Current command will start a docker image with a project

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
