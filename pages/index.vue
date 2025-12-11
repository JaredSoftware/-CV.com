<template>
  <div class="font-display bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark antialiased min-h-screen">
    <div class="relative flex h-auto min-h-screen w-full flex-col">
      <div class="layout-container flex h-full grow flex-col">
        <main class="flex-1 py-12 md:py-20">
          <div class="mx-auto flex max-w-6xl flex-col gap-12 px-4">
            <!-- Header -->
            <header class="flex flex-col items-center gap-8 md:gap-12">
              <!-- Modelo 3D -->
              <Model3D 
                :model-path="modelPath"
                :auto-rotate="true"
                :rotation-speed="0.005"
                class="w-full max-w-md"
              />
              
              <div class="flex flex-col md:flex-row items-center md:items-center justify-center gap-8 md:gap-12 w-full">
                <div 
                  class="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-32 w-32 md:h-40 md:w-40 flex-shrink-0" 
                  :style="{ backgroundImage: `url('${basePath}jared.jpeg')` }"
                ></div>
                <div class="flex flex-col text-center md:text-left items-center md:items-start gap-4 w-full md:w-auto">
                  <div>
                    <h1 class="text-text-primary-light dark:text-white text-4xl md:text-5xl font-extrabold tracking-tighter">
                      {{ $t('name') }}
                    </h1>
                    <p class="text-primary dark:text-blue-400 text-lg md:text-xl font-medium mt-1">
                      {{ $t('title') }}
                    </p>
                  </div>
                  <p class="text-text-secondary-light dark:text-text-secondary-dark max-w-xl text-base md:text-lg">
                    {{ $t('description') }}
                  </p>
                  <button 
                    class="group flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-6 bg-blue-500 text-white text-base font-bold leading-normal tracking-wide hover:bg-blue-600 transition-all duration-300 ease-in-out"
                    @click="downloadCV"
                  >
                    <span class="material-symbols-outlined !text-xl transition-transform duration-300 group-hover:-translate-y-1.5">download</span>
                    <span class="ml-2 truncate transition-transform duration-300 group-hover:-translate-y-1.5">{{ $t('downloadCV') }}</span>
                  </button>
                </div>
              </div>
            </header>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <!-- Main Content -->
              <div class="lg:col-span-2 flex flex-col gap-10">
                <!-- Professional Summary -->
                <section class="bg-card-light dark:bg-card-dark rounded-xl shadow-soft p-6 md:p-8">
                  <h2 class="text-text-primary-light dark:text-white text-2xl font-bold tracking-tight mb-4 flex items-center gap-3">
                    <span class="material-symbols-outlined text-primary dark:text-blue-400 !text-3xl">person</span>
                    {{ $t('sections.professionalProfile') }}
                  </h2>
                  <p class="text-text-secondary-light dark:text-text-secondary-dark text-base leading-relaxed mb-4">
                    {{ $t('profile.intro') }}
                  </p>
                  
                  <h3 class="text-lg font-semibold text-text-primary-light dark:text-white mt-4 mb-2">
                    {{ $t('profile.frontend.title') }}
                  </h3>
                  <ul class="list-disc pl-5 text-text-secondary-light dark:text-text-secondary-dark text-sm space-y-2 mb-4">
                    <li v-for="(point, index) in frontendPoints" :key="index">{{ point }}</li>
                  </ul>

                  <h3 class="text-lg font-semibold text-text-primary-light dark:text-white mt-4 mb-2">
                    {{ $t('profile.backend.title') }}
                  </h3>
                  <ul class="list-disc pl-5 text-text-secondary-light dark:text-text-secondary-dark text-sm space-y-2 mb-4">
                    <li v-for="(point, index) in backendPoints" :key="index">{{ point }}</li>
                  </ul>

                  <h3 class="text-lg font-semibold text-text-primary-light dark:text-white mt-4 mb-2">
                    {{ $t('profile.tools.title') }}
                  </h3>
                  <ul class="list-disc pl-5 text-text-secondary-light dark:text-text-secondary-dark text-sm space-y-2">
                    <li v-for="(point, index) in toolsPoints" :key="index">{{ point }}</li>
                  </ul>
                </section>

                <!-- Work Experience -->
                <section>
                  <h2 class="text-text-primary-light dark:text-white text-2xl font-bold tracking-tight mb-6 flex items-center gap-3">
                    <span class="material-symbols-outlined text-primary dark:text-blue-400 !text-3xl">work</span>
                    {{ $t('sections.workExperience') }}
                  </h2>
                  <div class="space-y-8">
                    <div class="flex gap-x-4">
                      <div class="flex-shrink-0 w-12 h-12 rounded-lg bg-border-light dark:bg-border-dark flex items-center justify-center">
                        <span class="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark">business_center</span>
                      </div>
                      <div>
                        <div class="flex flex-col sm:flex-row justify-between sm:items-center">
                          <h3 class="text-lg font-semibold text-text-primary-light dark:text-white">{{ $t('experience.freelance.position') }}</h3>
                          <p class="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-1 sm:mt-0">{{ $t('experience.freelance.period') }}</p>
                        </div>
                        <p class="text-base text-text-secondary-light dark:text-text-secondary-dark mt-1">{{ $t('experience.freelance.company') }}</p>
                        <ul class="list-disc pl-5 mt-3 text-text-secondary-light dark:text-text-secondary-dark text-sm space-y-2">
                          <li>{{ $t('experience.freelance.description') }}</li>
                        </ul>
                      </div>
                    </div>

                    <div class="flex gap-x-4">
                      <div class="flex-shrink-0 w-12 h-12 rounded-lg bg-border-light dark:bg-border-dark flex items-center justify-center">
                        <span class="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark">business_center</span>
                      </div>
                      <div>
                        <div class="flex flex-col sm:flex-row justify-between sm:items-center">
                          <h3 class="text-lg font-semibold text-text-primary-light dark:text-white">{{ $t('experience.bercont.position') }}</h3>
                          <p class="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-1 sm:mt-0">{{ $t('experience.bercont.period') }}</p>
                        </div>
                        <p class="text-base text-text-secondary-light dark:text-text-secondary-dark mt-1">{{ $t('experience.bercont.company') }}</p>
                        <ul class="list-disc pl-5 mt-3 text-text-secondary-light dark:text-text-secondary-dark text-sm space-y-2">
                          <li>{{ $t('experience.bercont.description') }}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <!-- GitHub Contributions -->
                <GitHubContributions username="JaredSoftware" />

                <!-- Projects -->
                <section>
                  <h2 class="text-text-primary-light dark:text-white text-2xl font-bold tracking-tight mb-6 flex items-center gap-3">
                    <span class="material-symbols-outlined text-primary dark:text-blue-400 !text-3xl">lightbulb</span>
                    {{ $t('sections.projects') }}
                  </h2>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-card-light dark:bg-card-dark rounded-xl shadow-soft overflow-hidden group">
                      <img 
                        alt="Fintech App Screenshot" 
                        class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAFw56GkYEAJbd1fWsLwQp-VSkZu1ysi31mKJzOKlO3TufSI1lnJDhY2Z1MAJyFGY_EJ5HElf_RmEreYOTpal6vy3X6nIG6AI0NmMusWvUvWYXqr-q_9TGtgjrOn98VBxqxyRML6RYPojnp3z3Oz7BfAtn9TId3TKQsXvPqvAAB77t0lft8yjiWPuvmzERrkHj8hg96qcMBwJC4kga2DCI_u4n_UEfZHjiftD18dHd2X3sN-csUha0F9igf4-Y_X1PQBiL_4aEcKQ"
                      />
                      <div class="p-4">
                        <h3 class="text-lg font-semibold text-text-primary-light dark:text-white">{{ $t('projects.fintech.name') }}</h3>
                        <p class="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-1">{{ $t('projects.fintech.role') }}</p>
                        <p class="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-2">{{ $t('projects.fintech.description') }}</p>
                        <div class="flex flex-wrap gap-2 mt-3">
                          <span class="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded-full">Figma</span>
                          <span class="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded-full">User Research</span>
                        </div>
                      </div>
                    </div>

                    <div class="bg-card-light dark:bg-card-dark rounded-xl shadow-soft overflow-hidden group">
                      <img 
                        alt="Analytics Dashboard Screenshot" 
                        class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9X-MJCG8eRxRKckr15osoo1GFfxvBmdLVNQazpqxqqzSl9vSYHpjHy2wlE7pa6AqMRD7drOQrOTmvM87joxk4IlLoScRrLOlUbZ5kOAT9DTo3o2rSTktwc96CWkqJhSjEaJbcCfwDPmgno4VG2CJCLS-kt1YGAeiwJNpOyPUck_xydQfZwErYvKW9XkwNoq21by-rz453w5uzI5QW9P5-HKK-k1B_mux7hwsjq-x79MfmT0y_iFcPGJnqv6Pul6CoHlmWcyWhSJY"
                      />
                      <div class="p-4">
                        <h3 class="text-lg font-semibold text-text-primary-light dark:text-white">{{ $t('projects.analytics.name') }}</h3>
                        <p class="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-1">{{ $t('projects.analytics.role') }}</p>
                        <p class="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-2">{{ $t('projects.analytics.description') }}</p>
                        <div class="flex flex-wrap gap-2 mt-3">
                          <span class="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded-full">Sketch</span>
                          <span class="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded-full">Prototyping</span>
                        </div>
                      </div>
                    </div>

                    <div class="bg-card-light dark:bg-card-dark rounded-xl shadow-soft overflow-hidden group md:col-span-2">
                      <img 
                        alt="E-commerce Platform Screenshot" 
                        class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrYinjTLDMXMiHf3vKutu3Blwydi778JtJNf6Iz4QoEhYvpzPmcUm1jolDWQa8T9HSmnjvL1cH68_QmUsRAcJcJPrtYULhYiJoNP3AP-9Vn4Is6jZSFb3PDXJVLxnutsFviCTS0OP2FpYgN7D0HONG08tgeEpg7Ira57SrGZEHN5PiWlL9aTO53p0x01GO7whC7TKS3Zj_sMx0x1vHBnc85YvuNEady0L2lBUQd61ul9p93ZvOhW9775DgE9n_Llrh5c82XPS9ZO0"
                      />
                      <div class="p-4">
                        <h3 class="text-lg font-semibold text-text-primary-light dark:text-white">{{ $t('projects.ecommerce.name') }}</h3>
                        <p class="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-1">{{ $t('projects.ecommerce.role') }}</p>
                        <p class="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-2">{{ $t('projects.ecommerce.description') }}</p>
                        <div class="flex flex-wrap gap-2 mt-3">
                          <span class="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded-full">Adobe XD</span>
                          <span class="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded-full">A/B Testing</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <!-- Education -->
                <section>
                  <h2 class="text-text-primary-light dark:text-white text-2xl font-bold tracking-tight mb-6 flex items-center gap-3">
                    <span class="material-symbols-outlined text-primary dark:text-blue-400 !text-3xl">school</span>
                    {{ $t('sections.education') }}
                  </h2>
                  <div class="space-y-8">
                    <div class="flex gap-x-4">
                      <div class="flex-shrink-0 w-12 h-12 rounded-lg bg-border-light dark:bg-border-dark flex items-center justify-center">
                        <span class="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark">school</span>
                      </div>
                      <div>
                        <div class="flex flex-col sm:flex-row justify-between sm:items-center">
                          <h3 class="text-lg font-semibold text-text-primary-light dark:text-white">{{ $t('education.technician.degree') }}</h3>
                          <p class="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-1 sm:mt-0">{{ $t('education.technician.period') }}</p>
                        </div>
                        <p class="text-base text-text-secondary-light dark:text-text-secondary-dark mt-1">{{ $t('education.technician.description') }}</p>
                      </div>
                    </div>

                    <div class="flex gap-x-4">
                      <div class="flex-shrink-0 w-12 h-12 rounded-lg bg-border-light dark:bg-border-dark flex items-center justify-center">
                        <span class="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark">school</span>
                      </div>
                      <div>
                        <div class="flex flex-col sm:flex-row justify-between sm:items-center">
                          <h3 class="text-lg font-semibold text-text-primary-light dark:text-white">{{ $t('education.highschool.degree') }}</h3>
                          <p class="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-1 sm:mt-0">{{ $t('education.highschool.period') }}</p>
                        </div>
                        <p class="text-base text-text-secondary-light dark:text-text-secondary-dark mt-1">{{ $t('education.highschool.description') }}</p>
                      </div>
                    </div>
                  </div>
                </section>

                <!-- Internships -->
                <section>
                  <h2 class="text-text-primary-light dark:text-white text-2xl font-bold tracking-tight mb-6 flex items-center gap-3">
                    <span class="material-symbols-outlined text-primary dark:text-blue-400 !text-3xl">work_history</span>
                    {{ $t('sections.internships') }}
                  </h2>
                  <div class="space-y-8">
                    <div class="flex gap-x-4">
                      <div class="flex-shrink-0 w-12 h-12 rounded-lg bg-border-light dark:bg-border-dark flex items-center justify-center">
                        <span class="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark">business_center</span>
                      </div>
                      <div>
                        <div class="flex flex-col sm:flex-row justify-between sm:items-center">
                          <h3 class="text-lg font-semibold text-text-primary-light dark:text-white">{{ $t('internships.bercont.company') }}</h3>
                          <p class="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-1 sm:mt-0">{{ $t('internships.bercont.period') }}</p>
                        </div>
                        <p class="text-base text-text-secondary-light dark:text-text-secondary-dark mt-1">{{ $t('internships.bercont.description') }}</p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <!-- Sidebar -->
              <div class="lg:col-span-1 flex flex-col gap-10">
                <!-- Contact Information -->
                <section class="bg-card-light dark:bg-card-dark rounded-xl shadow-soft p-6">
                  <h3 class="text-lg font-bold text-text-primary-light dark:text-white mb-4">{{ $t('sections.contactInfo') }}</h3>
                  <ul class="space-y-4 text-sm">
                    <li class="flex items-center gap-3">
                      <span class="material-symbols-outlined text-primary dark:text-blue-400 !text-xl">mail</span>
                      <a class="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary dark:hover:text-blue-400" href="mailto:jaredwesley27@hotmail.com">{{ $t('contact.email') }}</a>
                    </li>
                    <li class="flex items-center gap-3">
                      <span class="material-symbols-outlined text-primary dark:text-blue-400 !text-xl">phone</span>
                      <span class="text-text-secondary-light dark:text-text-secondary-dark">{{ $t('contact.phone') }}</span>
                    </li>
                    <li class="flex items-center gap-3">
                      <span class="material-symbols-outlined text-primary dark:text-blue-400 !text-xl">location_on</span>
                      <span class="text-text-secondary-light dark:text-text-secondary-dark">{{ $t('contact.location') }}</span>
                    </li>
                    <li class="flex items-center gap-3">
                      <span class="material-symbols-outlined text-primary dark:text-blue-400 !text-xl">link</span>
                      <a class="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary dark:hover:text-blue-400" href="https://lollool2.github.io/-CV.com/" target="_blank">{{ $t('contact.website') }}</a>
                    </li>
                    <li class="flex items-center gap-3">
                      <svg aria-hidden="true" class="w-5 h-5 text-primary dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                        <path clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.852 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" fill-rule="evenodd"></path>
                      </svg>
                      <a class="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary dark:hover:text-blue-400" href="https://github.com/JaredSoftware" target="_blank">{{ $t('contact.github') }}</a>
                    </li>
                    <li class="flex items-center gap-3">
                      <svg aria-hidden="true" class="w-5 h-5 text-primary dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                      </svg>
                      <a class="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary dark:hover:text-blue-400" href="https://www.linkedin.com/in/jared-wesley-vargas-cortes-0ab9a71a8" target="_blank">{{ $t('contact.linkedin') }}</a>
                    </li>
                  </ul>
                </section>

                <!-- Skills -->
                <section>
                  <h2 class="text-text-primary-light dark:text-white text-2xl font-bold tracking-tight mb-6 flex items-center gap-3">
                    <span class="material-symbols-outlined text-primary dark:text-blue-400 !text-3xl">psychology</span>
                    {{ $t('sections.skills') }}
                  </h2>
                  <div class="space-y-6">
                    <div class="bg-card-light dark:bg-card-dark rounded-xl shadow-soft p-4">
                      <h4 class="font-semibold text-text-primary-light dark:text-white mb-3">{{ $t('skills.languages') }}</h4>
                      <div class="flex flex-wrap gap-2">
                        <span class="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 text-sm font-medium px-3 py-1.5 rounded-lg">JavaScript</span>
                        <span class="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 text-sm font-medium px-3 py-1.5 rounded-lg">Node.js</span>
                        <span class="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 text-sm font-medium px-3 py-1.5 rounded-lg">Vue</span>
                        <span class="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 text-sm font-medium px-3 py-1.5 rounded-lg">Nuxt.js</span>
                        <span class="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 text-sm font-medium px-3 py-1.5 rounded-lg">React</span>
                        <span class="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 text-sm font-medium px-3 py-1.5 rounded-lg">Next.js</span>
                        <span class="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 text-sm font-medium px-3 py-1.5 rounded-lg">Sails.js</span>
                      </div>
                    </div>

                    <div class="bg-card-light dark:bg-card-dark rounded-xl shadow-soft p-4">
                      <h4 class="font-semibold text-text-primary-light dark:text-white mb-3">{{ $t('skills.databases') }}</h4>
                      <div class="flex flex-wrap gap-2">
                        <span class="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 text-sm font-medium px-3 py-1.5 rounded-lg">MongoDB</span>
                        <span class="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 text-sm font-medium px-3 py-1.5 rounded-lg">PostgreSQL</span>
                        <span class="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 text-sm font-medium px-3 py-1.5 rounded-lg">MySQL</span>
                        <span class="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 text-sm font-medium px-3 py-1.5 rounded-lg">SQL</span>
                      </div>
                    </div>

                    <div class="bg-card-light dark:bg-card-dark rounded-xl shadow-soft p-4">
                      <h4 class="font-semibold text-text-primary-light dark:text-white mb-3">{{ $t('skills.tools') }}</h4>
                      <div class="flex flex-wrap gap-2">
                        <span class="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 text-sm font-medium px-3 py-1.5 rounded-lg">Tailwind CSS</span>
                        <span class="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 text-sm font-medium px-3 py-1.5 rounded-lg">Bootstrap</span>
                        <span class="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 text-sm font-medium px-3 py-1.5 rounded-lg">Sass</span>
                        <span class="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 text-sm font-medium px-3 py-1.5 rounded-lg">Git</span>
                        <span class="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 text-sm font-medium px-3 py-1.5 rounded-lg">PM2</span>
                        <span class="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 text-sm font-medium px-3 py-1.5 rounded-lg">Ubuntu</span>
                        <span class="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 text-sm font-medium px-3 py-1.5 rounded-lg">CentOS</span>
                      </div>
                    </div>

                    <div class="bg-card-light dark:bg-card-dark rounded-xl shadow-soft p-4">
                      <h4 class="font-semibold text-text-primary-light dark:text-white mb-3">{{ $t('skills.aptitudes') }}</h4>
                      <div class="flex flex-wrap gap-2">
                        <span class="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 text-sm font-medium px-3 py-1.5 rounded-lg">Comunicación</span>
                        <span class="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 text-sm font-medium px-3 py-1.5 rounded-lg">Pensamiento Crítico</span>
                        <span class="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 text-sm font-medium px-3 py-1.5 rounded-lg">Creatividad</span>
                        <span class="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 text-sm font-medium px-3 py-1.5 rounded-lg">Trabajo en Equipo</span>
                        <span class="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 text-sm font-medium px-3 py-1.5 rounded-lg">Atención al Detalle</span>
                      </div>
                    </div>
                  </div>
                </section>

                <!-- Languages -->
                <section class="bg-card-light dark:bg-card-dark rounded-xl shadow-soft p-6">
                  <h3 class="text-lg font-bold text-text-primary-light dark:text-white mb-4">{{ $t('sections.languages') }}</h3>
                  <div class="space-y-4">
                    <div>
                      <div class="flex justify-between mb-2">
                        <span class="text-sm font-medium text-text-primary-light dark:text-white">{{ $t('languages.english') }}</span>
                        <span class="text-sm text-text-secondary-light dark:text-text-secondary-dark">{{ $t('languages.level') }}</span>
                      </div>
                      <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div class="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500" style="width: 75%"></div>
                      </div>
                    </div>
                  </div>
                </section>

                <!-- Hobbies -->
                <section class="bg-card-light dark:bg-card-dark rounded-xl shadow-soft p-6">
                  <h3 class="text-lg font-bold text-text-primary-light dark:text-white mb-4">{{ $t('sections.hobbies') }}</h3>
                  <div class="space-y-2">
                    <div class="block w-full px-4 py-2 text-white bg-blue-700 border-b border-gray-200 rounded-t-lg dark:bg-gray-800 dark:border-gray-600">
                      {{ $t('hobbies.music') }}
                    </div>
                    <div class="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white rounded-b-lg">
                      {{ $t('hobbies.learning') }}
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>

        <footer class="bg-card-light dark:bg-card-dark border-t border-border-light dark:border-border-dark mt-12">
          <div class="mx-auto max-w-6xl px-4 py-8">
            <div class="flex flex-col sm:flex-row justify-between items-center gap-6">
              <p class="text-sm text-text-secondary-light dark:text-text-secondary-dark">{{ $t('footer.rights') }}</p>
              <div class="flex items-center gap-4">
                <a class="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary dark:hover:text-blue-400 transition-colors" href="https://lollool2.github.io/-CV.com/" target="_blank">{{ $t('footer.portfolio') }}</a>
                <a class="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary dark:hover:text-blue-400 transition-colors" href="https://www.linkedin.com/in/jared-wesley-vargas-cortes-0ab9a71a8" target="_blank">{{ $t('footer.linkedin') }}</a>
                <a class="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary dark:hover:text-blue-400 transition-colors" href="mailto:jaredwesley27@hotmail.com">{{ $t('footer.contact') }}</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const { locale, tm, messages } = useI18n()
