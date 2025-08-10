import {defineStore} from "pinia";

export const usePersonInformationStore = defineStore('personInformation', {
    state: () => {
        return {
            language: 'fa',
            fa: {
                name: 'علی ناصری',
                role: "توسعه دهنده فرانت‌اند",
                aboutSummary: 'توسعه‌دهنده‌ی فرانت‌اند با بیش از سه سال تجربه، آماده‌ی همکاری در پروژه‌های چالش‌برانگیز و فرصت‌های حرفه‌ای جدید.',
                aboutDetailed: 'کارشناس ارشد شبکه‌های کامپیوتری | توسعه‌دهنده‌ی فرانت‌اند\n' +
                    'ساکن تبریز\n' +
                    'برنامه‌نویس فرانت‌اند با تخصص در Vue.js، Nuxt.js، HTML/CSS، Tailwind CSS و WordPress هستم.\n' +
                    'تجربه‌ی من در توسعه‌ی وب شامل طراحی و پیاده‌سازی وب‌سایت‌های مدرن، واکنش‌گرا و کاربرپسند است.\n' +
                    'با تسلط بر وردپرس، توانایی ساخت وب‌سایت‌های داینامیک و قابل مدیریت را دارم.\n' +
                    'ترکیب Tailwind CSS با Vue.js به من این امکان را می‌دهد که رابط‌های کاربری سریع، مدرن و تعاملی طراحی کنم.\n' +
                    'از همکاری در پروژه‌های وب باکیفیت، سئو شده و هدف‌محور استقبال می‌کنم.',

                sideBarData: {
                    city: {
                        title: "شهر",
                        value: 'تبریز',
                    },
                    age: {
                        title: 'سن',
                        value: '24',
                    },
                    typeOfCooperation: {
                        title: 'نوع همکاری',
                        value: 'دورکاری، پاره وقت'
                    },
                },

                phoneNumber: {
                    title: 'شماره تلفن',
                    value: '+989144787269',
                },
                emailAddress: {
                    title: 'ایمیل',
                    value: 'alinaseri797979@gmail.com'
                },
                socialMedias: [
                    {
                        title: 'instagram',
                        icon: './src/assets/icons/instagram.svg',
                        link: 'https://instagram.com/ali._.nsr_s'
                    },
                    {
                        title: 'github',
                        icon: './src/assets/icons/githubLight.svg',
                        link: 'https://github.com/alinsrs'
                    },
                    {
                        title: 'linkedin',
                        icon: './src/assets/icons/linkedin.svg',
                        link: 'https://linkedin.com/in/alinsrs'
                    },
                    {
                        title: 'telegram',
                        icon: './src/assets/icons/telegram.svg',
                        link: 'https://t.me/ali_sss_ali'
                    },
                    {
                        title: 'whatsapp',
                        icon: './src/assets/icons/whatsapp.svg',
                        link: 'https://wa.me/989144787269'
                    },
                ],
                headerLinks: [
                    {
                        title: 'درباره من',
                        link: 'about',
                    },
                    {
                        title: 'سوابق شغلی',
                        link: 'job',
                    },
                    {
                        title: 'توانایی ها',
                        link: 'skills',
                    },
                    {
                        title: 'تحصیلات',
                        link: 'educations',
                    },
                ],
                skills: [
                    {
                        title: 'HTML',
                        imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
                        percent: 99,
                    },
                    {
                        title: 'CSS',
                        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
                        percent: 99,
                    },
                    {
                        title: "TailwindCss",
                        imgSrc: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/tailwindcss/tailwindcss-plain.svg",
                        percent: 99,
                    },
                    {
                        title: 'Javascript',
                        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",
                        percent: 70,
                    },
                    {
                        title: "Vue.js",
                        imgSrc: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/vuejs/vuejs-original.svg",
                        percent: 70,
                    },
                    {
                        title: "Vuetify",
                        imgSrc: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/vuetify/vuetify-original.svg",
                        percent: 99,
                    },
                    {
                        title: "Nuxt.js",
                        imgSrc: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/nuxtjs/nuxtjs-original.svg",
                        percent: 55,
                    },
                    {
                        title: "WordPress",
                        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg",
                        percent: 65,
                    },
                    {
                        title: "Git",
                        imgSrc: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/git/git-original.svg",
                        percent: 80,
                    },
                    {
                        title: "Figma",
                        imgSrc: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/figma/figma-original.svg",
                        percent: 30,
                    },
                    {
                        title: "Node.js",
                        imgSrc: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/nodejs/nodejs-original.svg",
                        percent: 30,
                    },
                    {
                        title: 'Photoshop',
                        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-plain.svg",
                        percent: 80,
                    },
                    {
                        title: 'Premiere pro',
                        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-plain.svg",
                        percent: 70,
                    },
                    {
                        title: "Linux",
                        imgSrc: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/linux/linux-original.svg",
                        percent: 80,
                    },
                ],
                educations: [
                    {
                        fieldOfStudy: 'مهندسی شبکه های کامپیوتری',
                        degreeTitle: 'درجه',
                        degree: 'کارشناسی ارشد',
                        startTitle: 'شروع',
                        start: '1403',
                        endTitle: 'پایان',
                        end: 'تاکنون',
                        institution: 'دانشگاه صنعتی تبریز',
                        institutionLogo: './assets/sahand-uni.png'
                    },
                    {
                        fieldOfStudy: 'مهندسی کامپیوتر',
                        degreeTitle: 'درجه',
                        degree: 'کارشناسی',
                        startTitle: 'شروع',
                        start: '1398',
                        endTitle: 'پایان',
                        end: '1403',
                        institution: 'دانشگاه تبریز',
                        institutionLogo: './assets/tabriz_uni.png'
                    },
                ],
                jobExperiences: [
                    {
                        companyName: 'شرکت توسعه دهندگان نرم افزار درناتک',
                        roleTitle: 'نقش',
                        role: 'توسعه دهنده فرانت-اند، وردپرس، دیزاینر',
                        start: '1401',
                        startTitle: 'تاریخ شروع',
                        endTitle: 'تاریخ پایان',
                        end: 'تا اکنون',
                        projectsTitle: 'پروژه های انجام شده',
                        projects: 'Merkato24.com, Dornatech.ir, Danayan Crowd, Zarrin Crowd'
                    },
                    {
                        companyName: 'فری لنسری',
                        roleTitle: 'نقش',
                        role: 'توسعه دهنده فرانت اند، وردپرس، تدوینگر، دیزاینر',
                        start: '1400',
                        end: 'تا اکنون',
                        startTitle: 'تاریخ شروع',
                        endTitle: 'تاریخ پایان',
                        projectsTitle: 'پروژه های انجام شده',
                        projects: 'bmraof.com, raofyar.ir, kardiannotashengco.com'
                    },
                    {
                        companyName: 'شرکت آرمان صنعت تدبیر اندیش',
                        roleTitle: 'نقش',
                        role: 'توسعه دهنده فرانت اند، وردپرس، دیزاینر',
                        start: '1402',
                        end: '1404',
                        startTitle: 'تاریخ شروع',
                        endTitle: 'تاریخ پایان',
                        projectsTitle: 'پروژه های انجام شده',
                        projects: 'jtsahand.co.ir, asta.jtsahand.co.ir'
                    },
                    {
                        companyName: 'مهد مهارت (مرتضی پاشاپور)',
                        roleTitle: 'نقش',
                        role: 'مدیر فنی، وردپرس، تدوینگر، دیزاینر، حسابدار',
                        start: '1400',
                        end: 'تا اکنون',
                        startTitle: 'تاریخ شروع',
                        endTitle: 'تاریخ پایان',
                        projectsTitle: 'پروژه های انجام شده',
                        projects: 'mortazapashapour.com'
                    },
                ],
                projects: [
                    {
                        title: "وبسایت شرکت درناتک (دمو)",
                        link: 'https://Dornatech.ir',
                        imgSrc: '/dornatech.webp',
                        description: 'فرانت‌اند وب‌سایت شرکت درناتک با استفاده از Nuxt.js 2، Vue.js 2 و Vuetify 2 توسعه یافته است. نسخه دموی وب‌سایت دردسترس میباشد و به زودی به صورت رسمی منتشر خواهد شد.',
                        technologies: 'Nuxt.js, vuetify, Vue.js',
                        role: 'مدیر پروژه - توسعه دهنده فرانت‌اند'
                    },
                    {
                        title: "مرکاتو۲۴ (دمو)",
                        link: 'https://Merkato24.netlify.app',
                        imgSrc: '/merkato24.webp',
                        description: 'مرکاتو ۲۴ یک بازار دیجیتال برای آفریقاست و فرانت‌اند آن با استفاده از Nuxt.js 2، Vue.js 2 و Vuetify 2 توسعه یافته است. این وب‌اپلیکیشن سه پنل دارد: عمومی، کاربر و مدیریت که از طریق آدرس‌های "/" و "/User" و "/Admin" قابل دسترسی هستند. توسعه فرانت‌اند وب‌سایت به پایان رسیده است و در حال حاضر توسعه قسمت بک‌اند در حال انجام است.نسخه‌ی دموی مرکاتو ۲۴ در دسترس است.',
                        technologies: 'Nuxt.js , vuetify , Vue.js , PWA',
                        role: 'توسعه دهنده فرانت‌اند'
                    },
                    {
                        title: "پنل مدیریت پنل های x-ui",
                        link: 'https://panel.gixmetir.online:5002',
                        imgSrc: '/x-uiPanelManager.webp',
                        description: 'این پنل یک پنل برای مدیریت پنل‌های X-ui برای فروش اشتراک‌های V2ray است. فرانت‌اند وب‌سایت آن با استفاده از Vue.js 3 و Tailwind توسعه یافته است. این پنل دارای دو بخش است: مدیریت و مشتری (فروشنده)، و سورس کد پنل در GitHub در دسترس است.',
                        technologies: 'Vue.js , Tailwind Css , PWA',
                        role: 'توسعه دهنده فرانت‌اند',
                        github: 'https://github.com/mahdi-turrkk/x-ui-panel-manager'
                    },
                ],
                emailURL: 'https://sendmail.mahdichavoshi.ir/sendMail.php',
                emailDestination: 'mahdichavoshi14@gmail.com'
            },
            en: {
                name: 'Ali Naseri',
                role: "frontend developer",
                aboutSummary: 'Frontend Developer with 3+ years of experience, open to exciting opportunities and ready to join impactful, forward-thinking projects.',
                aboutDetailed: 'M.Sc. in Computer Networks | Frontend Developer \n' +
                    'Based in Tabriz, Iran \n' + 'I’m a frontend developer specializing in Vue.js, Nuxt.js, HTML/CSS, Tailwind CSS, and WordPress.' +
                    'I have hands-on experience in building modern, responsive, and user-friendly websites.' +
                    '\nMy expertise in WordPress enables me to create dynamic and easy-to-manage websites.' +
                    ' I use Tailwind CSS for rapid and effective design, combined with Vue.js to develop interactive and modern web applications.' +
                    " I'm open to collaboration on high-quality, SEO-friendly web projects.",
                city: {
                    title: 'city',
                    value: 'Tabriz',
                },
                age: {
                    title: 'Age',
                    value: '24',
                },
                typeOfCooperation: {
                    title: 'Type of Cooperation',
                    value: 'remote, Part time'
                },
                phoneNumber: {
                    title: 'Phone',
                    value: '+989144787269'
                },
                emailAddress: {
                    title: 'Email',
                    value: 'AliNaseri797979@gmail.com',
                },
                sideBarData: {
                    city: {
                        title: "City",
                        value: 'Tabriz',
                    },
                    age: {
                        title: 'Age',
                        value: '24',
                    },
                    typeOfCooperation: {
                        title: 'Type of Cooperation',
                        value: 'Part time, remote'
                    },
                },
                socialMedias: [
                    {
                        title: 'instagram',
                        icon: './src/assets/icons/instagram.svg',
                        link: 'https://instagram.com/ali._.nsr_s'
                    },
                    {
                        title: 'github',
                        icon: './src/assets/icons/githubLight.svg',
                        link: 'https://github.com/alinsrs'
                    },
                    {
                        title: 'linkedin',
                        icon: './src/assets/icons/linkedin.svg',
                        link: 'https://linkedin.com/in/alinsrs'
                    },
                    {
                        title: 'telegram',
                        icon: './src/assets/icons/telegram.svg',
                        link: 'https://t.me/ali_sss_ali'
                    },
                    {
                        title: 'whatsapp',
                        icon: './src/assets/icons/whatsapp.svg',
                        link: 'https://wa.me/989144787269'
                    },
                ],
                headerLinks: [
                    {
                        title: 'about me',
                        link: 'about',
                    },
                    {
                        title: 'Jobs',
                        link: 'job',
                    },
                    {
                        title: 'Skills',
                        link: 'skills',
                    },
                    {
                        title: 'Educations',
                        link: 'educations',
                    },
                ],
                skills: [
                    {
                        title: 'HTML',
                        imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
                        percent: 99,
                    },
                    {
                        title: 'CSS',
                        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
                        percent: 99,
                    },
                    {
                        title: "TailwindCss",
                        imgSrc: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/tailwindcss/tailwindcss-plain.svg",
                        percent: 99,
                    },
                    {
                        title: 'Javascript',
                        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",
                        percent: 70,
                    },
                    {
                        title: "Vue.js",
                        imgSrc: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/vuejs/vuejs-original.svg",
                        percent: 70,
                    },
                    {
                        title: "Vuetify",
                        imgSrc: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/vuetify/vuetify-original.svg",
                        percent: 99,
                    },
                    {
                        title: "Nuxt.js",
                        imgSrc: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/nuxtjs/nuxtjs-original.svg",
                        percent: 55,
                    },
                    {
                        title: "WordPress",
                        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg",
                        percent: 65,
                    },
                    {
                        title: "Git",
                        imgSrc: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/git/git-original.svg",
                        percent: 80,
                    },
                    {
                        title: "Figma",
                        imgSrc: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/figma/figma-original.svg",
                        percent: 30,
                    },
                    {
                        title: "Node.js",
                        imgSrc: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/nodejs/nodejs-original.svg",
                        percent: 30,
                    },
                    {
                        title: 'Photoshop',
                        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-plain.svg",
                        percent: 80,
                    },
                    {
                        title: 'Premiere pro',
                        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-plain.svg",
                        percent: 70,
                    },
                    {
                        title: "Linux",
                        imgSrc: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/linux/linux-original.svg",
                        percent: 80,
                    },
                ],
                educations: [
                    {
                        fieldOfStudy: 'Computer Networks Engineering',
                        degreeTitle: 'Degree',
                        degree: 'Master degree',
                        startTitle: 'Start',
                        start: '2024',
                        endTitle: 'End',
                        end: 'Now',
                        institution: 'Tabriz university of technology',
                        institutionLogo: './assets/sahand-uni.png'
                    },
                    {
                        fieldOfStudy: 'Computer Engineering',
                        degreeTitle: 'Degree',
                        degree: 'Bachelor',
                        startTitle: 'Start',
                        start: '2019',
                        endTitle: 'End',
                        end: '2024',
                        institution: 'دانشگاه تبریز',
                        institutionLogo: './assets/tabriz_uni.png'
                    },
                ],
                jobExperiences: [
                    {
                        companyName: 'DornaTech Development',
                        roleTitle: 'Role',
                        role: 'Frontend Developer',
                        startTitle: 'Start Date',
                        start: '2022',
                        endTitle: 'End Date',
                        end: 'present',
                        projectsTitle: 'Done Projects',
                        projects: 'Merkato24.com, Dornatech.ir, Danayan Crowd, Zarrin Crowd'
                    },
                    {
                        companyName: 'Freelancing',
                        roleTitle: 'Role',
                        role: 'Frontend Developer, wordpress, Video Editor, designer',
                        start: '2022',
                        end: 'present',
                        startTitle: 'Start Date',
                        endTitle: 'End Date',
                        projectsTitle: 'Done Projects',
                        projects: 'bmraof.com, raofyar.ir, kardiannotashengco.com'
                    },
                    {
                        companyName: 'Arman Sanaat Tadbir Andish',
                        roleTitle: 'Role',
                        role: 'Frontend Developer, wordpress, Designer',
                        start: '2022',
                        end: '2024',
                        startTitle: 'Start Date',
                        endTitle: 'End Date',
                        projectsTitle: 'Done Projects',
                        projects: 'jtsahand.co.ir, asta.jtsahand.co.ir'
                    },
                    {
                        companyName: 'Mahd-e-Maharat (Mortaza Pashapour)',
                        roleTitle: 'Role',
                        role: 'Technical Manager, Wordpress, Designer, accountant',
                        start: '2021',
                        end: 'present',
                        startTitle: 'Start Date',
                        endTitle: 'End Date',
                        projectsTitle: 'Done Projects',
                        projects: 'mortazapashapour.com'
                    },
                ],
                projects: [
                    {
                        title: "Dornatech Company Website (Demo)",
                        link: 'https://Dornatech.ir',
                        imgSrc: '/dornatech.webp',
                        description: 'Dornatech Website\'s Front-End Developed Using Nuxt.Js 2, Vue.Js 2, And Vuetify 2. A Demo Version Of The Website Is Already Available And Will Be Officially Published In The Near Future.',
                        technologies: 'Nuxt.js , vuetify , Vue.js',
                        role: 'Frontend Developer, Project Manager'
                    },
                    {
                        title: "Merkato24 (Demo)",
                        link: 'https://Merkato24.netlify.app',
                        imgSrc: '/merkato24.webp',
                        description: 'Merkato 24 Is A Digital Marketplace For Africa, And Its Frontend Has Been Developed Using Nuxt.Js 2, Vue.Js 2, And Vuetify 2. The Marketplace Has Three Panels: Public, User, And Admin, Which Can Be Accessed Through The URLs "/" & "/User" And "/Admin". The Frontend Development Is Already Complete And The Backend Is Currently Under Development.Merkato 24 Has A Demo Version Available.',
                        technologies: 'Nuxt.js , vuetify , Vue.js , PWA',
                        role: 'Frontend Developer'
                    },
                    {
                        title: "X-UI Panel Manager",
                        link: 'https://panel.gixmetir.online:5002',
                        imgSrc: '/x-uiPanelManager.webp',
                        description: 'X-ui panel manager is panel for managing x-ui panels for selling v2ray subscriptions, And Its Frontend Has Been Developed Using Vue.Js 3, And Tailwind. It has two Panels: Admin & Customer(SuperCustomer),panel\'s source code is available at github.',
                        technologies: 'Vue.js , Tailwind Css , PWA',
                        role: 'Frontend Developer',
                        github: 'https://github.com/mahdi-turrkk/x-ui-panel-manager'
                    },
                ],
                emailURL: 'https://sendmail.mahdichavoshi.ir/sendMail.php',
                emailDestination: 'mahdichavoshi14@gmail.com'
            }
        }
    },
    getters: {
        getPersonInfo() {
            return this[this.language]
        },
    },
    actions: {
        changeLanguage(lang) {
            if (['fa', 'en'].includes(lang)) {
                this.language = lang
                localStorage.setItem('lang', lang) // ذخیره انتخاب
            }
        },
    }

})