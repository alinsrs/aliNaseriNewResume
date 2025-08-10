import { ref, watchEffect, onMounted } from 'vue'

const isDark = ref(false)

export function useDarkMode() {
    // Load saved theme on mount
    onMounted(() => {
        const saved = localStorage.getItem('theme')
        isDark.value = saved === 'dark' || (saved === null && window.matchMedia('(prefers-color-scheme: dark)').matches)
    })

    // Watch and update DOM + storage
    watchEffect(() => {
        const root = document.documentElement
        if (isDark.value) {
            root.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            root.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    })

    return { isDark }
}
