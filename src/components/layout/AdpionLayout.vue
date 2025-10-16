<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
    <!-- Header -->
    <header class="bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm sticky top-0 z-50">
      <div class="flex items-center justify-between px-6 py-4">
        <div class="flex items-center space-x-4">
          <div class="flex items-center space-x-3">
            <div
              class="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <span class="text-white font-bold text-lg">A</span>
            </div>
            <div>
              <h1 class="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Adpion</h1>
              <span class="text-xs text-gray-500 font-medium">Account Management</span>
            </div>
          </div>
        </div>
        <div class="flex items-center space-x-6">
          <!-- Wallet Balance Badge -->
          <span
            class="hidden sm:inline-flex items-center px-3 py-1.5 rounded-xl text-sm font-medium bg-blue-50 text-blue-700 border border-blue-200">
            Wallet: ${{ walletBalance.toLocaleString() }}
          </span>
          <button
            class="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clip-rule="evenodd"></path>
            </svg>
            <span>Feedback</span>
          </button>
          <button
            class="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clip-rule="evenodd"></path>
            </svg>
            <span>Help Center</span>
          </button>
          <!-- User Dropdown -->
          <div class="relative user-dropdown">
            <button @click="toggleUserDropdown"
              class="flex items-center space-x-3 pl-4 border-l border-gray-200 hover:bg-gray-50 rounded-lg p-2 transition-colors duration-200">
              <div
                class="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-md">
                <span class="text-white font-medium text-sm">P</span>
              </div>
              <div class="text-sm text-left">
                <div class="font-semibold text-gray-900">HỘ KINH DOANH PHẠM ĐỨC AN 89</div>
                <div class="text-gray-500 text-xs">giangds2001@gmail.com</div>
              </div>
              <svg class="w-4 h-4 text-gray-400 transition-transform duration-200"
                :class="userDropdownOpen ? 'rotate-180' : ''" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </button>

            <!-- Dropdown Menu -->
            <div v-show="userDropdownOpen"
              class="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
              <router-link to="/profile" @click="closeUserDropdown"
                class="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <svg class="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <div class="font-medium">Profile</div>
                  <div class="text-xs text-gray-500">View and edit profile</div>
                </div>
              </router-link>

              <button @click="openChangePasswordModal"
                class="w-full flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div class="text-left">
                  <div class="font-medium">Change Password</div>
                  <div class="text-xs text-gray-500">Update your password</div>
                </div>
              </button>

              <button @click="openLanguageModal"
                class="w-full flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                <div class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                  <svg class="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z"
                      clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div class="text-left">
                  <div class="font-medium">Language</div>
                  <div class="text-xs text-gray-500">Change language</div>
                </div>
              </button>

              <button @click="openVerifyModal"
                class="w-full flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                <div class="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
                  <svg class="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div class="text-left">
                  <div class="font-medium">Verify Account</div>
                  <div class="text-xs text-gray-500">Verify your account</div>
                </div>
              </button>

              <div class="border-t border-gray-200 my-2"></div>

              <button @click="handleSignOut"
                class="w-full flex items-center px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200">
                <div class="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                  <svg class="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                      clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div class="text-left">
                  <div class="font-medium">Sign Out</div>
                  <div class="text-xs text-red-500">Logout from account</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="flex">
      <!-- Sidebar -->
      <aside class="w-72 bg-white/90 backdrop-blur-md border-r border-gray-200/50 min-h-screen shadow-lg">
        <nav class="mt-8">
          <div class="px-6 space-y-1">
            <router-link to="/overview"
              class="flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 group"
              :class="$route.path === '/overview'
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform scale-105'
                : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:shadow-md'">
              <div class="w-8 h-8 rounded-lg flex items-center justify-center mr-3 transition-all duration-200" :class="$route.path === '/overview'
                ? 'bg-white/20'
                : 'bg-gray-100 group-hover:bg-blue-100'">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z">
                  </path>
                </svg>
              </div>
              <span class="font-medium">Overview</span>
            </router-link>

            <div class="relative">
              <button @click="toggleApplicationAds"
                class="flex items-center justify-between w-full px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 group"
                :class="applicationAdsOpen ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'">
                <div class="flex items-center">
                  <div class="w-8 h-8 rounded-lg flex items-center justify-center mr-3 transition-all duration-200"
                    :class="applicationAdsOpen ? 'bg-blue-100' : 'bg-gray-100 group-hover:bg-blue-100'">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd"
                        d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <span class="font-medium">Application Ads</span>
                </div>
                <svg class="w-4 h-4 transition-transform duration-200" :class="applicationAdsOpen ? 'rotate-180' : ''"
                  fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
                </svg>
              </button>
              <div v-show="applicationAdsOpen" class="mt-2 space-y-1 ml-4 border-l-2 border-gray-200 pl-4">
                <router-link to="/account-application"
                  class="flex items-center px-3 py-2 text-sm rounded-lg transition-all duration-200" :class="$route.path === '/account-application'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'">
                  <div class="w-6 h-6 rounded-md flex items-center justify-center mr-3"
                    :class="$route.path === '/account-application' ? 'bg-white/20' : 'bg-gray-100'">
                    <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd"
                        d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  Account Application
                </router-link>
                <router-link to="/opening-record"
                  class="flex items-center px-3 py-2 text-sm rounded-lg transition-all duration-200" :class="$route.path === '/opening-record'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'">
                  <div class="w-6 h-6 rounded-md flex items-center justify-center mr-3"
                    :class="$route.path === '/opening-record' ? 'bg-white/20' : 'bg-gray-100'">
                    <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd"
                        d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  Opening Record
                </router-link>
              </div>
            </div>

            <router-link to="/wallet"
              class="flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 group"
              :class="$route.path === '/wallet'
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform scale-105'
                : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:shadow-md'">
              <div class="w-8 h-8 rounded-lg flex items-center justify-center mr-3 transition-all duration-200" :class="$route.path === '/wallet'
                ? 'bg-white/20'
                : 'bg-gray-100 group-hover:bg-blue-100'">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z">
                  </path>
                </svg>
              </div>
              <span class="font-medium">Wallet</span>
            </router-link>

            <div class="relative">
              <button @click="toggleAccountManagement"
                class="flex items-center justify-between w-full px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 group"
                :class="accountManagementOpen ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'">
                <div class="flex items-center">
                  <div class="w-8 h-8 rounded-lg flex items-center justify-center mr-3 transition-all duration-200"
                    :class="accountManagementOpen ? 'bg-blue-100' : 'bg-gray-100 group-hover:bg-blue-100'">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd"
                        d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <span class="font-medium">Account Management</span>
                </div>
                <svg class="w-4 h-4 transition-transform duration-200"
                  :class="accountManagementOpen ? 'rotate-180' : ''" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
                </svg>
              </button>
              <div v-show="accountManagementOpen" class="mt-2 space-y-1 ml-4 border-l-2 border-gray-200 pl-4">
                <router-link to="/facebook-request"
                  class="flex items-center px-3 py-2 text-sm rounded-lg transition-all duration-200" :class="$route.path === '/facebook-request'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'">
                  <div class="w-6 h-6 rounded-md flex items-center justify-center mr-3"
                    :class="$route.path === '/facebook-request' ? 'bg-white/20' : 'bg-gray-100'">
                    <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd"
                        d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  Facebook Request
                </router-link>
                <router-link to="/request-history"
                  class="flex items-center w-full px-3 py-2 text-sm rounded-lg transition-all duration-200" :class="$route.path === '/request-history'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'">
                  <div class="w-6 h-6 rounded-md flex items-center justify-center mr-3"
                    :class="$route.path === '/request-history' ? 'bg-white/20' : 'bg-gray-100'">
                    <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd"
                        d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  Request History
                </router-link>
              </div>
            </div>

            <div class="relative">
              <button @click="toggleBusinessManagement"
                class="flex items-center justify-between w-full px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 group"
                :class="businessManagementOpen ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'">
                <div class="flex items-center">
                  <div class="w-8 h-8 rounded-lg flex items-center justify-center mr-3 transition-all duration-200"
                    :class="businessManagementOpen ? 'bg-blue-100' : 'bg-gray-100 group-hover:bg-blue-100'">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd"
                        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <span class="font-medium">Business Management</span>
                </div>
                <svg class="w-4 h-4 transition-transform duration-200"
                  :class="businessManagementOpen ? 'rotate-180' : ''" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
                </svg>
              </button>
            </div>


          </div>
        </nav>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 p-8">
        <div class="max-w-7xl mx-auto">
          <slot></slot>
        </div>
      </main>
    </div>

    <!-- Footer -->
    <footer class="bg-white/80 backdrop-blur-md border-t border-gray-200/50 py-6">
      <div class="max-w-7xl mx-auto px-8">
        <div class="text-center">
          <div class="flex items-center justify-center space-x-2 mb-2">
            <div
              class="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-sm">A</span>
            </div>
            <span class="font-semibold text-gray-900">Adpion</span>
          </div>
          <div class="text-sm text-gray-500">© 2025 Produced by BlueVision Technology Department</div>
        </div>
      </div>
    </footer>

    <!-- Change Password Modal -->
    <div v-if="changePasswordModalOpen"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md mx-4">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-xl font-bold text-gray-900">Change Password</h3>
          <button @click="changePasswordModalOpen = false" class="text-gray-400 hover:text-gray-600">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>

        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
            <input type="password"
              class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter current password">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">New Password</label>
            <input type="password"
              class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter new password">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
            <input type="password"
              class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Confirm new password">
          </div>
        </div>

        <div class="flex space-x-4 mt-6">
          <button @click="changePasswordModalOpen = false"
            class="flex-1 px-4 py-3 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors duration-200">
            Cancel
          </button>
          <button
            class="flex-1 px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-200">
            Update Password
          </button>
        </div>
      </div>
    </div>

    <!-- Language Modal -->
    <div v-if="languageModalOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md mx-4">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-xl font-bold text-gray-900">Change Language</h3>
          <button @click="languageModalOpen = false" class="text-gray-400 hover:text-gray-600">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>

        <div class="space-y-3">
          <button
            class="w-full flex items-center p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-200">
            <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
              <span class="text-sm font-bold text-blue-600">EN</span>
            </div>
            <div class="text-left">
              <div class="font-medium text-gray-900">English</div>
              <div class="text-sm text-gray-500">English (US)</div>
            </div>
          </button>

          <button
            class="w-full flex items-center p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-200">
            <div class="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
              <span class="text-sm font-bold text-red-600">VI</span>
            </div>
            <div class="text-left">
              <div class="font-medium text-gray-900">Tiếng Việt</div>
              <div class="text-sm text-gray-500">Vietnamese</div>
            </div>
          </button>

          <button
            class="w-full flex items-center p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-200">
            <div class="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
              <span class="text-sm font-bold text-yellow-600">CN</span>
            </div>
            <div class="text-left">
              <div class="font-medium text-gray-900">中文</div>
              <div class="text-sm text-gray-500">Chinese</div>
            </div>
          </button>
        </div>

        <div class="mt-6">
          <button @click="languageModalOpen = false"
            class="w-full px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-200">
            Apply Language
          </button>
        </div>
      </div>
    </div>

    <!-- Verify Account Modal -->
    <div v-if="verifyModalOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md mx-4">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-xl font-bold text-gray-900">Verify Account</h3>
          <button @click="verifyModalOpen = false" class="text-gray-400 hover:text-gray-600">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>

        <div class="text-center mb-6">
          <div class="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"></path>
            </svg>
          </div>
          <h4 class="text-lg font-semibold text-gray-900 mb-2">Account Verification Required</h4>
          <p class="text-gray-600 text-sm">Please verify your account to access all features and ensure account
            security.</p>
        </div>

        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Verification Code</label>
            <input type="text"
              class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter verification code">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <input type="tel"
              class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="+84 123 456 789">
          </div>
        </div>

        <div class="flex space-x-4 mt-6">
          <button @click="verifyModalOpen = false"
            class="flex-1 px-4 py-3 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors duration-200">
            Cancel
          </button>
          <button
            class="flex-1 px-4 py-3 bg-yellow-600 text-white rounded-xl hover:bg-yellow-700 transition-colors duration-200">
            Verify Account
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useWallet } from '@/composables/useWallet'

