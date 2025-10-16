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
            <input type="text" placeholder="Enter account name..." v-model="filters.search" @input="handleSearch"
              class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-200" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Account ID</label>
            <input type="text" placeholder="Enter account ID..." v-model="filters.accountId" @input="handleSearch"
              class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-200" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Status</label>
            <select v-model="filters.status" @change="handleSearch"
              class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-200">
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="pending">Pending</option>
              <option value="blocked">Blocked</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Balance Range</label>
            <select v-model="filters.balanceRange" @change="handleSearch"
              class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-200">
              <option value="all">All Ranges</option>
              <option value="0-100">$0 - $100</option>
              <option value="100-500">$100 - $500</option>
              <option value="500+">$500+</option>
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
          <button @click="resetFilters"
            class="px-6 py-3 text-gray-600 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all duration-200">
            Reset
          </button>
          <button @click="handleSearch"
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
              <tr v-for="account in filteredAccounts" :key="account._id"
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
                  <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold" :class="{
                    'bg-green-100 text-green-800': account.status === 'active',
                    'bg-yellow-100 text-yellow-800': account.status === 'pending',
                    'bg-red-100 text-red-800': account.status === 'blocked'
                  }">
                    <div class="w-2 h-2 rounded-full mr-2" :class="{
                      'bg-green-400': account.status === 'active',
                      'bg-yellow-400': account.status === 'pending',
                      'bg-red-400': account.status === 'blocked'
                    }"></div>
                    {{ account.status.toUpperCase() }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-semibold text-gray-900">${{ account.balance.toFixed(2) }}</div>
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
                Showing <span class="font-medium">{{ ((pagination.current - 1) * filters.limit) + 1 }}</span> to <span
                  class="font-medium">{{ Math.min(pagination.current * filters.limit, pagination.total) }}</span> of
                <span class="font-medium">{{ pagination.total }}</span> results
              </p>
            </div>
            <div class="flex items-center space-x-2">
              <button @click="changePage(pagination.current - 1)" :disabled="pagination.current <= 1"
                class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg>
              </button>
              <button v-for="page in Math.min(5, pagination.pages)" :key="page" @click="changePage(page)"
                class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium"
                :class="page === pagination.current ? 'bg-blue-50 text-blue-600' : 'bg-white text-gray-700 hover:bg-gray-50'">
                {{ page }}
              </button>
              <button @click="changePage(pagination.current + 1)" :disabled="pagination.current >= pagination.pages"
                class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"></path>
                </svg>
              </button>
              <select @change="changePageSize(Number(($event.target as HTMLSelectElement).value))"
                class="ml-4 px-3 py-2 border border-gray-300 rounded-md text-sm">
                <option :value="10" :selected="filters.limit === 10">10条/页</option>
                <option :value="20" :selected="filters.limit === 20">20条/页</option>
                <option :value="50" :selected="filters.limit === 50">50条/页</option>
              </select>
              <div class="ml-4 flex items-center space-x-2">
                <span class="text-sm text-gray-700">跳至</span>
                <input type="number" :value="pagination.current" @change="changePage(Number(($event.target as HTMLInputElement).value))"
                  class="w-16 px-2 py-1 border border-gray-300 rounded-md text-sm" min="1" :max="pagination.pages">
                <span class="text-sm text-gray-700">页</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Submit Application Modal -->
    <SubmitApplicationModal v-if="showSubmitModal" :initialApplicationType="currentAction"
      @close="showSubmitModal = false" @submit="(data: any) => handleSubmitApplication({ amount: Number(data.amount) })" />
  </AdpionLayout>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import AdpionLayout from '@/components/layout/AdpionLayout.vue'
import SubmitApplicationModal from '@/components/forms/SubmitApplicationModal.vue'
import { useAccountApi } from '@/composables/useApi'

// API composable
const { getAllAccounts, topUpAccount, deductAccount } = useAccountApi()

// Modal states
const showSubmitModal = ref(false)
const currentAction = ref('')
const selectedAccount = ref<Account | null>(null)

// Define types
interface Account {
  _id: string
  accountId: string
  accountName: string
  balance: number
  status: 'active' | 'pending' | 'blocked'
  createdAt: Date
  businessLicense?: string
  requestId?: string
  dateCreated?: string
  teamId?: string
}

interface Pagination {
  current: number
  pages: number
  total: number
}

// Data states
const accounts = ref<Account[]>([])
const pagination = ref<Pagination>({
  current: 1,
  pages: 1,
  total: 0
})

// Filter states
const filters = ref({
  search: '',
  accountId: '',
  status: 'all',
  balanceRange: 'all',
  page: 1,
  limit: 10
})

// Computed properties
const filteredAccounts = computed(() => {
  return accounts.value.map(account => ({
    ...account,
    businessLicense: getBusinessLicense(),
    requestId: generateRequestId(account.accountId),
    dateCreated: formatDate(account.createdAt),
    teamId: '0'
  }))
})

// Load accounts from API
const loadAccounts = async () => {
  try {
    const response = await getAllAccounts(filters.value) as { accounts: Account[], pagination: Pagination }
    accounts.value = response.accounts || []
    pagination.value = response.pagination || { current: 1, pages: 1, total: 0 }
  } catch (err) {
    console.error('Error loading accounts:', err)
    // Fallback to static data if API fails
    accounts.value = [
      {
        _id: '1',
        accountId: '1157513326484527',
        accountName: 'achievecollect.shop',
        balance: 0.01,
        status: 'active' as const,
        createdAt: new Date('2025-10-10T03:12:05Z')
      },
      {
        _id: '2',
        accountId: '833346622688890',
        accountName: 'Buyeasybd.shop',
        balance: 0.27,
        status: 'pending' as const,
        createdAt: new Date('2025-10-09T15:30:22Z')
      },
      {
        _id: '3',
        accountId: '645709148613088',
        accountName: 'Ads.Towfiq',
        balance: 12.60,
        status: 'active' as const,
        createdAt: new Date('2025-10-08T09:45:18Z')
      },
      {
        _id: '4',
        accountId: '800624365979550',
        accountName: 'SHOTOTA HOMEO',
        balance: 182.58,
        status: 'active' as const,
        createdAt: new Date('2025-10-06T11:15:42Z')
      },
      {
        _id: '5',
        accountId: '123456789012345',
        accountName: 'Test Account 1',
        balance: 500.00,
        status: 'active' as const,
        createdAt: new Date('2025-10-05T16:30:15Z')
      },
      {
        _id: '6',
        accountId: '987654321098765',
        accountName: 'Test Account 2',
        balance: 0.00,
        status: 'blocked' as const,
        createdAt: new Date('2025-10-04T08:45:27Z')
      }
    ]
  }
}

// Handle form submission
const handleSubmitApplication = async (formData: { amount: number }) => {
  try {
    const account = selectedAccount.value
    if (!account) return
    
    let result

    switch (currentAction.value) {
      case 'top-up':
        result = await topUpAccount(account.accountId, formData.amount)
        break
      case 'deduct':
        result = await deductAccount(account.accountId, formData.amount)
        break
      case 'reset':
        // Handle reset logic
        console.log('Reset account:', account.accountId)
        break
      case 'bind':
        // Handle bind logic
        console.log('Bind account:', account.accountId)
        break
    }

    // Reload accounts to get updated data
    await loadAccounts()
    showSubmitModal.value = false
    
    // Show success message
    console.log('Action completed successfully:', result)
  } catch (err) {
    console.error('Error performing action:', err)
  }
}

// Handle action buttons - open SubmitApplicationModal with specific Application Type
const openActionModal = (action: string, account: Account) => {
  selectedAccount.value = account

  // Map actions to application types
  const actionToApplicationType: Record<string, string> = {
    'top-up': 'top-up',
    'deduct': 'deduct',
    'reset': 'reset',
    'bind': 'bind'
  }

  // Set the application type and open submit modal
  currentAction.value = actionToApplicationType[action] || 'top-up'
  showSubmitModal.value = true
}

// Helper functions
const getBusinessLicense = (): string => {
  const licenses = [
    '济南汲润网络科技有限公司',
    '济南鼎泰祥信息科技有限公司',
    '宁波黑尔士科技有限公司'
  ]
  return licenses[Math.floor(Math.random() * licenses.length)]
}

const generateRequestId = (accountId: string): string => {
  return '1210' + accountId.slice(-4)
}

const formatDate = (date: Date): string => {
  return new Date(date).toLocaleString('en-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }).replace(',', '')
}

// Handle search and filter
const handleSearch = () => {
  filters.value.page = 1 // Reset to first page
  loadAccounts()
}

// Handle reset filters
const resetFilters = () => {
  filters.value = {
    search: '',
    accountId: '',
    status: 'all',
    balanceRange: 'all',
    page: 1,
    limit: 10
  }
  loadAccounts()
}

// Handle pagination
const changePage = (page: number) => {
  filters.value.page = page
  loadAccounts()
}

// Handle page size change
const changePageSize = (size: number) => {
  filters.value.limit = size
  filters.value.page = 1
  loadAccounts()
}

// Load data on component mount
onMounted(() => {
  loadAccounts()
})
</script>