const router = useRouter()

// Obtener el base path para assets
const basePath = computed(() => {
  const base = router.options.history?.base || '/cv/'
  return base.replace(/\/$/, '') + '/'
})
// Usar el modelo optimizado (3.1MB vs 27MB)
const modelPath = computed(() => `${basePath.value}robot-optimized.glb`)


// Función para extraer strings de objetos AST o arrays simples
const extractStrings = (items) => {
  if (!items || !Array.isArray(items)) {
    return []
  }
  
  return items.map(item => {
    // Si es un string directo, devolverlo
    if (typeof item === 'string') {
      return item
    }
    // Si es un objeto AST, intentar extraer el texto
    if (item && typeof item === 'object') {
      // Prioridad 1: Buscar en body.static (estructura AST de vue-i18n)
      if (item.body && typeof item.body === 'object' && typeof item.body.static === 'string') {
        return item.body.static
      }
      // Prioridad 2: Buscar la propiedad 'static' directamente
      if (typeof item.static === 'string') {
        return item.static
      }
      // Prioridad 3: Buscar la propiedad 'source'
      if (typeof item.source === 'string') {
        return item.source
      }
    }
    // Si no se puede extraer, devolver cadena vacía
    return ''
  }).filter(item => item && typeof item === 'string' && item.length > 0)
}

