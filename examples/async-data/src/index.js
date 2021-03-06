import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const About = {
  data() {
    return {
      name: 'no'
    }
  },
  asyncData (){
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          name: 'yes'
        }, 400)
      })
    })
  },
  render() {
    return <h1>About {this.name}</h1>
  }
}

const Home = {
  render() {
    return <router-link to="/about">goto about</router-link>
  }
}

const router = new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: Home
  }, {
    path: '/about',
    component: About
  }]
})

export default { router }
