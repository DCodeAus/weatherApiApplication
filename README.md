# Weather API Application

A small command-line program: type a town, city or postcode and it tells you the current temperature there. It uses the free [OpenWeatherMap](https://openweathermap.org) service and is written in Node.js with the [Axios](https://www.npmjs.com/package/axios) package for web requests.

Based on [this Javascript Today tutorial](https://blog.javascripttoday.com/blog/create-a-node-js-weather-app/).

## What you need

- [Node.js](https://nodejs.org). Check it's installed with `node --version`.
- A free OpenWeatherMap **API key** (a password that lets a program use their service). Sign up at [openweathermap.org](https://home.openweathermap.org/users/sign_up), then copy your key from [API keys](https://home.openweathermap.org/api_keys). A new key can take up to a couple of hours to start working.
- An internet connection.

## How to run it

1. Download the code and open Terminal in its folder:
   ```bash
   git clone https://github.com/DCodeAus/weatherApiApplication.git   # or Code › Download ZIP
   cd weatherApiApplication
   ```
2. Install Axios (it goes into a `node_modules` folder):
   ```bash
   npm install
   ```
3. Save your API key in a file called `keys/apiKeys.js`:
   ```bash
   mkdir keys
   echo 'module.exports = "PASTE_YOUR_KEY_HERE";' > keys/apiKeys.js
   ```
   The `keys` folder is listed in `.gitignore`, so git never uploads your key to GitHub.
4. Run it:
   ```bash
   node index.js
   ```

## What you'll see

```
Enter a location or a postal code: 8150

Current date and time: Sun, 30 Jun 2024 11:37:03 GMT
It's 36.88 degrees in 8150.
```

Temperatures are in °C. A postcode on its own is looked up in OpenWeatherMap's default country; for Australia, try a place name such as `Sydney` or `Sydney,AU`.

If something goes wrong, you get a one-line message instead:

| Message | What it means |
|---|---|
| `Error: city not found` | OpenWeatherMap didn't recognise the place. Check the spelling. |
| `Error: Invalid API key...` | The key in `keys/apiKeys.js` is wrong, or it's brand new and not active yet. |
| `Error: couldn't reach the weather service - check you're online.` | No internet connection, or the service is down. |

## Ideas for next steps

- Show the temperature in Fahrenheit as well (OpenWeatherMap returns Fahrenheit if you change `units=metric` to `units=imperial`).
- Show more of the forecast: the API also returns humidity, wind and a description like "light rain".

## How I built it (step by step)

These are the steps I followed to create the project from nothing, including setting up git.

1. Create directory for the weather application.
   `mkdir weather`
   `touch index.js`

2. Initiate the project
   `npm init`
   This is where you enter your package variables that you decide on, name of project, version number and creator.

3. Install Axios (documentation here https://www.npmjs.com/package/axios)
   `npm i axios`

4. Check your package looks okay, by now you should have, an index.js, node_modules folder, package.json, package-lock.json.

Optional committing to git
Its always good practice to have version control for any project you work on, this helps with being device independant especially if you work from a portable device such as a laptop. 

5. Git commands.
`git init`
This initializes the repository ready for git and creates a .git subdirectory in your working directory.

6. `touch README.md`
   This creates an empty readme file. This is your landing page in the repository to go with your project, populate as you see fit. Else you can run `echo "# Weather API Application readme" >> README.md`

7. `touch .gitignore`
   This creates a file of which you can 'ignore' or not commit the sensitive files or big files to your repo.
   I recommend ignoring any files that contain keys, or create a keys file/directory to store that information and import it into your project using variables.
   Also ignore node_modules, as when you clone the package to a new machine, you will run npm install anyway. Do commit package-lock.json: it pins the exact package versions, so every install gets the same ones and Dependabot can flag security fixes.

8. `git add --all`
   This will add all the files, and through the .gitignore file, will read that and not upload those certain files.

9. `git commit -m "First commit for weather API project"`
   This is the commit message when you setup your repo on github or your chosen code repository site.

10. `git branch -M main`
    This sets up your branch to be MAIN or the main branch you will work from when working in git.
    You can further branch out once your repo is established, this is always best practice to start off with your main code as the initial commit, unless you have an already established project to add, in which case retain the local branching structure of that project.

11. `git remote add origin https://github.com/YOURREPONAME/WeatherAPI.git` or whatever you have chosen to call your project.

12. `git push -u origin main`
    This is pushing your code up to your repo for the first commit.

For API key, will need to be signed up from this URL. Its free to register for the single API.
https://home.openweathermap.org/api_keys
