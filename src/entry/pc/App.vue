<template>
  <div id="app" class="site-frame flex">
    <header class="site-header">
      ヘッダー
    </header>
    <div class="content-frame flex">
      <nav class="content-menu" role="navigation">
        <ul class="no-bullet" style="text-align:center">
          <li class="menu-list-item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="menu-list-item">
            <router-link to="/about">About</router-link>
          </li>
        </ul>
      </nav>
      <main class="content-body" role="main">
        <keep-alive>
          <router-view />
        </keep-alive>
      </main>
    </div>
    <footer class="site-footer">
      フッター
    </footer>
  </div>
</template>

<style lang="stylus" scoped>
#app
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

.flex
  display: flex
  flex-direction: column
  flex-wrap: nowrap
  align-items: stretch
  justify-content: flex-start

.site-frame
  width: 100%
  height: 100%

.site-header
  flex-grow: 0
  flex-basis: 100px
  width: 100%
  min-height: 100px
  background-color: #ccc

.site-footer
  flex-grow: 0
  flex-basis: 60px
  width: 100%
  min-height: 60px
  background-color: #ccc

.content-frame
  flex-grow: 1
  width: 100%

.content-frame.flex
  flex-direction: row

.content-menu
  flex-grow: 0
  flex-shrink: 0
  flex-basis: 200px
  background-color: #ddd

.content-body
  flex-grow: 1
  flex-shrink: 1
  min-width: 0
  padding: 0 0 0 15px
  background-color: #eee
  overflow: scroll

.no-bullet
  list-style:none
  margin: 0
  padding: 0

.menu-list-item
  width: 100%
  height: 50px
  line-height: 50px
  &:hover
    background-color: #eee
  > a
    display: block
    width: 100%
    height: 100%
    padding-left: 17px
    text-decoration: none
    color: #2c3e50
    &.router-link-exact-active
      font-weight: bold
      background-color: #eee
      color: #42b983
</style>
