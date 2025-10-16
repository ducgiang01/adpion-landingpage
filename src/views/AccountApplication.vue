<template>
  <AdpionLayout>
    <div class="space-y-8">
      <!-- Header -->
      <div class="text-center">
        <h1 class="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Account Application
        </h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Choose from our comprehensive selection of advertising platforms to expand your marketing reach and maximize your campaign performance.
        </p>
      </div>

      <!-- Platform Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Facebook Card -->
        <div class="group bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200/50 p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300">
          <div class="flex items-center mb-6">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <span class="text-white font-bold text-2xl">f</span>
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-900 mb-1">Facebook</h3>
              <a href="#" class="text-sm text-blue-600 hover:text-blue-800 flex items-center group/link">
                <svg class="w-4 h-4 mr-1 group-hover/link:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                </svg>
                Notes before Applying
              </a>
            </div>
          </div>
          <p class="text-gray-600 text-sm mb-6 leading-relaxed">
            Facebook is the world's largest social platform with 2.4 billion users. It provides comprehensive advertising solutions for businesses of all sizes.
          </p>
          <button class="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 font-medium">
            Apply accounts
          </button>
        </div>

        <!-- TikTok Card -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-black rounded-lg flex items-center justify-center mr-4">
              <span class="text-white font-bold text-lg">T</span>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900">TikTok</h3>
              <a href="#" class="text-sm text-blue-600 hover:text-blue-800 flex items-center">
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                </svg>
                Notes before Applying
              </a>
            </div>
          </div>
          <p class="text-gray-600 text-sm mb-4">
            TikTok is a popular worldwide short video social platform with trendy young users and high conversion rates.
          </p>
          <button class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
            Apply accounts
          </button>
        </div>

        <!-- Google Ads Card -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 rounded-lg flex items-center justify-center mr-4">
              <span class="text-white font-bold text-lg">G</span>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900">Google Ads</h3>
              <a href="#" class="text-sm text-blue-600 hover:text-blue-800 flex items-center">
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                </svg>
                Notes before Applying
              </a>
            </div>
          </div>
          <p class="text-gray-600 text-sm mb-4">
            Google Ads is the world's largest search engine company with nearly 3 billion monthly active users, showing ads at the right time.
          </p>
          <button class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
            Apply accounts
          </button>
        </div>

        <!-- Snapchat Card -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mr-4">
              <span class="text-white font-bold text-lg">👻</span>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900">Snapchat</h3>
              <a href="#" class="text-sm text-blue-600 hover:text-blue-800 flex items-center">
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                </svg>
                Notes before Applying
              </a>
            </div>
          </div>
          <p class="text-gray-600 text-sm mb-4">
            Snapchat is a camera app used by 290 million people daily, popular with millennials and Gen Z, offering innovative entertainment and interaction.
          </p>
          <button class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
            Apply accounts
          </button>
        </div>

        <!-- Microsoft Card -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
              <span class="text-white font-bold text-lg">M</span>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900">Microsoft</h3>
              <a href="#" class="text-sm text-blue-600 hover:text-blue-800 flex items-center">
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                </svg>
                Notes before Applying
              </a>
            </div>
          </div>
          <p class="text-gray-600 text-sm mb-4">
            Microsoft is the world's second-largest search engine, covering 36 countries with over 600 million high purchasing power users.
          </p>
          <button class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
            Apply accounts
          </button>
        </div>

        <!-- TikTok in Southeast Asia Card -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-black rounded-lg flex items-center justify-center mr-4">
              <span class="text-white font-bold text-lg">T</span>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900">TikTok in Southeast Asia</h3>
              <a href="#" class="text-sm text-blue-600 hover:text-blue-800 flex items-center">
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                </svg>
                Notes before Applying
              </a>
            </div>
          </div>
          <p class="text-gray-600 text-sm mb-4">
            TikTok is a popular worldwide short video social platform with trendy young users and high conversion rates, specifically for Southeast Asia region.
          </p>
          <button class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
            Apply accounts
          </button>
        </div>
      </div>

      <!-- Account Management Label -->
      <div class="flex justify-center">
        <div class="bg-gray-100 text-gray-600 px-6 py-2 rounded-full text-sm">
          Account Management
        </div>
      </div>
    </div>
  </AdpionLayout>
</template>

<script setup lang="ts">
import AdpionLayout from '@/components/layout/AdpionLayout.vue'
</script>
