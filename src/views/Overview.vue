<template>
  <AdpionLayout>
    <div class="space-y-8">
      <!-- Header -->
      <div class="flex items-center justify-between">
        <div>
          <h1
            class="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            Dashboard Overview
          </h1>
          <p class="text-gray-600 mt-2">Welcome back! Here's what's happening with your accounts today.</p>
        </div>
        <div class="flex items-center space-x-4">
          <div class="relative">
            <input type="date" v-model="selectedDate"
              class="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm shadow-sm transition-all duration-200" />
          </div>
          <button
            class="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
            <span>Export Report</span>
          </button>
        </div>
      </div>

      <!-- Statistics Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Total Accounts -->
        <div
          class="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/50 p-6 hover:shadow-2xl transition-all duration-200">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div class="text-right">
              <div class="text-2xl font-bold text-gray-900">{{ statistics.totalAccounts }}</div>
              <div class="text-sm text-gray-500">Total Accounts</div>
            </div>
          </div>
          <div class="flex items-center text-sm">
            <span class="text-green-600 font-medium">+{{ statistics.newAccountsThisMonth }}</span>
            <span class="text-gray-500 ml-1">this month</span>
          </div>
        </div>

        <!-- Active Accounts -->
        <div
          class="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/50 p-6 hover:shadow-2xl transition-all duration-200">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"></path>
              </svg>
            </div>
            <div class="text-right">
              <div class="text-2xl font-bold text-gray-900">{{ statistics.activeAccounts }}</div>
              <div class="text-sm text-gray-500">Active Accounts</div>
            </div>
          </div>
          <div class="flex items-center text-sm">
            <span class="text-green-600 font-medium">{{ ((statistics.activeAccounts / statistics.totalAccounts) *
              100).toFixed(1) }}%</span>
            <span class="text-gray-500 ml-1">active rate</span>
          </div>
        </div>

        <!-- Total Balance -->
        <div
          class="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/50 p-6 hover:shadow-2xl transition-all duration-200">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z">
                </path>
              </svg>
            </div>
            <div class="text-right">
              <div class="text-2xl font-bold text-gray-900">${{ statistics.totalBalance.toLocaleString() }}</div>
              <div class="text-sm text-gray-500">Total Balance</div>
            </div>
          </div>
          <div class="flex items-center text-sm">
            <span class="text-green-600 font-medium">+${{ statistics.balanceIncrease.toLocaleString() }}</span>
            <span class="text-gray-500 ml-1">this month</span>
          </div>
        </div>

        <!-- Total Requests -->
        <div
          class="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/50 p-6 hover:shadow-2xl transition-all duration-200">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                  clip-rule="evenodd"></path>
              </svg>
            </div>
            <div class="text-right">
              <div class="text-2xl font-bold text-gray-900">{{ statistics.totalRequests }}</div>
              <div class="text-sm text-gray-500">Total Requests</div>
            </div>
          </div>
          <div class="flex items-center text-sm">
            <span class="text-green-600 font-medium">+{{ statistics.requestsThisWeek }}</span>
            <span class="text-gray-500 ml-1">this week</span>
          </div>
        </div>
      </div>

      <!-- Charts Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Account Balance Chart -->
        <div class="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/50 p-8">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-xl font-bold text-gray-900">Account Balance Trend</h2>
            <div class="flex items-center space-x-2">
              <span class="text-sm text-gray-500">Last 7 days</span>
              <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
            </div>
          </div>
          <div class="h-64 flex items-end justify-between space-x-2">
            <div v-for="(day, index) in chartData.balanceTrend" :key="index" class="flex-1 flex flex-col items-center">
              <div class="w-full bg-gray-100 rounded-t-lg relative" style="height: 200px;">
                <div
                  class="absolute bottom-0 w-full bg-gradient-to-t from-blue-500 to-blue-300 rounded-t-lg transition-all duration-500"
                  :style="{ height: `${(day.value / Math.max(...chartData.balanceTrend.map(d => d.value))) * 100}%` }">
                </div>
              </div>
              <div class="mt-2 text-xs text-gray-500">{{ day.label }}</div>
              <div class="text-xs font-medium text-gray-700">${{ day.value.toLocaleString() }}</div>
            </div>
          </div>
        </div>

        <!-- Request Types Chart -->
        <div class="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/50 p-8">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-xl font-bold text-gray-900">Request Types Distribution</h2>
            <div class="flex items-center space-x-2">
              <span class="text-sm text-gray-500">This month</span>
              <div class="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
          </div>
          <div class="space-y-4">
            <div v-for="type in chartData.requestTypes" :key="type.name" class="flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <div class="w-4 h-4 rounded-full" :class="type.color"></div>
                <span class="text-sm font-medium text-gray-700">{{ type.name }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="w-24 bg-gray-200 rounded-full h-2">
                  <div class="h-2 rounded-full transition-all duration-500" :class="type.color"
                    :style="{ width: `${(type.value / Math.max(...chartData.requestTypes.map(t => t.value))) * 100}%` }">
                  </div>
                </div>
                <span class="text-sm font-medium text-gray-900 w-12 text-right">{{ type.value }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Recent Activities & Quick Actions -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Recent Activities -->
        <div class="lg:col-span-2 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/50 p-8">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-xl font-bold text-gray-900">Recent Activities</h2>
            <a href="#" class="text-blue-600 hover:text-blue-800 text-sm font-medium">View All</a>
          </div>
          <div class="space-y-4">
            <div v-for="activity in recentActivities" :key="activity.id"
              class="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
              <div class="w-10 h-10 rounded-full flex items-center justify-center" :class="activity.type === 'top-up' ? 'bg-green-100' :
                activity.type === 'deduct' ? 'bg-red-100' :
                  activity.type === 'reset' ? 'bg-yellow-100' : 'bg-purple-100'">
                <svg class="w-5 h-5" :class="activity.type === 'top-up' ? 'text-green-600' :
                  activity.type === 'deduct' ? 'text-red-600' :
                    activity.type === 'reset' ? 'text-yellow-600' : 'text-purple-600'" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path v-if="activity.type === 'top-up'" fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"></path>
                  <path v-else-if="activity.type === 'deduct'" fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clip-rule="evenodd"></path>
                  <path v-else fill-rule="evenodd"
                    d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                    clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="flex-1">
                <div class="flex items-center justify-between">
                  <h3 class="text-sm font-medium text-gray-900">{{ activity.title }}</h3>
                  <span class="text-xs text-gray-500">{{ activity.time }}</span>
                </div>
                <p class="text-sm text-gray-600">{{ activity.description }}</p>
                <div class="flex items-center space-x-2 mt-1">
                  <span class="text-xs font-medium" :class="activity.type === 'top-up' ? 'text-green-600' :
                    activity.type === 'deduct' ? 'text-red-600' :
                      activity.type === 'reset' ? 'text-yellow-600' : 'text-purple-600'">
                    {{ activity.amount }}
                  </span>
                  <span class="text-xs text-gray-500">•</span>
                  <span class="text-xs text-gray-500">{{ activity.accountId }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Quick Actions -->
        <div class="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/50 p-8">
          <h2 class="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div class="space-y-4">
            <router-link to="/facebook-request"
              class="flex items-center p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-200 group">
              <div
                class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-200">
                <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h3 class="font-medium text-gray-900">Manage Accounts</h3>
                <p class="text-sm text-gray-500">View and manage Facebook accounts</p>
              </div>
            </router-link>

            <router-link to="/wallet"
              class="flex items-center p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors duration-200 group">
              <div
                class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-green-200">
                <svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z">
                  </path>
                </svg>
              </div>
              <div>
                <h3 class="font-medium text-gray-900">Add Funds</h3>
                <p class="text-sm text-gray-500">Top up your wallet balance</p>
              </div>
            </router-link>

            <router-link to="/request-history"
              class="flex items-center p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors duration-200 group">
              <div
                class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-purple-200">
                <svg class="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                    clip-rule="evenodd"></path>
                </svg>
              </div>
              <div>
                <h3 class="font-medium text-gray-900">View History</h3>
                <p class="text-sm text-gray-500">Check request history</p>
              </div>
            </router-link>

            <router-link to="/profile"
              class="flex items-center p-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors duration-200 group">
              <div
                class="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-orange-200">
                <svg class="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd">
                  </path>
                </svg>
              </div>
              <div>
                <h3 class="font-medium text-gray-900">Profile Settings</h3>
                <p class="text-sm text-gray-500">Manage your profile</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>

      <!-- Account Status Overview -->
      <div class="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/50 p-8">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-xl font-bold text-gray-900">Account Status Overview</h2>
          <div class="flex items-center space-x-4">
            <div class="flex items-center space-x-2">
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              <span class="text-sm text-gray-600">Active</span>
            </div>
            <div class="flex items-center space-x-2">
              <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span class="text-sm text-gray-600">Pending</span>
            </div>
            <div class="flex items-center space-x-2">
              <div class="w-3 h-3 bg-red-500 rounded-full"></div>
              <span class="text-sm text-gray-600">Blocked</span>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="account in accountStatus" :key="account.id"
            class="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors duration-200">
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center space-x-2">
                <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span class="text-xs font-bold text-blue-600">FB</span>
                </div>
                <div>
                  <div class="text-sm font-medium text-gray-900">{{ account.accountName }}</div>
                  <div class="text-xs text-gray-500">{{ account.accountId }}</div>
                </div>
              </div>
              <div class="flex items-center space-x-1">
                <div class="w-2 h-2 rounded-full" :class="account.status === 'active' ? 'bg-green-500' :
                  account.status === 'pending' ? 'bg-yellow-500' : 'bg-red-500'">
                </div>
                <span class="text-xs font-medium" :class="account.status === 'active' ? 'text-green-600' :
                  account.status === 'pending' ? 'text-yellow-600' : 'text-red-600'">
                  {{ account.status.toUpperCase() }}
                </span>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <div class="text-sm text-gray-600">Balance:</div>
              <div class="text-sm font-semibold text-gray-900">${{ account.balance }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AdpionLayout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AdpionLayout from '@/components/layout/AdpionLayout.vue'
import { useDashboardApi } from '@/composables/useApi'

// Date picker
const selectedDate = ref(new Date().toISOString().split('T')[0])

// API composable
const { getStats, getAccountStatus, getRecentActivities, getChartData, loading, error } = useDashboardApi()

// Statistics data
const statistics = ref({
  totalAccounts: 0,
  activeAccounts: 0,
  newAccountsThisMonth: 0,
  totalBalance: 0,
  balanceIncrease: 0,
  totalRequests: 0,
  requestsThisWeek: 0
})

// Chart data
const chartData = ref({
  balanceTrend: [],
  requestTypes: []
})

// Recent activities
const recentActivities = ref([])

// Account status overview
const accountStatus = ref([])

// Load dashboard data
const loadDashboardData = async () => {
  try {
    // Load all data in parallel
    const [statsData, accountsData, activitiesData, chartsData] = await Promise.all([
      getStats(),
      getAccountStatus(),
      getRecentActivities(),
      getChartData()
    ])

    // Update reactive data
    statistics.value = statsData
    accountStatus.value = accountsData
    recentActivities.value = activitiesData
    chartData.value = chartsData
  } catch (err) {
    console.error('Error loading dashboard data:', err)
    // Fallback to static data if API fails
    statistics.value = {
      totalAccounts: 97,
      activeAccounts: 89,
      newAccountsThisMonth: 12,
      totalBalance: 2847.50,
      balanceIncrease: 1250.00,
      totalRequests: 1247,
      requestsThisWeek: 23
    }
    
    chartData.value = {
      balanceTrend: [
        { label: 'Mon', value: 2400 },
        { label: 'Tue', value: 2800 },
        { label: 'Wed', value: 3200 },
        { label: 'Thu', value: 2900 },
        { label: 'Fri', value: 3500 },
        { label: 'Sat', value: 3100 },
        { label: 'Sun', value: 2847 }
      ],
      requestTypes: [
        { name: 'Top-up', value: 45, color: 'bg-green-500' },
        { name: 'Deduct', value: 23, color: 'bg-red-500' },
        { name: 'Reset', value: 12, color: 'bg-yellow-500' },
        { name: 'Bind', value: 8, color: 'bg-purple-500' }
      ]
    }
    
    recentActivities.value = [
      {
        id: 1,
        type: 'top-up',
        title: 'Account Top-up',
        description: 'Top-up request processed successfully',
        amount: '+$1,000.00',
        accountId: '800624365979550',
        time: '2 hours ago'
      },
      {
        id: 2,
        type: 'deduct',
        title: 'Account Deduction',
        description: 'Deduction request processed',
        amount: '-$500.00',
        accountId: '1157513326484527',
        time: '4 hours ago'
      },
      {
        id: 3,
        type: 'bind',
        title: 'BM Binding',
        description: 'Business Manager binding completed',
        amount: 'N/A',
        accountId: '833346622688890',
        time: '6 hours ago'
      },
      {
        id: 4,
        type: 'reset',
        title: 'Account Reset',
        description: 'Account reset to initial state',
        amount: 'N/A',
        accountId: '645709148613088',
        time: '1 day ago'
      }
    ]
    
    accountStatus.value = [
      {
        id: 1,
        accountId: '800624365979550',
        accountName: 'SHOTOTA HOMEO',
        status: 'active',
        balance: '182.58'
      },
      {
        id: 2,
        accountId: '1157513326484527',
        accountName: 'achievecollect.shop',
        status: 'active',
        balance: '0.01'
      },
      {
        id: 3,
        accountId: '833346622688890',
        accountName: 'Buyeasybd.shop',
        status: 'pending',
        balance: '0.27'
      },
      {
        id: 4,
        accountId: '645709148613088',
        accountName: 'Ads.Towfiq',
        status: 'active',
        balance: '12.60'
      }
    ]
  }
}

// Load data on component mount
onMounted(() => {
  loadDashboardData()
})
</script>