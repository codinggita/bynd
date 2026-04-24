# BYND – Go Beyond Manual Data Entry

![BYND Logo](https://via.placeholder.com/200x50/0A1929/00E5FF?text=BYND)

**Design Assets**: [Figma Design File](https://www.figma.com/design/Nw5DxsHzT2Sw9KxEZtU3qe/BYND?node-id=1-3205&t=qsRvCo8TgcB1sM5k-1)

**BYND** is a no-code bidirectional sync engine that connects Excel, CRM, and Invoicing systems for global SMBs. Stop manually copying data between spreadsheets, HubSpot, QuickBooks, and Xero — let BYND handle the sync while you focus on growing your business.

---

## The Challenge

Global SMBs lose **16+ hours per week** to manual data entry between disconnected tools:

- **Excel/Sheets** → manually re-enter into CRM → re-enter into invoicing
- **Version conflicts** when multiple team members edit different copies
- **No bidirectional sync** tools exist that are affordable and easy enough for non-technical teams
- **Errors compound** — one mistake in one system propagates everywhere
- **Compliance complexity** — different countries have different tax rules, invoice requirements

### The Old Way: A Day in the Life

```
┌─────────────────────────────────────────────────────────────────┐
│  8:00 AM  │  Export Excel sheet with 247 rows                   │
│           │  Open HubSpot → Create 247 contacts manually        │
│           │  Realize 12 emails were wrong → Fix each one         │
│           │                                                        │
│  11:30 AM │  Export updated HubSpot contacts to Excel            │
│           │  Cross-reference with Xero for invoice data           │
│           │  Realize 3 records conflict → Start investigating    │
│           │                                                        │
│  2:00 PM  │  Update Xero invoices based on HubSpot changes      │
│           │  QA everything because one mistake costs $400         │
│           │                                                        │
│  4:30 PM  │  Export Xero status changes back to Excel            │
│           │  Share updated sheet with team                       │
│           │                                                        │
│  TOTAL:   │  8.5 hours of data entry. Zero time on actual work.   │
└─────────────────────────────────────────────────────────────────┘
```

---

## The Solution

**BYND** provides:

1. **No-Code Setup** — Connect your tools in minutes, not months
2. **Bidirectional Sync** — Changes flow both ways automatically
3. **AI-Powered Field Mapping** — BYND learns your data structure
4. **Conflict Resolution Engine** — Smart handling when data disagrees
5. **Automatic Global Tax Compliance** — Invoicing that knows the rules
6. **Real-Time Dashboard** — Full visibility into every sync operation

### The New Way: BYND Sync

```
┌─────────────────────────────────────────────────────────────────┐
│  8:00 AM  │  Click "New Sync" → Select Excel & HubSpot          │
│           │  BYND AI suggests field mappings → Click "Approve"    │
│           │                                                        │
│  8:15 AM  │  First sync runs automatically                       │
│           │  247 contacts created in HubSpot                      │
│           │  12 conflicts flagged → Review in 2 minutes           │
│           │                                                        │
│  8:30 AM  │  All systems in sync. Go to meetings.                │
│           │                                                        │
│  12:00 PM │  Sales updates 8 records in Excel                    │
│           │  BYND syncs automatically in background               │
│           │                                                        │
│  4:30 PM  │  Weekly report: 1,847 records synced                 │
│           │  Zero errors. Full audit trail.                      │
│           │                                                        │
│  TOTAL:   │  30 minutes of setup. 4 hours of work reclaimed.      │
└─────────────────────────────────────────────────────────────────┘
```

---

## Impact

| Metric | Before BYND | After BYND |
|--------|-------------|------------|
| Weekly data entry time | 16 hours | 4 hours |
| Data entry errors | 12-15 per week | 0 |
| Time to reconcile conflicts | 3+ hours | 15 minutes |
| Confidence in data accuracy | 65% | 99% |
| Cost of manual sync tools | $800-2000/mo | $49/mo |

---

## Features

### Core Sync Engine
- [x] **Excel & Google Sheets Integration** — Read/write XLSX and Sheets files
- [x] **CRM Connectors** — HubSpot, Salesforce integration
- [x] **Invoicing Systems** — QuickBooks, Xero compatibility
- [x] **Bidirectional Sync** — Real-time two-way data flow
- [x] **Unidirectional Sync** — One-way when you need it
- [x] **Scheduling** — Automated sync at set intervals
- [x] **Manual Sync** — Trigger sync on-demand

### AI & Intelligence
- [x] **Smart Field Mapping** — AI suggests mappings between systems
- [x] **Auto-Merge** — Automatically merge records with 85%+ confidence
- [x] **Duplicate Detection** — Identify potential duplicates before sync
- [x] **Change Tracking** — Full audit of what changed, when, where

### Conflict Resolution
- [x] **Visual Conflict Queue** — Side-by-side comparison interface
- [x] **AI Recommendations** — BYND suggests the correct value
- [x] **Bulk Resolution** — Handle multiple conflicts at once
- [x] **Keep Source Priority** — Always prefer Excel or CRM value

### Compliance & Security
- [x] **Global Tax Profiles** — US, EU, UK, AU, CA tax rules built-in
- [x] **Invoice Validation** — Ensure invoices meet local requirements
- [x] **SOC 2 Type II** — Enterprise-grade security
- [x] **Data Residency** — Choose where your data lives (US, EU, APAC)
- [x] **Encryption at Rest** — AES-256 encryption
- [x] **Role-Based Access** — Control who can view/edit/sync

### Developer & Enterprise
- [x] **REST API** — Full API access for custom integrations
- [x] **Webhooks** — Real-time event notifications
- [x] **Custom Transformers** — JavaScript functions for data manipulation
- [x] **Enterprise Connectors** — SAP, Oracle, NetSuite (custom)

---

## Tech Stack

### Frontend Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.x | UI framework |
| **Vite** | 5.x | Build tooling |
| **Tailwind CSS** | 3.x | Styling |
| **shadcn/ui** | latest | Component library |
| **Redux Toolkit** | 2.x | State management |
| **React Router** | 6.x | Routing |
| **React Hook Form** | 7.x | Form handling |
| **Axios** | 1.x | HTTP client |
| **Framer Motion** | 11.x | Animations |
| **Phosphor Icons** | latest | Icon set |
| **Recharts** | 2.x | Charts |
| **React Flow** | 11.x | Flow diagrams |
| **dnd-kit** | 6.x | Drag and drop |
| **Spline** | 3.x | 3D graphics |
| **Formik + Yup** | - | Form validation |

### Integrations

| Integration | Purpose |
|-------------|---------|
| **Google OAuth** | Authentication |
| **Google Sheets API** | Sheets connectivity |
| **HubSpot API** | CRM sync |
| **Salesforce API** | CRM sync |
| **QuickBooks API** | Invoicing sync |
| **Xero API** | Invoicing sync |
| **Splide** | Carousel component |

---

## Architecture

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                              BYND Frontend                                    │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│  ┌─────────────────────────────────────────────────────────────────────────┐ │
│  │                           Browser Client                                 │ │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐    │ │
│  │  │   Landing    │  │     Auth     │  │   Onboard    │  │    App       │    │ │
│  │  │    Page      │  │   Flow        │  │   Wizard      │  │   Shell      │    │ │
│  │  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘    │ │
│  │         │              │                │                 │           │ │
│  │         └──────────────┴────────────────┴─────────────────┘           │ │
│  │                                │                                         │ │
│  │                    ┌───────────▼───────────┐                           │ │
│  │                    │     React Router      │                           │ │
│  │                    │   (Protected Routes)   │                           │ │
│  │                    └───────────┬───────────┘                           │ │
│  │                                │                                         │ │
│  │         ┌─────────────────────┼─────────────────────┐                 │ │
│  │         │                     │                     │                 │ │
│  │  ┌──────▼──────┐      ┌────────▼────────┐     ┌──────▼──────┐         │ │
│  │  │   Redux     │      │    Services     │     │   Shared    │         │ │
│  │  │   Store     │◄────►│    (API.js)     │◄───►│  Components │         │ │
│  │  └──────┬──────┘      └────────┬────────┘     └─────────────┘         │ │
│  │         │                      │                                        │ │
│  │         │              ┌────────▼────────┐                              │ │
│  │         │              │     Axios       │                              │ │
│  │         │              │   Interceptors  │                              │ │
│  │         │              └────────┬────────┘                              │ │
│  └─────────┼───────────────────────┼──────────────────────────────────────┘ │
│            │                       │                                           │
└────────────┼───────────────────────┼───────────────────────────────────────────┘
             │                       │
             │  HTTPS               │
             ▼                       ▼
┌────────────────────────────────────────────────────────────────────────────────┐
│                              BYND Backend (External)                            │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐        │
│  │   Auth API   │  │  Sync Engine │  │  AI/ML Core  │  │  Webhooks    │        │
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘        │
│                                                                                │
│  Integrations: HubSpot │ Salesforce │ QuickBooks │ Xero │ Google Sheets        │
└────────────────────────────────────────────────────────────────────────────────┘
```

### Frontend Architecture Layers

```
┌─────────────────────────────────────────┐
│           Pages / Routes                │  ← Route-level components
├─────────────────────────────────────────┤
│         Shared Components              │  ← Reusable UI (Cards, Modals)
├─────────────────────────────────────────┤
│          Layout Components             │  ← Navbar, Sidebar, Footer
├─────────────────────────────────────────┤
│           UI Primitives                │  ← shadcn/ui base components
├─────────────────────────────────────────┤
│             Services                    │  ← API calls, business logic
├─────────────────────────────────────────┤
│             State                       │  ← Redux slices, local state
├─────────────────────────────────────────┤
│           Utilities                     │  ← Helpers, formatters
└─────────────────────────────────────────┘
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+
- Git

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=https://api.bynd.io/v1
VITE_GOOGLE_CLIENT_ID=your_google_client_id
VITE_HUBSPOT_CLIENT_ID=your_hubspot_client_id
VITE_SPLINE_SCENE_URL=https://prod.spline.design/your-scene
```

### Installation

```bash
# Clone the repository
git clone https://github.com/bynd/bynd-frontend.git
cd bynd-frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

---

## Folder Structure

```
src/
├── assets/              # Static assets, Lottie animations, images
├── components/
│   ├── layout/          # App layout components
│   │   ├── Navbar.jsx       # Public navigation
│   │   ├── AppSidebar.jsx   # Dashboard sidebar
│   │   ├── AppTopBar.jsx    # Top bar with user info
│   │   └── Footer.jsx      # Public footer
│   ├── shared/          # Reusable business components
│   │   ├── KpiCard.jsx         # Dashboard KPI cards
│   │   ├── ConflictCard.jsx    # Conflict resolution card
│   │   ├── EntityMatchCard.jsx # Entity matching card
│   │   ├── EmptyState.jsx      # Empty state placeholder
│   │   └── Loader.jsx          # Loading spinner
│   └── ui/              # shadcn/ui component overrides
│       ├── Button.jsx
│       ├── Input.jsx
│       ├── Dialog.jsx
│       ├── Table.jsx
│       ├── Tabs.jsx
│       ├── Select.jsx
│       └── Badge.jsx
├── hooks/               # Custom React hooks
│   ├── useAuth.js           # Authentication hook
│   ├── useDebounce.js       # Debounce utility
│   ├── useTheme.js          # Theme management
│   ├── useFetch.js          # Data fetching
│   └── useToggle.js         # Toggle state
├── pages/               # Route-level page components
│   ├── Landing.jsx          # Marketing landing page
│   ├── Pricing.jsx          # Pricing page
│   ├── Auth.jsx             # Authentication (login/signup)
│   ├── ForgotPassword.jsx   # Password reset
│   ├── NotFound.jsx         # 404 page
│   ├── Onboarding/          # Onboarding wizard
│   │   ├── ConnectStep.jsx      # Step 1: Connect sources
│   │   ├── MapStep.jsx          # Step 2: Field mapping
│   │   └── SyncStep.jsx         # Step 3: Sync direction
│   ├── Dashboard.jsx        # Main dashboard
│   ├── SyncContracts.jsx    # Sync contract management
│   ├── ConflictQueue.jsx    # Conflict resolution
│   ├── PendingEntities.jsx  # Pending entity matches
│   ├── JobHistory.jsx       # Sync job history/logs
│   └── Settings.jsx         # Workspace settings
├── routes/               # Routing configuration
│   ├── AppRouter.jsx        # Main router with lazy loading
│   └── ProtectedRoute.jsx   # Auth guard component
├── services/             # API and business services
│   ├── api.js              # Axios instance with interceptors
│   ├── authService.js      # Authentication API calls
│   └── syncService.js      # Sync operations API
├── store/                # Redux store configuration
│   ├── index.js            # Store setup
│   ├── authSlice.js        # Auth state management
│   └── uiSlice.js          # UI state management
├── utils/                # Utility functions
│   ├── storage.js          # localStorage helpers
│   └── formatters.js       # Date, currency formatters
├── App.jsx               # Root component
└── main.jsx              # Entry point
```

---

## Design System

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `color-bg-page` | `#F8FAFC` | Page background |
| `color-surface` | `#FFFFFF` | Cards, modals |
| `color-text-primary` | `#0F172A` | Headings |
| `color-text-secondary` | `#475569` | Body text |
| `color-brand-deep` | `#0A1929` | Primary buttons |
| `color-brand-accent` | `#00E5FF` | Active states |
| `color-success` | `#10B981` | Success states |
| `color-warning` | `#F59E0B` | Warning states |
| `color-error` | `#EF4444` | Error states |
| `color-border` | `#E2E8F0` | Borders |

### Typography

- **Primary**: Inter (400, 500, 600, 700)
- **Display**: Manrope Bold (700) — Logo only

### Spacing

Base unit: 8px (Tailwind spacing scale)

- Cards: 24px padding
- Form fields: 16px gap
- Sections: 48px margin bottom

### Shadows

- `shadow-sm`: Cards
- `shadow-2xl`: Modals

### Border Radius

- Cards: 12px (rounded-xl)
- Inputs/Buttons: 8px (rounded-lg)
- Modals: 16px (rounded-2xl)

---

## Contributing

We welcome contributions! Please read our contributing guidelines before submitting PRs.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

Copyright © 2024 BYND Technologies. All rights reserved.

---

## Support

- **Documentation**: https://docs.bynd.io
- **Email**: support@bynd.io
- **Status**: https://status.bynd.io

---

*BYND — Go Beyond Manual Data Entry*