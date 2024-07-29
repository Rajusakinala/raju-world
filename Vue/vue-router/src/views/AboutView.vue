<template>
  <div>
    <h1>About view</h1>
    <button @click="$router.go(-1)">back</button>
    <button @click="$router.go(-2)">back 2 steps</button>
    <button @click="$router.push('jhbvkvjc dshk jbbc')">
      some random route page
    </button>
    <div>
      <button @click="$router.push('user')">user page</button>
      <button @click="$router.push('user/1')">user 1 page</button>
      <button @click="$router.push({ name: 'user', params: { id: '1' } })">
        user 1 page with name
      </button>
      <button @click="$router.push({ path: `/user/${6}` })">
        user 1 page with param
      </button>

      <button @click="$router.push('user/2')">user 2 page</button>
      <button @click="$router.push('user/4')">user 4 page</button>

      <button
        @click="
          $router.push({
            path: '/user/9',
            query: {
              id: '1',
              name: 'hjkksfid',
              age: [18, 19],
              fev: { color: 'orange', mobile: 'mi' },
            },
          })
        "
      >
        user 9 page with query
      </button>
    </div>
  </div>
  <div>
    <button @click="$router.push('/')">home page go</button>
    <button @click="$router.push({ path: '/', state: 'csgjdk' })">
      home page go with state not working
    </button>
  </div>
</template>

<script setup></script>

<style scoped></style>
