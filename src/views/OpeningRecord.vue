<template>
  <AdpionLayout>
    <div class="space-y-6">
      <!-- Header -->
      <div class="flex items-center justify-between">
        <h1 class="text-2xl font-bold text-gray-900">Facebook Account Opening Record</h1>
        <div class="flex items-center space-x-4">
          <button class="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center">
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
            Data export
          </button>
          <button class="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50">
            Submit account opening
          </button>
          <button class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Apply ads account
          </button>
        </div>
      </div>

      <!-- Platform Tabs -->
      <div class="flex space-x-1 bg-gray-100 p-1 rounded-lg">
        <button class="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium">
          <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
          </svg>
          Facebook
        </button>
        <button class="flex items-center px-4 py-2 text-gray-600 hover:text-gray-800 text-sm font-medium">
          <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
          </svg>
          Google
        </button>
        <button class="flex items-center px-4 py-2 text-gray-600 hover:text-gray-800 text-sm font-medium">
          <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
          </svg>
          TikTok
        </button>
        <button class="flex items-center px-4 py-2 text-gray-600 hover:text-gray-800 text-sm font-medium">
          <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
          </svg>
          Microsoft
        </button>
        <button class="flex items-center px-4 py-2 text-gray-600 hover:text-gray-800 text-sm font-medium">
          <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
          </svg>
          Snapchat
        </button>
        <button class="flex items-center px-4 py-2 text-gray-600 hover:text-gray-800 text-sm font-medium">
          <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
          </svg>
          TikTok in Southeast Asia
        </button>
      </div>

      <!-- Management Sub-tabs -->
      <div class="flex space-x-8 border-b border-gray-200">
        <button class="pb-2 px-1 border-b-2 border-blue-500 text-blue-600 font-medium text-sm">
          Quota Management
        </button>
        <button class="pb-2 px-1 text-gray-600 hover:text-gray-800 font-medium text-sm">
          Name Change
        </button>
        <button class="pb-2 px-1 text-gray-600 hover:text-gray-800 font-medium text-sm">
          BM binding
        </button>
        <button class="pb-2 px-1 text-gray-600 hover:text-gray-800 font-medium text-sm">
          Pixel binding
        </button>
      </div>

      <!-- Filter/Search Section -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Request ID</label>
            <input 
              type="text" 
              placeholder="Multiple inputs" 
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Account ID</label>
            <input 
              type="text" 
              placeholder="Multiple inputs" 
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Business license name</label>
            <input 
              type="text" 
              placeholder="Multiple inputs" 
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Application status</label>
            <select class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Filter.pleaseSelectApplication status</option>
              <option>Account opened successfully</option>
              <option>BF rejected</option>
            </select>
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <button class="flex items-center px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50">
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
            Collapse.expand
          </button>
          <button class="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50">
            Filter.reset
          </button>
          <button class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Filter.search
          </button>
        </div>
      </div>

      <!-- Data Table -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Request ID
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Business license name
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type of industry
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Media User
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Application status
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Submission time
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Accounts number
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Team ID
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Operation
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="record in records" :key="record.id" class="hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {{ record.requestId }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {{ record.businessLicense }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {{ record.industryType }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {{ record.mediaUser }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div v-if="record.status === 'success'" class="flex items-center">
                    <svg class="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    <span class="text-green-600 text-sm">Account opened successfully</span>
                  </div>
                  <div v-else class="flex items-center">
                    <svg class="w-4 h-4 text-orange-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                    <span class="text-orange-600 text-sm">BF rejected</span>
                    <svg class="w-4 h-4 text-gray-400 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {{ record.submissionTime }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {{ record.accountsNumber }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {{ record.teamId }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div class="flex space-x-2">
                    <a href="#" class="text-blue-600 hover:text-blue-900">Details</a>
                    <a href="#" class="text-blue-600 hover:text-blue-900">Accounts</a>
                    <a href="#" class="text-blue-600 hover:text-blue-900">Recall</a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <!-- Pagination -->
        <div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
          <div class="flex-1 flex justify-between sm:hidden">
            <button class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Previous
            </button>
            <button class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Next
            </button>
          </div>
          <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p class="text-sm text-gray-700">
                Showing <span class="font-medium">1</span> to <span class="font-medium">10</span> of <span class="font-medium">97</span> results
              </p>
            </div>
            <div class="flex items-center space-x-2">
              <button class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </button>
              <button class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-blue-50 text-sm font-medium text-blue-600">
                1
              </button>
              <button class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                2
              </button>
              <button class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                3
              </button>
              <button class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                4
              </button>
              <button class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                5
              </button>
              <button class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                6
              </button>
              <button class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                7
              </button>
              <button class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
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
import { ref } from 'vue'
import AdpionLayout from '@/components/layout/AdpionLayout.vue'

const records = ref([
  {
    id: 1,
    requestId: '1976222716471738',
    businessLicense: '济南鼎泰祥信息科技有限公司',
    industryType: 'Ecommerce',
    mediaUser: '1779653829357823 Md Faruk Hossain',
    status: 'success',
    submissionTime: '2025-10-10 03:12:05',
    accountsNumber: '1',
    teamId: '--'
  },
  {
    id: 2,
    requestId: '2007417466754851',
    businessLicense: '济南鼎泰祥信息科技有限公司',
    industryType: 'Ecommerce',
    mediaUser: '1779653829357823 Md Faruk Hossain',
    status: 'success',
    submissionTime: '2025-10-09 15:30:22',
    accountsNumber: '1',
    teamId: '--'
  },
  {
    id: 3,
    requestId: '1524889141845875',
    businessLicense: '济南鼎泰祥信息科技有限公司',
    industryType: 'Ecommerce',
    mediaUser: '1779653829357823 Md Faruk Hossain',
    status: 'rejected',
    submissionTime: '2025-10-07 12:27:54',
    accountsNumber: '1',
    teamId: '--'
  },
  {
    id: 4,
    requestId: '1549312319781595',
    businessLicense: '济南汲润网络科技有限公司',
    industryType: 'Ecommerce',
    mediaUser: '1779653829357823 Md Faruk Hossain',
    status: 'success',
    submissionTime: '2025-10-06 11:15:42',
    accountsNumber: '1',
    teamId: '--'
  },
  {
    id: 5,
    requestId: '800624365979550',
    businessLicense: '济南鼎泰祥信息科技有限公司',
    industryType: 'Ecommerce',
    mediaUser: '1779653829357823 Md Faruk Hossain',
    status: 'rejected',
    submissionTime: '2025-10-05 16:30:15',
    accountsNumber: '1',
    teamId: '--'
  }
])
</script>
