<template>
  <AdpionLayout>
    <div class="space-y-8">
      <!-- Header -->
      <div class="flex items-center justify-between">
        <div>
          <h1
            class="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            Request History
          </h1>
          <p class="text-gray-600 mt-2">View and manage all your account requests and their status</p>
        </div>
      </div>

      <!-- Platform and Sub-Navigation Tabs -->
      <div class="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/50 p-6">
        <!-- Platform Row -->
        <div class="flex items-center space-x-4 mb-6">
          <div class="flex items-center space-x-2">
            <svg class="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            <span class="text-sm font-medium text-gray-600">Platform:</span>
          </div>
          <button class="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium shadow-md">
            Facebook
          </button>
        </div>

        <!-- Sub-Navigation Row -->
        <div class="flex items-center space-x-8 border-b border-gray-200 pb-4">
          <button v-for="tab in subTabs" :key="tab.id" @click="selectedTab = tab.id"
            class="text-sm font-medium transition-all duration-200 pb-2" :class="selectedTab === tab.id
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-600 hover:text-gray-900'">
            {{ tab.name }}
          </button>
        </div>
      </div>

      <!-- Wallet Transaction Logs -->
      <div class="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/50 p-6">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xl font-bold text-gray-900">Wallet Transaction Logs</h2>
          <span class="text-sm text-gray-500">Local (client-side)</span>
        </div>
        <div v-if="walletLogs.length" class="space-y-3">
          <div v-for="log in walletLogs" :key="log.id"
            class="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
            <div class="flex items-center space-x-3">
              <div class="w-8 h-8 rounded-lg flex items-center justify-center"
                :class="log.type === 'top-up' ? 'bg-green-100' : log.type === 'deduct' ? 'bg-red-100' : 'bg-yellow-100'">
                <svg class="w-4 h-4"
                  :class="log.type === 'top-up' ? 'text-green-600' : log.type === 'deduct' ? 'text-red-600' : 'text-yellow-600'"
                  fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"></path>
                </svg>
              </div>
              <div>
                <div class="text-sm font-medium text-gray-900 capitalize">{{ log.type }}</div>
                <div class="text-xs text-gray-500">{{ log.time }}</div>
              </div>
            </div>
            <div class="text-right">
              <div class="text-sm font-semibold" :class="log.type === 'deduct' ? 'text-green-600' : 'text-red-600'">
                {{ log.type === 'deduct' ? '+' : '-' }}${{ log.amount.toFixed(2) }}
              </div>
              <div class="text-xs text-gray-500">Balance: ${{ log.balance.toFixed(2) }}</div>
            </div>
          </div>
        </div>
        <div v-else class="text-sm text-gray-500">No wallet logs yet.</div>
      </div>


      <!-- Request History Table -->
      <div class="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">
        <div class="px-8 py-6 border-b border-gray-200/50">
          <div class="flex items-center justify-between">
            <h2 class="text-xl font-bold text-gray-900">Request History</h2>
            <div class="flex items-center space-x-4">
              <div class="flex items-center space-x-2">
                <span class="text-sm text-gray-600">Show:</span>
                <select
                  class="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>10</option>
                  <option>25</option>
                  <option>50</option>
                  <option>100</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200/50">
            <thead class="bg-gradient-to-r from-gray-50 to-gray-100">
              <tr>
                <th class="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Account ID
                </th>
                <th class="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Business license name
                </th>
                <th class="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Type
                </th>
                <th class="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Currency
                </th>
                <th class="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Change amount
                </th>
                <th class="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Operation time
                </th>
                <th class="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Initiator
                </th>
                <th class="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Team ID
                </th>
                <th class="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Request ID
                </th>
                <th class="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Operate Result
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200/50">
              <tr v-for="request in requests" :key="request.id"
                class="hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-mono text-gray-900">{{ request.accountId }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ request.businessLicenseName }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ request.type }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ request.currency }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-semibold text-gray-900">{{ request.changeAmount }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ request.operationTime }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ request.initiator }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ request.teamId }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-mono text-gray-900">{{ request.requestId }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                    <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"></path>
                    </svg>
                    Succeeded
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Pagination -->
        <div class="bg-white px-8 py-4 flex items-center justify-between border-t border-gray-200/50">
          <div class="flex-1 flex justify-between sm:hidden">
            <button
              class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Previous
            </button>
            <button
              class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Next
            </button>
          </div>
          <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p class="text-sm text-gray-700">
                Showing <span class="font-medium">1</span> to <span class="font-medium">10</span> of <span
                  class="font-medium">97</span> results
              </p>
            </div>
            <div class="flex items-center space-x-2">
              <button
                class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg>
              </button>
              <button
                class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-blue-50 text-sm font-medium text-blue-600">
                1
              </button>
              <button
                class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                2
              </button>
              <button
                class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                3
              </button>
              <button
                class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                4
              </button>
              <button
                class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                5
              </button>
              <button
                class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                6
              </button>
              <button
                class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                7
              </button>
              <button
                class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"></path>
                </svg>
              </button>
              <select class="ml-4 px-3 py-2 border border-gray-300 rounded-md text-sm">
                <option>10条/页</option>
                <option>20条/页</option>
                <option>50条/页</option>
              </select>
              <div class="ml-4 flex items-center space-x-2">
                <span class="text-sm text-gray-700">跳至</span>
                <input type="number" class="w-16 px-2 py-1 border border-gray-300 rounded-md text-sm" value="1">
                <span class="text-sm text-gray-700">页</span>
              </div>
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

// Tab states
const selectedTab = ref('quota-management')

// Sub-navigation tabs
const subTabs = ref([
  { id: 'quota-management', name: 'Quota Management' },
  { id: 'name-change', name: 'Name Change' },
  { id: 'bm-binding', name: 'BM binding' },
  { id: 'pixel-binding', name: 'Pixel binding' }
])

// Wallet logs (local)
const walletLogs = ref<{ id: string; time: string; type: 'top-up' | 'deduct' | 'reset'; amount: number; balance: number }[]>([])

onMounted(() => {
  try {
    const raw = localStorage.getItem('walletLogs')
    walletLogs.value = raw ? JSON.parse(raw) : []
  } catch {
    walletLogs.value = []
  }
})

// Request history data
const requests = ref([
  {
    id: 1,
    accountId: '800624365979550',
    businessLicenseName: '宁波黑尔士科技有限公司',
    type: 'Top-up',
    currency: 'USD',
    changeAmount: '1,000.00',
    operationTime: '2025年10月14日 20:54:45',
    initiator: 'ducan2606@gmail.com',
    teamId: '0',
    requestId: '12109649'
  },
  {
    id: 2,
    accountId: '1157513326484527',
    businessLicenseName: '济南汲润网络科技有限公司',
    type: 'Top-up',
    currency: 'USD',
    changeAmount: '200.00',
    operationTime: '2025年10月14日 19:30:22',
    initiator: 'giangds2001@gmail.com',
    teamId: '0',
    requestId: '12109648'
  },
  {
    id: 3,
    accountId: '833346622688890',
    businessLicenseName: '济南汲润网络科技有限公司',
    type: 'Top-up',
    currency: 'USD',
    changeAmount: '1,200.00',
    operationTime: '2025年10月14日 18:15:10',
    initiator: 'ducan2606@gmail.com',
    teamId: '0',
    requestId: '12109647'
  },
  {
    id: 4,
    accountId: '645709148613088',
    businessLicenseName: '济南鼎泰祥信息科技有限公司',
    type: 'Top-up',
    currency: 'USD',
    changeAmount: '500.00',
    operationTime: '2025年10月14日 17:45:33',
    initiator: 'giangds2001@gmail.com',
    teamId: '0',
    requestId: '12109646'
  },
  {
    id: 5,
    accountId: '1549312319781595',
    businessLicenseName: '济南汲润网络科技有限公司',
    type: 'Top-up',
    currency: 'USD',
    changeAmount: '800.00',
    operationTime: '2025年10月14日 16:20:15',
    initiator: 'ducan2606@gmail.com',
    teamId: '0',
    requestId: '12109645'
  },
  {
    id: 6,
    accountId: '987654321098765',
    businessLicenseName: '宁波黑尔士科技有限公司',
    type: 'Top-up',
    currency: 'USD',
    changeAmount: '300.00',
    operationTime: '2025年10月14日 15:10:28',
    initiator: 'giangds2001@gmail.com',
    teamId: '0',
    requestId: '12109644'
  },
  {
    id: 7,
    accountId: '123456789012345',
    businessLicenseName: '济南汲润网络科技有限公司',
    type: 'Top-up',
    currency: 'USD',
    changeAmount: '1,500.00',
    operationTime: '2025年10月14日 14:55:42',
    initiator: 'ducan2606@gmail.com',
    teamId: '0',
    requestId: '12109643'
  },
  {
    id: 8,
    accountId: '555666777888999',
    businessLicenseName: '济南鼎泰祥信息科技有限公司',
    type: 'Top-up',
    currency: 'USD',
    changeAmount: '600.00',
    operationTime: '2025年10月14日 13:40:17',
    initiator: 'giangds2001@gmail.com',
    teamId: '0',
    requestId: '12109642'
  },
  {
    id: 9,
    accountId: '111222333444555',
    businessLicenseName: '济南汲润网络科技有限公司',
    type: 'Top-up',
    currency: 'USD',
    changeAmount: '400.00',
    operationTime: '2025年10月14日 12:25:55',
    initiator: 'ducan2606@gmail.com',
    teamId: '0',
    requestId: '12109641'
  },
  {
    id: 10,
    accountId: '999888777666555',
    businessLicenseName: '济南鼎泰祥信息科技有限公司',
    type: 'Top-up',
    currency: 'USD',
    changeAmount: '900.00',
    operationTime: '2025年10月14日 11:15:30',
    initiator: 'giangds2001@gmail.com',
    teamId: '0',
    requestId: '12109640'
  }
])
</script>
