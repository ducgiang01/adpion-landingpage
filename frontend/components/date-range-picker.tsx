/**
 * Date Range Picker
 * Preset date ranges for dashboard filters
 */

'use client';

import { useState } from 'react';

export type DateRangePreset = 'yesterday' | '7d' | '28d' | '3m' | 'custom';

interface DateRange {
  start: Date;
  end: Date;
  preset: DateRangePreset;
}

interface DateRangePickerProps {
  onChange: (range: DateRange) => void;
  value?: DateRange;
}

export function DateRangePicker({ onChange, value }: DateRangePickerProps) {
  const [selectedPreset, setSelectedPreset] = useState<DateRangePreset>(value?.preset || '7d');

  const presets: { label: string; value: DateRangePreset }[] = [
    { label: 'Yesterday', value: 'yesterday' },
    { label: 'Last 7 Days', value: '7d' },
    { label: 'Last 28 Days', value: '28d' },
    { label: 'Last 3 Months', value: '3m' },
  ];

  const getDateRange = (preset: DateRangePreset): DateRange => {
    const end = new Date();
    const start = new Date();

    switch (preset) {
      case 'yesterday':
        start.setDate(end.getDate() - 1);
        end.setDate(end.getDate() - 1);
        break;
      case '7d':
        start.setDate(end.getDate() - 7);
        break;
      case '28d':
        start.setDate(end.getDate() - 28);
        break;
      case '3m':
        start.setMonth(end.getMonth() - 3);
        break;
      case 'custom':
        // Custom date range
        break;
    }

    return { start, end, preset };
  };

  const handlePresetClick = (preset: DateRangePreset) => {
    setSelectedPreset(preset);
    const range = getDateRange(preset);
    onChange(range);
  };

  return (
    <div className="flex items-center space-x-2">
      {presets.map((preset) => (
        <button
          key={preset.value}
          onClick={() => handlePresetClick(preset.value)}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
            selectedPreset === preset.value
              ? 'bg-primary-600 text-white'
              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
          }`}
        >
          {preset.label}
        </button>
      ))}
    </div>
  );
}

/**
 * Format date range for API
 */
export function formatDateRange(range: DateRange): { start_time: string; end_time: string } {
  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0]; // YYYY-MM-DD
  };

  return {
    start_time: formatDate(range.start),
    end_time: formatDate(range.end),
  };
}

/**
 * Format dash_time for API (used in some endpoints)
 */
export function formatDashTime(range: DateRange): string {
  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0]; // YYYY-MM-DD
  };

  return `${formatDate(range.start)},${formatDate(range.end)}`;
}


