# weatherApiApplication

Based on this document/idea from Javascript today
https://blog.javascripttoday.com/blog/create-a-node-js-weather-app/

1. Create directory for the weather application.
   `mkdir weather`
   `touch index.js`

2. Intiate the project
   `npm init`
   This is where you enter your package variables that you decide on, name of project, version number and creator.

3. Install Axios (documentation here https://www.npmjs.com/package/axios)
   `npm i axios`

4. Check your package looks okay, by now you should have, an index.js, node_modules folder, package.json, package-lock.json.

Optional committing to git
Its always good practice to have version control for any project you work on, this helps with being device independant especially if you work from a portable device such as a laptop. 5. Git commands.
`Git init`
This initializes the repository ready for git and creates a .git subdirectory in your working directory.

6. `touch README.md`
   This creates an empty readme file. This is your landing page in the repository to go with your project, populate as you see fit. Else you can run `echo "# Weather API Application readme" >> README.md`

7. `touch .gitignore`
   This creates a file of which you can 'ignore' or not commit the sensitive files or big files to your repo.
   I recommend ignoring any files that contain keys, or create a keys file/directory to store that information and import it into your project using variables.
   Also ignore the package-lock.josn and node_modules, as when you clone the package to a new machine, you will run npm install anyway.

8. `git add --all`
   This will add all the files, and through the .gitignore file, will read that and not upload those certain files.

9. `git commit -m "First commit for weather API project`
   This is the commit message when you setup your repo on github or your chosen code repository site.

10. `git branch -M main`
    This sets up your branch to be MAIN or the main branch you will work from when working in git.
    You can further branch out once your repo is established, this is always best practice to start off with your main code as the initial commit, unless you have an already established project to add, in which case retain the local branching structure of that project.

11. `git remote add origin https://github.com/YOURREPONAME/WeatherAPI.git` or whatever you have chosen to call your project.

12. `git push -u origin main`
    This is pushing your code up to your repo for the first commit.

For API key, will need to be signed up from this URL.
https://home.openweathermap.org/api_keys
