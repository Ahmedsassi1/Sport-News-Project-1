<template>
  <section class="navigation">
    <img class="brand" src="./assets/Logo1.png" />
    <div v-if="check" class="nav-container">
      <div>
        
      </div>
      <nav>
        <div class="nav-mobile"><a id="nav-toggle" href="#!"><span></span></a></div>
        <ul>
          <li>
            <router-link to="allPosts">Home </router-link>
          </li>
          <li>
            <router-link to="AddPost">Add Post </router-link>
          </li>
          <li>
            <router-link to="AddAdmin">Add Admin </router-link>

          </li>
          <li>
            <router-link to="AllAdmins">All Admins </router-link>
          </li>
          <li>
            <router-link to="/">Log Out </router-link>
          </li>

          
        </ul>
      </nav>
    </div>
  </section>
  <aside class="sidebar">
    <nav class="nav">
      <ul>
        <li class="active"><a href="#">Categories</a></li> 
        <br/>
       <li> <router-link class="button-side" to="footballNews">Football</router-link></li>
        <br/>
        <li> <router-link class="button-side" to="basketballNews" >BasketBall</router-link></li>
        <br/>
        <li> <router-link class="button-side" to="tennisNews" >Tennis</router-link></li>
      </ul>
    </nav>
  </aside>
  <router-view />
</template>



<script>
  
export default {
  data() {
    return {
      check: true,
    }
  }}

</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500&family=Quicksand&display=swap');
$content-width: 1000px;
$breakpoint: 799px;
$nav-height: 70px;
$nav-background: #262626;
$nav-font-color: #ffffff;
$link-hover-color: #74201d;

// Outer navigation wrapper
.navigation {
  height: $nav-height;
  background: $nav-background;
  font-family: 'Quicksand', sans-serif;
}

// Logo and branding
.brand {
  position:relative;
  padding:0px 0;
  float: left;
  line-height: $nav-height;
  text-transform: uppercase;
  font-size: 1.4em;

  a,
  a:visited {
    color: $nav-font-color;
    text-decoration: none;
  }
}

// Container with no padding for navbar
.nav-container {
  max-width: $content-width;
  margin: 0 auto;
}

// Navigation 
.brand {
  width: 100px;
  height: 100px;
}

nav {
  float: right;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      float: left;
      position: relative;

      a,
      a:visited {
        display: block;
        padding: 0 20px;
        line-height: $nav-height;
        background: $nav-background;
        color: $nav-font-color;
        text-decoration: none;

        &:hover {
          background: $link-hover-color;
          color: $nav-font-color;
        }

        &:not(:only-child):after {
          padding-left: 4px;
          content: ' ▾';
        }
      }

      // Dropdown list
      ul li {
        min-width: 190px;

        a {
          padding: 15px;
          line-height: 20px;
        }
      }
    }
  }
}

// Dropdown list binds to JS toggle event
.nav-dropdown {
  position: absolute;
  display: none;
  z-index: 1;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
}

/* Mobile navigation */

// Binds to JS Toggle
.nav-mobile {
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  background: $nav-background;
  height: $nav-height;
  width: $nav-height;
}

@media only screen and (max-width: 798px) {

  // Hamburger nav visible on mobile only
  .nav-mobile {
    display: block;
  }

  nav {
    width: 100%;
    padding: $nav-height 0 15px;

    ul {
      display: none;

      li {
        float: none;

        a {
          padding: 15px;
          line-height: 20px;
        }

        ul li a {
          padding-left: 30px;
        }
      }
    }
  }

  .nav-dropdown {
    position: static;
  }
}

@media screen and (min-width: $breakpoint) {
  .nav-list {
    display: block !important;
  }
}

#nav-toggle {
  position: absolute;
  left: 18px;
  top: 22px;
  cursor: pointer;
  padding: 10px 35px 16px 0px;

  span,
  span:before,
  span:after {
    cursor: pointer;
    border-radius: 1px;
    height: 5px;
    width: 35px;
    background: $nav-font-color;
    position: absolute;
    display: block;
    content: '';
    transition: all 300ms ease-in-out;
  }

  span:before {
    top: -10px;
  }

  span:after {
    bottom: -10px;
  }

  &.active span {
    background-color: transparent;

    &:before,
    &:after {
      top: 0;
    }

    &:before {
      transform: rotate(45deg);
    }

    &:after {
      transform: rotate(-45deg);
    }
  }
}

.all-posts {

  margin-right: 20px;
  text-decoration: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}

$color: rgb(250, 250, 246);

.sidebar {
  position:absolute;
  width: 20%;
  height: 95%;
  background: #312450;
  font-size: 0.65em;
}

.nav {
  position: relative;
  margin: 0 15%;
  text-align: right;
  top: 50%;
  transform: translateY(-50%);
  font-weight: bold;

}

.nav ul {
  list-style: none;
  
  li {
    position: relative;
    margin: 3.2em 0;
    
    a {
      line-height: 5em;
      text-transform: uppercase;
      text-decoration: none;
      letter-spacing: 0.4em;
      color: rgba(#FFF, 0.35);
      display: block;
      transition: all ease-out 300ms;
    }
    
    &.active a {
      color: white;
    }
    
    &:not(.active)::after {
      opacity: 0.2;
    }
    
    &:not(.active):hover a {
      color: rgba(#FFF, 0.75);
    }
    
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 0.2em;
      background: black;
      left: 0;
      bottom: 0;
      background-image: linear-gradient(to right, #5e42a6, #b74e91)
    }
  }
}

</style>
