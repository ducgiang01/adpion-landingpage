<template>
  <AdpionLayout>
    <div class="space-y-8">
      <!-- Header -->
      <div class="flex items-center justify-between">
        <div>
          <h1
            class="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            Facebook Request Management
          </h1>
          <p class="text-gray-600 mt-2">Manage your Facebook advertising accounts and requests</p>
        </div>
      </div>


      <!-- Search/Filter Controls -->
      <div class="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/50 p-8">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-xl font-bold text-gray-900">Search & Filter</h2>
          <div class="text-sm text-gray-500">
            Last updated: 10-15 11:15:00
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Account Name</label>
            <input type="text" placeholder="Enter account name..."
              class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-200" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Account ID</label>
            <input type="text" placeholder="Enter account ID..."
              class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-200" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Status</label>
            <select
              class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-200">
              <option>All Status</option>
              <option>Active</option>
              <option>Pending</option>
              <option>Rejected</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Balance Range</label>
            <select
              class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-200">
              <option>All Ranges</option>
              <option>$0 - $100</option>
              <option>$100 - $500</option>
              <option>$500+</option>
            </select>
          </div>
        </div>

        <div class="flex items-center space-x-4">
          <button
            class="flex items-center px-6 py-3 text-gray-600 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all duration-200">
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"></path>
            </svg>
            Advanced Filters
          </button>
          <button
            class="px-6 py-3 text-gray-600 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all duration-200">
            Reset
          </button>
          <button
            class="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
            Search
          </button>
        </div>
      </div>

      <!-- Data Table -->
      <div class="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">
        <div class="px-8 py-6 border-b border-gray-200/50">
          <div class="flex items-center justify-between">
            <h2 class="text-xl font-bold text-gray-900">Account Management</h2>
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
              <div class="flex items-center space-x-2">
                <span class="text-sm text-gray-600">Sort by:</span>
                <select
                  class="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Date Created</option>
                  <option>Account Name</option>
                  <option>Balance</option>
                  <option>Status</option>
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
                  <input type="checkbox" class="rounded border-gray-300 text-blue-600 focus:ring-blue-500">
                </th>
                <th class="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Account ID
                </th>
                <th class="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Account Name
                </th>
                <th class="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Status
                </th>
                <th class="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Balance
                </th>
                <th class="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Business License
                </th>
                <th class="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Request ID
                </th>
                <th class="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Date Created
                </th>
                <th class="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Team ID
                </th>
                <th class="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200/50">
              <tr v-for="account in accounts" :key="account.id"
                class="hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200">
                <td class="px-6 py-4 whitespace-nowrap">
                  <input type="checkbox" class="rounded border-gray-300 text-blue-600 focus:ring-blue-500">
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-medium text-gray-900">{{ account.accountId }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <span class="text-xs font-bold text-blue-600">FB</span>
                    </div>
                    <div>
                      <div class="text-sm font-medium text-gray-900">{{ account.accountName }}</div>
                      <div class="text-xs text-gray-500">Facebook Business</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                    <div class="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    ACTIVE
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-semibold text-gray-900">${{ account.balance }}</div>
                  <div class="text-xs text-gray-500">Available</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900 max-w-xs truncate">{{ account.businessLicense }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-mono text-gray-900">{{ account.requestId }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ account.dateCreated }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ account.teamId }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex space-x-1">
                    <button @click="openActionModal('top-up', account)"
                      class="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-xs font-medium hover:bg-blue-200 transition-colors duration-200">
                      Top-up
                    </button>
                    <button @click="openActionModal('deduct', account)"
                      class="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-medium hover:bg-green-200 transition-colors duration-200">
                      Deduct
                    </button>
                    <button @click="openActionModal('reset', account)"
                      class="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-lg text-xs font-medium hover:bg-yellow-200 transition-colors duration-200">
                      Reset
                    </button>
                    <button @click="openActionModal('bind', account)"
                      class="px-3 py-1 bg-purple-100 text-purple-700 rounded-lg text-xs font-medium hover:bg-purple-200 transition-colors duration-200">
                      Bind
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Pagination -->
        <div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
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

    <!-- Submit Application Modal -->
    <SubmitApplicationModal v-if="showSubmitModal" :initialApplicationType="currentAction"
      @close="showSubmitModal = false" @submit="handleSubmitApplication" />
  </AdpionLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AdpionLayout from '@/components/layout/AdpionLayout.vue'
