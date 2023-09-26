<template>
  <div class="md:max-w-2x1">
    <Layout />
    <div class="flex items-center justify-between mt-7">
      <div class="flex items-center justify-start">
        <a class="flex ml-2 md:mr-24">
          <img src="/logo.svg" class="h-8 mr-3 my-4" alt="FlowBite Logo" />
          <div class="mr-2 grid grid-cols-1">
            <span class="self-center font-bold text-blue-700 sm:text-4xl"
              >Hoja De Vida</span
            >
            <span
              class="self-center text-xl font-semibold sm:text-2xl dark:text-white"
              >Desarrollador de software</span
            >
          </div>
        </a>
      </div>
      <div class="flex items-center"></div>
    </div>

    <div class="flex">
      <div class="p-4 w-full md:w-3/12">
        <div
          class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700"
        >
          <div
            class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800"
          >
            <img
              class="flex justify-center my-2 rounded-full"
              src="/jared.jpeg"
              alt="image description"
            />

            <div id="accordion-collapse" data-accordion="collapse">
              <h2 id="accordion-collapse-heading-1">
                <button
                  type="button"
                  class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  data-accordion-target="#accordion-collapse-body-1"
                  aria-expanded="true"
                  aria-controls="accordion-collapse-body-1"
                >
                  <span>Name</span>
                  <svg
                    data-accordion-icon
                    class="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-1"
                class="hidden"
                aria-labelledby="accordion-collapse-heading-1"
              >
                <div
                  class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900"
                >
                  <p class="mb-2 text-gray-500 dark:text-gray-400">
                    Jared Wesley Vargas Cortes
                  </p>
                </div>
              </div>
              <h2 id="accordion-collapse-heading-2">
                <button
                  type="button"
                  class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  data-accordion-target="#accordion-collapse-body-2"
                  aria-expanded="false"
                  aria-controls="accordion-collapse-body-2"
                >
                  <span>Correo Electrónico</span>
                  <svg
                    data-accordion-icon
                    class="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-2"
                class="hidden"
                aria-labelledby="accordion-collapse-heading-2"
              >
                <div
                  class="p-5 border border-b-0 border-gray-200 dark:border-gray-700"
                >
                  <p class="mb-2 text-gray-500 dark:text-gray-400">
                    jaredsoftware9@gmail.com
                  </p>
                </div>
              </div>
              <h2 id="accordion-collapse-heading-3">
                <button
                  type="button"
                  class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  data-accordion-target="#accordion-collapse-body-3"
                  aria-expanded="false"
                  aria-controls="accordion-collapse-body-3"
                >
                  <span>Teléfono</span>
                  <svg
                    data-accordion-icon
                    class="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-3"
                class="hidden"
                aria-labelledby="accordion-collapse-heading-3"
              >
                <div
                  class="p-5 border border-t-0 border-gray-200 dark:border-gray-700"
                >
                  <p class="mb-2 text-gray-500 dark:text-gray-400">
                    <a href="https://wa.me/+573229266046"> +573229266046 </a>
                  </p>
                </div>
              </div>
              <h2 id="accordion-collapse-heading-4">
                <button
                  type="button"
                  class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  data-accordion-target="#accordion-collapse-body-4"
                  aria-expanded="false"
                  aria-controls="accordion-collapse-body-4"
                >
                  <span>Dirección</span>
                  <svg
                    data-accordion-icon
                    class="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-4"
                class="hidden"
                aria-labelledby="accordion-collapse-heading-4"
              >
                <div
                  class="p-5 border border-t-0 border-gray-200 dark:border-gray-700"
                >
                  <p class="mb-2 text-gray-500 dark:text-gray-400">
                    Cra. 81 G #65 f 09 sur 110731 Bosa Antonia Santos
                  </p>
                </div>
              </div>
              <h2 id="accordion-collapse-heading-5">
                <button
                  type="button"
                  class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  data-accordion-target="#accordion-collapse-body-5"
                  aria-expanded="false"
                  aria-controls="accordion-collapse-body-5"
                >
                  <span>Fecha de nacimiento</span>
                  <svg
                    data-accordion-icon
                    class="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-5"
                class="hidden"
                aria-labelledby="accordion-collapse-heading-5"
              >
                <div
                  class="p-5 border border-t-0 border-gray-200 dark:border-gray-700"
                >
                  <p class="mb-2 text-gray-500 dark:text-gray-400">
                    27 de abril de 2002
                  </p>
                </div>
              </div>
              <h2 id="accordion-collapse-heading-6">
                <button
                  type="button"
                  class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  data-accordion-target="#accordion-collapse-body-6"
                  aria-expanded="true"
                  aria-controls="accordion-collapse-body-6"
                >
                  <span>Lugar de nacimiento</span>
                  <svg
                    data-accordion-icon
                    class="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-6"
                class="hidden"
                aria-labelledby="accordion-collapse-heading-6"
              >
                <div
                  class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900"
                >
                  <p class="mb-2 text-gray-500 dark:text-gray-400">Bogotá</p>
                </div>
              </div>
              <h2 id="accordion-collapse-heading-7">
                <button
                  type="button"
                  class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  data-accordion-target="#accordion-collapse-body-7"
                  aria-expanded="false"
                  aria-controls="accordion-collapse-body-7"
                >
                  <span>Género</span>
                  <svg
                    data-accordion-icon
                    class="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-7"
                class="hidden"
                aria-labelledby="accordion-collapse-heading-7"
              >
                <div
                  class="p-5 border border-b-0 border-gray-200 dark:border-gray-700"
                >
                  <p class="mb-2 text-gray-500 dark:text-gray-400">Maculino</p>
                </div>
              </div>
              <h2 id="accordion-collapse-heading-8">
                <button
                  type="button"
                  class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  data-accordion-target="#accordion-collapse-body-8"
                  aria-expanded="false"
                  aria-controls="accordion-collapse-body-8"
                >
                  <span>Estado civil</span>
                  <svg
                    data-accordion-icon
                    class="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-8"
                class="hidden"
                aria-labelledby="accordion-collapse-heading-8"
              >
                <div
                  class="p-5 border border-t-0 border-gray-200 dark:border-gray-700"
                >
                  <p class="mb-2 text-gray-500 dark:text-gray-400">
                    <a href="https://wa.me/+573229266046"> Soltero </a>
                  </p>
                </div>
              </div>
              <h2 id="accordion-collapse-heading-9">
                <button
                  type="button"
                  class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  data-accordion-target="#accordion-collapse-body-9"
                  aria-expanded="false"
                  aria-controls="accordion-collapse-body-9"
                >
                  <span>Nacionalidad</span>
                  <svg
                    data-accordion-icon
                    class="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-9"
                class="hidden"
                aria-labelledby="accordion-collapse-heading-9"
              >
                <div
                  class="p-5 border border-t-0 border-gray-200 dark:border-gray-700"
                >
                  <p class="mb-2 text-gray-500 dark:text-gray-400">
                    Colombiano
                  </p>
                </div>
              </div>
              <h2 id="accordion-collapse-heading-10">
                <button
                  type="button"
                  class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  data-accordion-target="#accordion-collapse-body-10"
                  aria-expanded="false"
                  aria-controls="accordion-collapse-body-10"
                >
                  <span>LinkedIn</span>
                  <svg
                    data-accordion-icon
                    class="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-10"
                class="hidden"
                aria-labelledby="accordion-collapse-heading-10"
              >
                <div
                  class="p-5 border border-t-0 border-gray-200 dark:border-gray-700"
                >
                  <p class="mb-2 text-gray-500 dark:text-gray-400">
                    <a
                      href="https://www.linkedin.com/in/jared-vargas-0ab9a71a8/"
                    >
                      Clikc Here
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 w-11/12">
        <div
          class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700"
        >
          <NuxtPage />
        </div>
      </div>
    </div>
  </div>
</template>
