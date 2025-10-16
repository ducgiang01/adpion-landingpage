export function useWallet() {
    const STORAGE_KEY = 'walletBalance';

    const notify = () => {
        try {
            window.dispatchEvent(new CustomEvent('wallet:updated'));
        } catch { }
    };

    const parseNumber = (value: string | null): number => {
        const num = value ? parseFloat(value) : 0;
        return isNaN(num) ? 0 : num;
    };

    const getBalance = (): number => {
        return parseNumber(localStorage.getItem(STORAGE_KEY));
    };

    const setBalance = (amount: number): void => {
        const safeAmount = Number.isFinite(amount) ? Math.max(0, amount) : 0;
        localStorage.setItem(STORAGE_KEY, safeAmount.toFixed(2));
        notify();
    };

    const add = (amount: number): void => {
        const current = getBalance();
        setBalance(current + Math.max(0, amount));
    };

    const deduct = (amount: number): void => {
        const current = getBalance();
        setBalance(Math.max(0, current - Math.max(0, amount)));
    };

    const reset = (amount: number): void => {
        setBalance(Math.max(0, amount));
    };

    return { getBalance, setBalance, add, deduct, reset };
}
