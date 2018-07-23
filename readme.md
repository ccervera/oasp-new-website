# Devonfw new website!
Welcome to the new Devonfw help page.
## Installation
This project is a simple plain html/css/javascript **landing page**.
It includes many scripts coded in **ajax & jQuery**.

The project itself is built with **Webpack**, a tool that merges all dependencies files inside a single **.js** file, commonly named **bundle.js**.
### Webpack steps
Using your favorite **package manager**, in this case **npm**, you will have to install some basic packages.
In this case, the followed steps have been realized through the next guide [How to include Bootstrap in your project with Webpack](https://stevenwestmoreland.com/2018/01/how-to-include-bootstrap-in-your-project-with-webpack.html).

Finally, whenever you make an internal dependency change, you should execute `npm run build` to repack everything needed.
### Run
To **avoid** script related access **issues**:
You may **run a local server** with your preferred tool commands.
#### Examples:
##### Python :
1. Go to your working directory where you have your index
2. Execute command `python -m SimpleHTTPServer`
3. Access your server through `http://localhost:8000`
##### Node.js
1. Install `http-server` through `npm install -g http-server`
2. Go to your working directory where you have your index
3. Run an http server through `http-server -c-1`
4. Access your server through `http://localhost:8080`
## Architecture
The **main internal goal** of this project is to have a **clean** structure, **maintainable** folders and files, and really easy **read** schemes.

According to the objectives, a **simple solution** has been designed to respect these **guidelines**:
### Modularization
The project is easily maintained by modularizing and recycling any **html elements**. Headers, footers, section, and any other kind are supposed to be coded in **different files**

The following mark has been designed for modularization and insertion process:

First, Create component `folder`:
```
/dist/yoursection/yourComponentFolderName
```
Then, create an `html` and a `css` file:
```
/dist/yoursection/yourComponentFolderName/component.html
/dist/yoursection/yourComponentFolderName/component.css
```
Finally, in your main html code:
```
<body>
    ...
    <insertHtml url="/yourpath/yourComponentFolderName"></insertHtml>
    ...
</body>
```
As you may notice, this scheme is pretty much **angular** alike.
## Developer custom tools
### Hide/Show html elements based on Capgemini network conntection
1. Show elements ONLY if **connected** to Capgemini network
using the html class `only-internal`.
Example: 
```
...
<div class="only-internal">This content will be shown only if internal Capgemini access is available</div>
...
```

2. Show elements ONLY if **not connected** to Capgemini network
using the html class `only-external`.
Example: 
```
...
<div class="only-external">This content will be shown if the user is outside the Capgemini network</div>
...
```

### Implementing Markdown files
1. Preferably place your Markdown file in `/dist/assets/markdown/` (note that `dist` is probably your root directory and therefore doesn't have to be specified)
2. Use the `insertMd` HTML tag and specify the actual Markdown file with the `src` parameter.
Example:
```
<insertMd src="/assets/markdown/helloworld.md"></insertMd>
```
3. The `loadMarkdownInsertions()` function at `main.js` will deal with the conversion from Markdown to HTML and inject the content.