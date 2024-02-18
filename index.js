require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

const githubData = {
    "login": "cwatr",
    "id": 98165264,
    "node_id": "U_kgDOBdniEA",
    "avatar_url": "https://avatars.githubusercontent.com/u/98165264?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/cwatr",
    "html_url": "https://github.com/cwatr",
    "followers_url": "https://api.github.com/users/cwatr/followers",
    "following_url": "https://api.github.com/users/cwatr/following{/other_user}",
    "gists_url": "https://api.github.com/users/cwatr/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/cwatr/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/cwatr/subscriptions",
    "organizations_url": "https://api.github.com/users/cwatr/orgs",
    "repos_url": "https://api.github.com/users/cwatr/repos",
    "events_url": "https://api.github.com/users/cwatr/events{/privacy}",
    "received_events_url": "https://api.github.com/users/cwatr/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Eisha Singh",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 13,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2022-01-21T13:17:50Z",
    "updated_at": "2024-02-18T10:01:46Z"
  }
  

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/instagram', (req, res) =>{
    res.send('__eisha_singh')
})

app.get('/login', (req,res) =>{
    res.send('<h1>Login at chai aur code</h1>')
})

app.get('/youtube', (req,res)=> {
    res.send('<h2>Chai aur Code</h2>')
})

app.get('/github',(req,res)=>{
    res.json(githubData)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})