const route = useRoute()

const applicationAdsOpen = ref(false)
const accountManagementOpen = ref(false)
const businessManagementOpen = ref(false)
const userDropdownOpen = ref(false)

// Modal states
const changePasswordModalOpen = ref(false)
const languageModalOpen = ref(false)
const verifyModalOpen = ref(false)

const wallet = useWallet()
const walletBalance = ref(wallet.getBalance())

const update = () => { walletBalance.value = wallet.getBalance() }

const toggleApplicationAds = () => { applicationAdsOpen.value = !applicationAdsOpen.value }
const toggleAccountManagement = () => { accountManagementOpen.value = !accountManagementOpen.value }
const toggleBusinessManagement = () => { businessManagementOpen.value = !businessManagementOpen.value }
const toggleUserDropdown = () => { userDropdownOpen.value = !userDropdownOpen.value }
const closeUserDropdown = () => { userDropdownOpen.value = false }

const openChangePasswordModal = () => { closeUserDropdown(); changePasswordModalOpen.value = true }
const openLanguageModal = () => { closeUserDropdown(); languageModalOpen.value = true }
const openVerifyModal = () => { closeUserDropdown(); verifyModalOpen.value = true }

const handleSignOut = () => { closeUserDropdown(); console.log('Signing out...') }

// Close dropdown when clicking outside
const handleClickOutside = (event: Event) => {
  const target = event.target as HTMLElement
  if (!target.closest('.user-dropdown')) userDropdownOpen.value = false
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  update()
  window.addEventListener('wallet:updated', update as EventListener)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  window.removeEventListener('wallet:updated', update as EventListener)
})

// Auto-expand menu based on current route
watch(() => route.path, (newPath) => {
  if (newPath.includes('/account-application') || newPath.includes('/opening-record')) applicationAdsOpen.value = true
  if (newPath.includes('/facebook-request') || newPath.includes('/request-history')) accountManagementOpen.value = true
}, { immediate: true })
</script>
