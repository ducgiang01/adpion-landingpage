<template>
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <!-- Header -->
            <div class="flex items-center justify-between p-6 border-b border-gray-200">
                <button @click="$emit('close')" class="text-gray-400 hover:text-gray-600 transition-colors">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </button>
                <h2 class="text-xl font-bold text-gray-900 capitalize">{{ action }} Account</h2>
                <div class="w-6"></div> <!-- Spacer for centering -->
            </div>

            <div class="p-6 space-y-6">
                <!-- Account Information -->
                <div class="bg-gray-50 rounded-xl p-4">
                    <h3 class="text-lg font-semibold text-gray-900 mb-3">Account Information</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <span class="text-sm text-gray-600">Account ID:</span>
                            <span class="ml-2 font-mono text-sm font-medium">{{ account?.accountId }}</span>
                        </div>
                        <div>
                            <span class="text-sm text-gray-600">Account Name:</span>
                            <span class="ml-2 text-sm font-medium">{{ account?.accountName }}</span>
                        </div>
                        <div>
                            <span class="text-sm text-gray-600">Current Balance:</span>
                            <span class="ml-2 text-sm font-bold text-blue-600">${{ account?.balance }}</span>
                        </div>
                        <div>
                            <span class="text-sm text-gray-600">Status:</span>
                            <span
                                class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                ACTIVE
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Action-specific content -->
                <div v-if="action === 'top-up'" class="space-y-4">
                    <div class="bg-blue-50 border border-blue-200 rounded-xl p-4">
                        <div class="flex items-start space-x-3">
                            <div
                                class="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg class="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-blue-900 mb-1">Top-up Account</h3>
                                <p class="text-sm text-blue-800">Add funds to this account. The amount will be credited
                                    immediately.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-else-if="action === 'deduct'" class="space-y-4">
                    <div class="bg-green-50 border border-green-200 rounded-xl p-4">
                        <div class="flex items-start space-x-3">
                            <div
                                class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-green-900 mb-1">Deduct from Account</h3>
                                <p class="text-sm text-green-800">Remove funds from this account. This action will have
                                    a 1-hour delay before being processed.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-else-if="action === 'reset'" class="space-y-4">
                    <div class="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                        <div class="flex items-start space-x-3">
                            <div
                                class="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg class="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-yellow-900 mb-1">Reset Account</h3>
                                <p class="text-sm text-yellow-800">Reset this account to its initial state. This action
                                    will have a 2-hour delay before being processed.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-else-if="action === 'bind'" class="space-y-4">
                    <div class="bg-purple-50 border border-purple-200 rounded-xl p-4">
                        <div class="flex items-start space-x-3">
                            <div
                                class="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg class="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-purple-900 mb-1">BM Binding</h3>
                                <p class="text-sm text-purple-800">Configure BM (Business Manager) binding or unbinding
                                    for this account. You can bind to a new BM or unbind from existing BM.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Amount Input (for top-up, deduct, reset) -->
                <div v-if="['top-up', 'deduct', 'reset'].includes(action)">
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                        <span class="text-red-500">*</span> Amount
                    </label>
                    <input type="number" v-model="formData.amount" placeholder="Please enter amount"
                        class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        :class="{ 'border-red-300': errors.amount }">
                    <p v-if="errors.amount" class="mt-1 text-sm text-red-600">{{ errors.amount }}</p>
                </div>

                <!-- Currency Selection -->
                <div v-if="['top-up', 'deduct', 'reset'].includes(action)">
                    <label class="block text-sm font-medium text-gray-700 mb-3">
                        <span class="text-red-500">*</span> Currency
                    </label>
                    <label class="flex items-center">
                        <input type="radio" v-model="formData.currency" value="USD"
                            class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                        <span class="ml-3 text-sm text-gray-700">USD</span>
                    </label>
                </div>

                <!-- Bind-specific fields -->
                <div v-if="action === 'bind'" class="space-y-4">
                    <!-- BM Binding Section -->
                    <div class="bg-gray-50 rounded-xl p-4">
                        <h3 class="text-lg font-semibold text-gray-900 mb-4">BM Binding Configuration</h3>

                        <!-- BM binding field -->
                        <div class="mb-4">
                            <label class="block text-sm font-medium text-gray-700 mb-2">BM binding</label>
                            <input type="text" v-model="formData.bmBinding" placeholder="Please add and select"
                                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                :class="{ 'border-red-300': errors.bmBinding }">
                            <p v-if="errors.bmBinding" class="mt-1 text-sm text-red-600">{{ errors.bmBinding }}</p>
                        </div>

                        <!-- BM unbind field -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">BM unbind</label>
                            <input type="text" v-model="formData.bmUnbind" placeholder="Please add and select"
                                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                :class="{ 'border-red-300': errors.bmUnbind }">
                            <p v-if="errors.bmUnbind" class="mt-1 text-sm text-red-600">{{ errors.bmUnbind }}</p>
                        </div>
                    </div>
                </div>

                <!-- Confirmation Message -->
                <div class="bg-gray-50 rounded-xl p-4">
                    <div class="flex items-start space-x-3">
                        <div
                            class="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg class="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 class="font-semibold text-gray-900 mb-1">Confirmation Required</h3>
                            <p class="text-sm text-gray-700">
                                Are you sure you want to {{ action }} this account? This action cannot be undone.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Footer -->
            <div class="flex items-center justify-end space-x-4 p-6 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
                <button @click="$emit('close')"
                    class="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                    Cancel
                </button>
                <button @click="handleSubmit" :disabled="!isFormValid"
                    class="px-6 py-3 rounded-xl transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-white"
                    :class="getActionButtonClass()">
                    Confirm {{ action }}
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue'

