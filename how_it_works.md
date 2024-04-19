Start front end projet using next with this command : 
    npx create-next-app@latest

To run the app on browser in mode developer : 
    npm run dev 

In Next all components are server side, in order to change their type to client, you'll need to writte in top of each component this :
    "use client";

Client components in Next are the traditional components in React.

Next has file-system based routing mechanism, which means that the paths of your website are controlled by names of files and folders.
In order to use this, you'll need to create a folder "app" inside "src" folder, then create pages...

so you need to create 2 files per default : page.jsx and layout.tsx
the page.jsx is for the http://localhost:3000/ and layout.tsx like index.js in React

Now if you want to implement this path : http://localhost:3000/about/ you will need to create a folder named about inside app folder inside src folder and inside it you will create page.jsx so that you can start writting on the page of about

Now if you have http://localhost:3000/blog/first and http://localhost:3000/blog/second you will need to create 2 folders inside the blog folder and in both of them create page.jsx 

A private folder is a folder that it is excluded from the routing system and all its subfolders, to achieve this you will need to create the name of folder with an underscore _

Group Routes like => /auth/login , /auth/register/ , /auth/forgot-password,...
but if you want just to use /login and /register and /forgot-password which means you mute the /auth bu they are all groups route ... you ll need to make the name auth of folder inside () like this way : (auth) 