import SubmitApplicationModal from '@/components/forms/SubmitApplicationModal.vue'

// Modal states
const showSubmitModal = ref(false)
const currentAction = ref('')
const selectedAccount = ref(null)

// Handle form submission
const handleSubmitApplication = (formData: any) => {
  console.log('Submitting application:', {
    account: selectedAccount.value,
    formData
  })
  // Add your submission logic here
  showSubmitModal.value = false
  // You can add success notification here
}

// Handle action buttons - open SubmitApplicationModal with specific Application Type
const openActionModal = (action: string, account: any) => {
  selectedAccount.value = account

  // Map actions to application types
  const actionToApplicationType: Record<string, string> = {
    'top-up': 'limit-change',
    'deduct': 'limit-change',
    'reset': 'limit-change',
    'bind': 'bm-binding'
  }

  // Set the application type and open submit modal
  currentAction.value = actionToApplicationType[action] || 'limit-change'
  showSubmitModal.value = true
}

const accounts = ref([
  {
    id: 1,
    accountId: '1157513326484527',
    accountName: 'achievecollect.shop',
    balance: '0.01',
    businessLicense: '济南汲润网络科技有限公司',
    requestId: '12109649',
    dateCreated: '2025-10-10 03:12:05',
    teamId: '0'
  },
  {
    id: 2,
    accountId: '833346622688890',
    accountName: 'Buyeasybd.shop (Ads City)',
    balance: '0.27',
    businessLicense: '济南汲润网络科技有限公司',
    requestId: '12109646',
    dateCreated: '2025-10-09 15:30:22',
    teamId: '0'
  },
  {
    id: 3,
    accountId: '645709148613088',
    accountName: 'Ads.Towfiq (Ads City)',
    balance: '12.60',
    businessLicense: '济南鼎泰祥信息科技有限公司',
    requestId: '12109645',
    dateCreated: '2025-10-08 09:45:18',
    teamId: '0'
  },
  {
    id: 4,
    accountId: '1549312319781595',
    accountName: 'tagor.xyz (Ads City)',
    balance: '44.48',
    businessLicense: '济南汲润网络科技有限公司',
    requestId: '12109644',
    dateCreated: '2025-10-07 14:20:33',
    teamId: '0'
  },
  {
    id: 5,
    accountId: '800624365979550',
    accountName: 'SHOTOTA HOMEO',
    balance: '182.58',
    businessLicense: '济南鼎泰祥信息科技有限公司',
    requestId: '12109643',
    dateCreated: '2025-10-06 11:15:42',
    teamId: '0'
  },
  {
    id: 6,
    accountId: '987654321098765',
    accountName: 'nmartbd.com',
    balance: '5.06',
    businessLicense: '宁波黑尔士科技有限公司',
    requestId: '12109642',
    dateCreated: '2025-10-05 16:30:15',
    teamId: '0'
  },
  {
    id: 7,
    accountId: '123456789012345',
    accountName: 'UNITED HOMEO',
    balance: '41.60',
    businessLicense: '济南汲润网络科技有限公司',
    requestId: '12109641',
    dateCreated: '2025-10-04 08:45:27',
    teamId: '0'
  },
  {
    id: 8,
    accountId: '555666777888999',
    accountName: 'Adpion01',
    balance: '5.47',
    businessLicense: '济南鼎泰祥信息科技有限公司',
    requestId: '12109640',
    dateCreated: '2025-10-03 13:20:10',
    teamId: '0'
  },
  {
    id: 9,
    accountId: '111222333444555',
    accountName: 'adscitybd.com',
    balance: '0.01',
    businessLicense: '济南汲润网络科技有限公司',
    requestId: '12109639',
    dateCreated: '2025-10-02 10:15:35',
    teamId: '0'
  },
  {
    id: 10,
    accountId: '999888777666555',
    accountName: 'Cholo Speed UK',
    balance: '0.01',
    businessLicense: '济南鼎泰祥信息科技有限公司',
    requestId: '12109638',
    dateCreated: '2025-09-18 12:30:45',
    teamId: '0'
  }
])
</script>