// Función para obtener arrays de traducciones de forma segura
const getTranslationArray = (key) => {
  try {
    // Primero intentar usar tm() que es el método recomendado
    const result = tm(key)
    
    if (Array.isArray(result)) {
      return extractStrings(result)
    }
    
    // Fallback: intentar obtener directamente del objeto de mensajes
    const localeMessages = messages.value?.[locale.value]
    if (localeMessages) {
      const keys = key.split('.')
      let value = localeMessages
      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = value[k]
        } else {
          value = null
          break
        }
      }
      
      if (Array.isArray(value)) {
        return extractStrings(value)
      }
    }
    
    console.warn(`Translation array not found for key: ${key}`)
    return []
  } catch (e) {
    console.error('Error loading translation:', key, e)
    return []
  }
}

const frontendPoints = computed(() => getTranslationArray('profile.frontend.points'))
const backendPoints = computed(() => getTranslationArray('profile.backend.points'))
const toolsPoints = computed(() => getTranslationArray('profile.tools.points'))

const downloadCV = () => {
  // Abrir la página del CV ATS donde se puede generar el PDF
  if (process.client) {
    // Usar el basePath ya calculado y construir la URL completa
    const currentBase = basePath.value || '/cv/'
    const cvAtsUrl = `${window.location.origin}${currentBase}cv-ats`
    window.open(cvAtsUrl, '_blank')
  }
}
</script>

<style>
.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24
}
</style>
