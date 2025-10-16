<template>
  <AdpionLayout>
    <div class="space-y-8">
      <!-- Wallet Balance Section -->
      <div
        class="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
        <div class="absolute inset-0 bg-black/10"></div>
        <div class="relative z-10">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-6">
              <div
                class="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z">
                  </path>
                </svg>
              </div>
              <div>
                <div class="text-5xl font-bold mb-2">${{ walletBalance.toLocaleString() }}</div>
                <div class="text-blue-100 text-lg font-medium">Wallet Balance</div>
                <div class="text-blue-200 text-sm mt-1">Available for advertising campaigns</div>
              </div>
            </div>
            <button @click="showDepositModal = true"
              class="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/30 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              Add Funds
            </button>
          </div>
        </div>
      </div>

      <!-- Payment Methods -->
      <div class="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/50 p-8">
        <div class="flex items-center justify-between mb-8">
          <h2 class="text-2xl font-bold text-gray-900">Payment Methods</h2>
          <a href="#"
            class="text-blue-600 hover:text-blue-800 text-sm flex items-center bg-blue-50 px-4 py-2 rounded-xl hover:bg-blue-100 transition-colors duration-200">
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                clip-rule="evenodd"></path>
            </svg>
            Transaction History
          </a>
        </div>

        <!-- Payment Methods Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- PayPal -->
          <div
            class="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-200 cursor-pointer"
            @click="selectPaymentMethod('paypal')"
            :class="selectedPaymentMethod === 'paypal' ? 'ring-2 ring-blue-500 bg-blue-100' : ''">
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.299-.93 4.989-2.226 7.51-6.94 7.51h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106z" />
                </svg>
              </div>
              <div class="flex items-center space-x-2">
                <span class="text-xs font-medium text-red-600 bg-red-100 px-2 py-1 rounded-full">3% Fee</span>
                <div v-if="selectedPaymentMethod === 'paypal'"
                  class="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"></path>
                  </svg>
                </div>
              </div>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">PayPal</h3>
            <p class="text-sm text-gray-600 mb-4">Instant deposit with PayPal account</p>
            <div class="flex items-center text-xs text-gray-500">
              <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"></path>
              </svg>
              Instant processing
            </div>
          </div>

          <!-- USDT -->
          <div
            class="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-200 cursor-pointer"
            @click="selectPaymentMethod('usdt')"
            :class="selectedPaymentMethod === 'usdt' ? 'ring-2 ring-green-500 bg-green-100' : ''">
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <div class="flex items-center space-x-2">
                <span class="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">0% Fee</span>
                <div v-if="selectedPaymentMethod === 'usdt'"
                  class="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"></path>
                  </svg>
                </div>
              </div>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">USDT</h3>
            <p class="text-sm text-gray-600 mb-4">Cryptocurrency deposit with no fees</p>
            <div class="flex items-center text-xs text-gray-500">
              <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"></path>
              </svg>
              No fees
            </div>
          </div>

          <!-- Payoneer -->
          <div
            class="bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-200 cursor-pointer"
            @click="selectPaymentMethod('payoneer')"
            :class="selectedPaymentMethod === 'payoneer' ? 'ring-2 ring-purple-500 bg-purple-100' : ''">
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <div class="flex items-center space-x-2">
                <span class="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">0% Fee</span>
                <div v-if="selectedPaymentMethod === 'payoneer'"
                  class="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"></path>
                  </svg>
                </div>
              </div>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Payoneer</h3>
            <p class="text-sm text-gray-600 mb-4">Global payment platform with no fees</p>
            <div class="flex items-center text-xs text-gray-500">
              <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"></path>
              </svg>
              No fees
            </div>
          </div>
        </div>
      </div>

      <!-- Deposit Modal -->
      <div v-if="showDepositModal"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4">
          <!-- Header -->
          <div class="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 class="text-xl font-bold text-gray-900">Add Funds</h2>
            <button @click="closeDepositModal" class="text-gray-400 hover:text-gray-600 transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>

          <div class="p-6 space-y-6">
            <!-- Payment Method Selection -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-3">Payment Method</label>
              <div class="space-y-3">
                <div v-for="method in paymentMethods" :key="method.id" @click="selectedPaymentMethod = method.id"
                  class="flex items-center p-4 border rounded-xl cursor-pointer transition-all duration-200" :class="selectedPaymentMethod === method.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'">
                  <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 rounded-lg flex items-center justify-center" :class="method.colorClass">
                      <component :is="method.icon" class="w-5 h-5" :class="method.iconColor"></component>
                    </div>
                    <div class="flex-1">
                      <div class="flex items-center justify-between">
                        <h3 class="font-medium text-gray-900">{{ method.name }}</h3>
                        <span class="text-xs font-medium px-2 py-1 rounded-full"
                          :class="method.fee === 0 ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100'">
                          {{ method.fee === 0 ? '0% Fee' : `${method.fee}% Fee` }}
                        </span>
                      </div>
                      <p class="text-sm text-gray-500">{{ method.description }}</p>
                    </div>
                    <div v-if="selectedPaymentMethod === method.id"
                      class="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Amount Input -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                <span class="text-red-500">*</span> Amount
              </label>
              <div class="relative">
                <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                <input type="number" v-model="depositAmount" placeholder="Enter amount"
                  class="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  :class="{ 'border-red-300': errors.amount }">
              </div>
              <p v-if="errors.amount" class="mt-1 text-sm text-red-600">{{ errors.amount }}</p>
              <div v-if="selectedPaymentMethod && depositAmount" class="mt-2 p-3 bg-gray-50 rounded-lg">
                <div class="flex justify-between text-sm">
                  <span class="text-gray-600">Deposit Amount:</span>
                  <span class="font-medium">${{ parseFloat(depositAmount).toLocaleString() }}</span>
                </div>
                <div v-if="getSelectedMethod().fee > 0" class="flex justify-between text-sm">
                  <span class="text-gray-600">Processing Fee ({{ getSelectedMethod().fee }}%):</span>
                  <span class="font-medium text-red-600">-${{ (parseFloat(depositAmount) * getSelectedMethod().fee /
                    100).toFixed(2) }}</span>
                </div>
                <div class="flex justify-between text-sm font-semibold border-t border-gray-200 pt-2 mt-2">
                  <span>You will receive:</span>
                  <span class="text-green-600">${{ (parseFloat(depositAmount) * (1 - getSelectedMethod().fee /
                    100)).toFixed(2) }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div class="flex items-center justify-end space-x-4 p-6 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
            <button @click="closeDepositModal"
              class="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors duration-200">
              Cancel
            </button>
            <button @click="processDeposit" :disabled="!isDepositValid"
              class="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
              Continue
            </button>
          </div>
        </div>
      </div>

      <!-- Success Modal -->
      <div v-if="showSuccessModal"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4">
          <div class="p-8 text-center">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Deposit Successful!</h3>
            <p class="text-gray-600 mb-6">
              Your deposit of <span class="font-semibold text-green-600">${{ (parseFloat(depositAmount) * (1 -
                getSelectedMethod().fee / 100)).toFixed(2) }}</span>
              has been added to your wallet.
            </p>
            <button @click="closeSuccessModal"
              class="w-full px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-200">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  </AdpionLayout>
</template>

<script setup lang="ts">
import { ref, computed, reactive, onMounted } from 'vue'
import AdpionLayout from '@/components/layout/AdpionLayout.vue'
import { useWallet } from '@/composables/useWallet'

const wallet = useWallet()

// Wallet state
const walletBalance = ref(0)
const showDepositModal = ref(false)
const showSuccessModal = ref(false)
const selectedPaymentMethod = ref('')
const depositAmount = ref('')
const errors = reactive({ amount: '' })

onMounted(() => {
  walletBalance.value = wallet.getBalance()
})

// Payment methods
const paymentMethods = ref([
  { id: 'paypal', name: 'PayPal', description: 'Instant deposit with PayPal account', fee: 3, colorClass: 'bg-blue-100', iconColor: 'text-blue-600', icon: 'svg' },
  { id: 'usdt', name: 'USDT', description: 'Cryptocurrency deposit with no fees', fee: 0, colorClass: 'bg-green-100', iconColor: 'text-green-600', icon: 'svg' },
  { id: 'payoneer', name: 'Payoneer', description: 'Global payment platform with no fees', fee: 0, colorClass: 'bg-purple-100', iconColor: 'text-purple-600', icon: 'svg' }
])

const isDepositValid = computed(() => {
  return selectedPaymentMethod.value && depositAmount.value && parseFloat(depositAmount.value) > 0 && !errors.amount
})

const selectPaymentMethod = (methodId: string) => { selectedPaymentMethod.value = methodId }
const getSelectedMethod = () => paymentMethods.value.find(m => m.id === selectedPaymentMethod.value) || paymentMethods.value[0]

const validateAmount = () => {
  errors.amount = ''
  const val = parseFloat(depositAmount.value)
  if (!depositAmount.value) { errors.amount = 'Amount is required'; return false }
  if (!Number.isFinite(val) || val <= 0) { errors.amount = 'Amount must be greater than 0'; return false }
  if (val < 10) { errors.amount = 'Minimum deposit amount is $10'; return false }
  return true
}

const processDeposit = () => {
  if (!validateAmount()) return
  const method = getSelectedMethod()
  const val = parseFloat(depositAmount.value)
  const finalAmount = val * (1 - method.fee / 100)
  wallet.add(finalAmount)
  walletBalance.value = wallet.getBalance()
  showDepositModal.value = false
  showSuccessModal.value = true
  selectedPaymentMethod.value = ''
  depositAmount.value = ''
}

const closeDepositModal = () => { showDepositModal.value = false; selectedPaymentMethod.value = ''; depositAmount.value = ''; errors.amount = '' }
const closeSuccessModal = () => { showSuccessModal.value = false }
</script>