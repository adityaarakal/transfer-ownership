# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

**Folder Structure**
assets --added
components --added
constants --added
core-ui --added as material-ui in branch name = material-ui
helpers
hooks --added
interfaces --added
pages --added
services --added
validations --added --validations schema can be found in formik guides @https://formik.org/docs/guides/validation in case we use formik for forms, we need to find similar feature in case we use some other library

**Pre Commit and Pre Push Hooks**
Reference: https://dev.to/maithanhdanh/configuration-for-husky-pre-commit-1fo5
Commands:
npx husky-init && npm install
npx husky add .husky/pre-commit "npm test"
npx husky add .husky/pre-push "npm test"

**Make sure you use following script to run test, otherwise the pre-commit or pre-push won't end**
react-scripts test --env=jsdom --watchAll=false --bail

**Add following to pre-commit and pre-push files to restrict branch naming**
local_branch="$(git rev-parse --abbrev-ref HEAD)"

valid_branch_regex="^(feature|bugfix|improvement|library|prerelease|release|hotfix|setup)\/[a-z0-9._-]+$"

message="There is something wrong with your branch name. Branch names in this project must adhere to this contract: $valid_branch_regex. Your commit will be rejected. You should rename your branch to a valid name and try again."

if [[ ! $local_branch =~ $valid_branch_regex ]]
then
    echo "$message"
    exit 1
fi

**setup sass with react**
npm i --save node-sass
update declarations.d.ts to include scss module alongside css module

**install styled components library" -- aditya arakal
npm i styled-components
npm i --save-dev @types/styled-components