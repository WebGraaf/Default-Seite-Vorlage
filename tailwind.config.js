/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Brand
        primary: {
          50:'#FFF6EE',100:'#FFEBDC',200:'#FFD4B3',300:'#FFBB85',400:'#FF9E4F',
          500:'#FF7A00',600:'#E66900',700:'#C25600',800:'#9C4600',900:'#7A3800',950:'#3F1D00',
          DEFAULT:'#FF7A00',
        },
        // Neutral/Secondary scale (Slate-like)
        secondary: {
          50:'#f8fafc',100:'#f1f5f9',200:'#e2e8f0',300:'#cbd5e1',400:'#94a3b8',
          500:'#64748b',600:'#475569',700:'#334155',800:'#1e293b',900:'#0f172a',950:'#020617',
          DEFAULT:'#334155',
        },

        // ===== Text =====
        'text-heading':'#111827',
        'text-body':'#4B5563',
        'text-muted':'#6B7280',
        'text-placeholder':'#9CA3AF',
        'text-link':'#FF7A00',
        'text-link-hover':'#E66900',

        // ===== Surfaces =====
        'page-bg':'#F0F8FF',
        'card-bg':'#FFFFFF',
        'card-fg':'#111827',
        'card-border':'#E5E7EB',
        'card-tint':'#FFF3E6',
        'elevated-bg':'#FAFAFB',
        'overlay':'rgba(17,24,39,0.6)',

        // ===== Borders =====
        'border-default':'#E5E7EB',
        'border-divider':'#E4E4E7',
        'border-focus':'#FF7A00',

        // ===== Form Fields =====
        'field-bg':'#FFFFFF',
        'field-fg':'#171717',
        'field-border':'#D4D4D4',
        'field-placeholder':'#A3A3A3',
        'field-focus-ring':'#FF9E4F',

        // ===== Brand (base for components; no status colors) =====
        'brand-100':'#FFEBDC',
        'brand-400':'#FF9E4F',
        'brand-500':'#FF7A00',
        'brand-600':'#E66900',

        // ===== Buttons =====
        'btn-solid-bg':'#FF7A00',
        'btn-solid-fg':'#FFFFFF',
        'btn-solid-hover':'#E66900',
        'btn-outline-border':'#FF7A00',
        'btn-outline-fg':'#E66900',
        'btn-ghost-fg':'#E66900',

        // ===== Tables =====
        'table-bg':'#FFFFFF',
        'table-fg':'#111827',
        'table-border':'#E5E7EB',
        'table-row-hover':'#F8FAFC',
        'table-header-bg':'#F1F5F9',

        // ===== Header =====
        'header-bg':'#FFFFFF',
        'header-fg':'#111827',
        'header-border':'#E5E7EB',
        'header-link':'#E66900',
        'header-link-hover':'#FF7A00',
        'header-btn-solid-bg':'#FF7A00',
        'header-btn-solid-fg':'#FFFFFF',
        'header-btn-solid-hover':'#E66900',
        'header-btn-outline-border':'#FF7A00',
        'header-btn-outline-fg':'#E66900',

        // ===== Legacy/Additional =====
        'bg-page':'#F4F4F5',
        'bg-card':'#FFFFFF',
        'bg-elevated':'#FAFAFB',
        'bg-tint':'#FFF3E6',
        'bg-overlay':'rgba(17,24,39,0.6)',
        'input-bg':'#FFFFFF',
        'input-border':'#D4D4D4',
        'input-border-focus':'#FF7A00',
        'input-text':'#171717',
        'input-placeholder':'#A3A3A3',
        'status-success':'#16A34A',
        'status-warning':'#F59E0B',
        'status-error':'#EF4444',
        'status-info':'#2563EB',
        'hover-bg':'#F5F5F5',
        'active-bg':'#E5E5E5',
        'white':'#FFFFFF',
        'black':'#000000',
        'header-text':'#FFFFFF',
      },
    },
  },
  plugins: [],
};
