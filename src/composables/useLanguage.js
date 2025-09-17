// src/composables/useLanguage.js
import { ref, watchEffect } from 'vue'

const currentLanguage = ref(localStorage.getItem('language') || 'fa')

// اجرای فوری تغییرات روی DOM و ذخیره
watchEffect(() => {
    const root = document.documentElement
    root.setAttribute('lang', currentLanguage.value)
    root.setAttribute('dir', currentLanguage.value === 'fa' ? 'rtl' : 'ltr')
    localStorage.setItem('language', currentLanguage.value)
})

// تابع اصلی
export function useLanguage() {
    function toggleLanguage() {
        currentLanguage.value = currentLanguage.value === 'fa' ? 'en' : 'fa'
    }

    return { currentLanguage, toggleLanguage }
}