<template>
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <!-- Header -->
            <div class="flex items-center justify-between p-6 border-b border-gray-200">
                <button @click="$emit('close')" class="text-gray-400 hover:text-gray-600 transition-colors">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </button>
                <h2 class="text-xl font-bold text-gray-900">Submit application</h2>
                <div class="w-6"></div> <!-- Spacer for centering -->
            </div>

            <div class="p-6 space-y-6">
                <!-- Information Banner -->
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
                            <h3 class="font-semibold text-blue-900 mb-1">Limit change</h3>
                            <p class="text-sm text-blue-800 leading-relaxed">
                                To ensure the security of funds, active Facebook accounts that request to reset will
                                have a 2-hours delay before the funds are credited, in accordance with the actual
                                executed amount. The request to deduct will have 1-hour delay before being credited.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Application Type -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Application Type :</label>
                    <div class="relative">
                        <select v-model="formData.applicationType" @change="onApplicationTypeChange"
                            class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white">
                            <option value="limit-change">Limit change</option>
                            <option value="name-change">Name Change</option>
                            <option value="bm-binding">BM binding</option>
                            <option value="pixel-binding">Pixel binding</option>
                        </select>
                        <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                    </div>
                </div>

                <!-- Parameter Input -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Parameter input :</label>
                    <div @drop="handleFileDrop" @dragover.prevent @dragenter.prevent
                        class="border-2 border-dashed border-blue-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors cursor-pointer"
                        :class="isDragOver ? 'border-blue-500 bg-blue-50' : ''">
                        <div class="flex flex-col items-center space-y-4">
                            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <div>
                                <p class="text-gray-600 font-medium">Click or drag files to this area to import</p>
                                <p class="text-sm text-gray-500 mt-1">(Will overwrite the original data)</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center justify-between mt-3">
                        <p class="text-sm text-gray-500">Please note that the parameter will cover the existing data</p>
                        <button
                            class="flex items-center space-x-2 text-blue-600 hover:text-blue-700 text-sm font-medium">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span>Download the template</span>
                        </button>
                    </div>
                </div>

                <!-- Application Details -->
                <div class="bg-gray-50 rounded-xl p-6">
                    <h3 class="text-lg font-semibold text-gray-900 mb-4">Application Details</h3>
                    <div class="space-y-4">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center space-x-2">
                                <span class="text-sm text-gray-600">Account ID:</span>
                                <span class="font-mono text-sm font-medium">1157513326484527</span>
                                <span class="text-gray-400">achievecollect.shop</span>
                            </div>
                            <button class="flex items-center space-x-1 text-red-600 hover:text-red-700 text-sm">
                                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" clip-rule="evenodd">
                                    </path>
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span>Remove Exceptional Accounts</span>
                            </button>
                        </div>

                        <div class="flex items-center space-x-4">
                            <div class="flex items-center space-x-2">
                                <span class="text-sm text-gray-600">Status:</span>
                                <span
                                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                    <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    ACTIVE
                                </span>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <span class="text-sm text-gray-600">Available balance:</span>
                                <span class="ml-2 text-lg font-bold text-blue-600">$0.01</span>
                            </div>
                            <div>
                                <span class="text-sm text-gray-600">Available Deduction Limit:</span>
                                <span class="ml-2 text-lg font-bold text-blue-600">$0.01</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Dynamic Fields based on Application Type -->
                <div v-if="formData.applicationType === 'name-change'" class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">
                            <span class="text-red-500">*</span> Name
                        </label>
                        <input type="text" v-model="formData.name" placeholder="Please enter"
                            class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            :class="{ 'border-red-300': errors.name }">
                        <p v-if="errors.name" class="mt-1 text-sm text-red-600">{{ errors.name }}</p>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Change</label>
                        <input type="text" v-model="formData.change" placeholder="Please enter"
                            class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    </div>
                </div>

                <div v-else-if="formData.applicationType === 'bm-binding'" class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">BM binding</label>
                        <input type="text" v-model="formData.bmBinding" placeholder="Please add and select"
                            class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">BM unbind</label>
                        <input type="text" v-model="formData.bmUnbind" placeholder="Please add and select"
                            class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    </div>
                </div>

                <div v-else-if="formData.applicationType === 'pixel-binding'" class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Pixel binding</label>
                        <input type="text" v-model="formData.pixelBinding" placeholder="Please add and select"
                            class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Pixel unbinding</label>
                        <input type="text" v-model="formData.pixelUnbinding" placeholder="Please add and select"
                            class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    </div>
                </div>

                <!-- Operation Type (only for limit-change) -->
                <div v-if="formData.applicationType === 'limit-change'">
                    <label class="block text-sm font-medium text-gray-700 mb-3">
                        <span class="text-red-500">*</span> Operation Type
                    </label>
                    <div class="space-y-3">
                        <label class="flex items-center">
                            <input type="radio" v-model="formData.operationType" value="top-up"
                                class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                            <span class="ml-3 text-sm text-gray-700">Top-up</span>
                        </label>
                        <label class="flex items-center">
                            <input type="radio" v-model="formData.operationType" value="deduct"
                                class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                            <span class="ml-3 text-sm text-gray-700">Deduct</span>
                        </label>
                        <label class="flex items-center">
                            <input type="radio" v-model="formData.operationType" value="reset"
                                class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                            <span class="ml-3 text-sm text-gray-700">Reset</span>
                        </label>
                    </div>
                </div>

                <!-- Amount (only for limit-change) -->
                <div v-if="formData.applicationType === 'limit-change'">
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                        <span class="text-red-500">*</span> Amount
                    </label>
                    <input type="number" v-model="formData.amount" placeholder="Please enter"
                        class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        :class="{ 'border-red-300': errors.amount }">
                    <p v-if="errors.amount" class="mt-1 text-sm text-red-600">{{ errors.amount }}</p>
                </div>

                <!-- Currency (only for limit-change) -->
                <div v-if="formData.applicationType === 'limit-change'">
                    <label class="block text-sm font-medium text-gray-700 mb-3">
                        <span class="text-red-500">*</span> Currency
                    </label>
                    <label class="flex items-center">
                        <input type="radio" v-model="formData.currency" value="USD"
                            class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                        <span class="ml-3 text-sm text-gray-700">USD</span>
                    </label>
                </div>
            </div>

            <!-- Footer -->
            <div class="flex items-center justify-end space-x-4 p-6 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
                <button @click="$emit('close')"
                    class="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                    Cancel
                </button>
                <button @click="handleSubmit" :disabled="!isFormValid"
                    class="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
                    Confirm
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import { useWallet } from '@/composables/useWallet'

