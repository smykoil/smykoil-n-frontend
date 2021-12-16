<template>
  <div>
    <div class="fixed bg-gray-800 w-80 h-full text-white flex flex-col">
      <h1 class="px-4 py-2 text-2xl font-medium">Smykoil</h1>
      <ul class="px-2 flex-1">
        <li v-for="item of items" :key="item.id">
          <NLink
            class="block p-2 hover:bg-white hover:bg-opacity-5 rounded mb-2 text-sm" 
            :to="item.link"
          >
            {{ item.title }}
          </NLink>
        </li>
      </ul>
      <div class="p-4 flex gap-2 items-center">
        <img :src="$auth.user.avatar_thumb" class="w-12 rounded-full" />
        <div class="flex flex-col text-xs">
          <span class="truncate">{{ $auth.user.name }}</span>
          <NLink class="text-green-400 truncate" to="/profile">Редактировать профиль</NLink>
        </div>
        <button class="w-8 h-8 hover:bg-white hover:bg-opacity-5 flex items-center justify-center rounded focus:border focus:border-gray-500">
          >
        </button>
      </div>
    </div>
    <main class="ml-80">
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {
  name: "ConsoleLayout",
  data: () => ({
    items: [
      { id: 1,  title: 'Консоль',   link: '/admin' },
      { id: 2,  title: 'Статьи',    link: '/admin/articles' },
    ]
  })
}
</script>