interface Props {
    action: string
    account: any
}

interface FormData {
    amount: string
    currency: string
    targetAccountId: string
    bindingType: string
    bmBinding: string
    bmUnbind: string
}

interface Errors {
    amount?: string
    targetAccountId?: string
    bmBinding?: string
    bmUnbind?: string
}

const props = defineProps<Props>()
const emit = defineEmits<{
    close: []
    submit: [data: FormData]
}>()

const formData = reactive<FormData>({
    amount: '',
    currency: 'USD',
    targetAccountId: '',
    bindingType: 'payment',
    bmBinding: '',
    bmUnbind: ''
})

const errors = reactive<Errors>({})

const isFormValid = computed(() => {
    if (props.action === 'bind') {
        return (formData.bmBinding || formData.bmUnbind) && !errors.bmBinding && !errors.bmUnbind
    }
    return formData.amount && formData.currency && !errors.amount
})

const validateForm = () => {
    errors.amount = ''
    errors.targetAccountId = ''
    errors.bmBinding = ''
    errors.bmUnbind = ''

    if (['top-up', 'deduct', 'reset'].includes(props.action)) {
        if (!formData.amount) {
            errors.amount = 'Amount is required'
            return false
        }

        if (parseFloat(formData.amount) <= 0) {
            errors.amount = 'Amount must be greater than 0'
            return false
        }
    }

    if (props.action === 'bind') {
        if (!formData.bmBinding && !formData.bmUnbind) {
            errors.bmBinding = 'Please fill at least one BM field'
            return false
        }
    }

    return true
}

const getActionButtonClass = () => {
    switch (props.action) {
        case 'top-up':
            return 'bg-blue-600 hover:bg-blue-700'
        case 'deduct':
            return 'bg-green-600 hover:bg-green-700'
        case 'reset':
            return 'bg-yellow-600 hover:bg-yellow-700'
        case 'bind':
            return 'bg-purple-600 hover:bg-purple-700'
        default:
            return 'bg-gray-600 hover:bg-gray-700'
    }
}

const handleSubmit = () => {
    if (validateForm()) {
        emit('submit', { ...formData })
    }
}
</script>
