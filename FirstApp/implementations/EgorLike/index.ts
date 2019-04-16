const user = new User()
const auth = new Auth({ user: new User() })

const app = new App({
  auth,
  router: new Router({ auth, user })
})

app.init()