interface Props {
    initialApplicationType?: string
}

interface FormData {
    applicationType: string
    operationType: string
    amount: string
    currency: string
    name: string
    change: string
    bmBinding: string
    bmUnbind: string
    pixelBinding: string
    pixelUnbinding: string
}

interface Errors { amount?: string; name?: string }

const props = defineProps<Props>()
const emit = defineEmits<{ close: []; submit: [data: FormData] }>()

const wallet = useWallet()

const formData = reactive<FormData>({
    applicationType: props.initialApplicationType || 'limit-change',
    operationType: 'top-up',
    amount: '',
    currency: 'USD',
    name: '',
    change: '',
    bmBinding: '',
    bmUnbind: '',
    pixelBinding: '',
    pixelUnbinding: ''
})

const errors = reactive<Errors>({})
const isDragOver = ref(false)

const isFormValid = computed(() => {
    if (formData.applicationType === 'limit-change') {
        return formData.operationType && formData.amount && formData.currency && !errors.amount
    }
    if (formData.applicationType === 'name-change') {
        return formData.name && !errors.name
    }
    return true
})

const validateForm = () => {
    errors.amount = ''
    errors.name = ''
    if (formData.applicationType === 'limit-change') {
        const val = parseFloat(formData.amount)
        if (!formData.amount) { errors.amount = 'Amount is required'; return false }
        if (!Number.isFinite(val) || val <= 0) { errors.amount = 'Amount must be greater than 0'; return false }
    }
    if (formData.applicationType === 'name-change') {
        if (!formData.name) { errors.name = 'Name is required'; return false }
    }
    return true
}

const handleFileDrop = (event: DragEvent) => {
    event.preventDefault()
    isDragOver.value = false
    const files = event.dataTransfer?.files
    if (files && files.length > 0) {
        console.log('Files dropped:', files)
    }
}

const onApplicationTypeChange = () => {
    formData.operationType = 'top-up'
    formData.amount = ''
    formData.name = ''
    formData.change = ''
    formData.bmBinding = ''
    formData.bmUnbind = ''
    formData.pixelBinding = ''
    formData.pixelUnbinding = ''
    errors.amount = ''
    errors.name = ''
}

const handleSubmit = () => {
    if (!validateForm()) return
    if (formData.applicationType === 'limit-change') {
        const val = parseFloat(formData.amount)
        const now = new Date()
        const log = {
            id: `${now.getTime()}`,
            time: now.toLocaleString(),
            type: (formData.operationType as 'top-up' | 'deduct' | 'reset'),
            amount: val,
            balance: 0
        }
        if (formData.operationType === 'top-up') wallet.deduct(val)
        if (formData.operationType === 'deduct') wallet.add(val)
        // reset: no wallet impact
        log.balance = wallet.getBalance()
        try {
            const raw = localStorage.getItem('walletLogs')
            const arr = raw ? JSON.parse(raw) : []
            arr.unshift(log)
            localStorage.setItem('walletLogs', JSON.stringify(arr.slice(0, 100)))
        } catch { }
    }
    emit('submit', { ...formData })
}
</script>
