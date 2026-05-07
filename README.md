<div align="center">
  <img src="frontend/src/assets/logo_official.svg" alt="BYND Official Logo" width="250"/>
</div>

# BYND (Sovereign Data Sync Engine)

## 📌 Mandatory Evaluation Links
- [**Live Deployed Project**](https://bynd-omega.vercel.app)
- [**Backend API**](https://bynd-k3w4.onrender.com)
- [**Postman Documentation**](https://documenter.getpostman.com/view/50841514/2sBXqMGyrZ)
- [**Figma Design**](https://www.figma.com/file/bynd-design)
- [**YouTube Demo Video**](#) *(Pending)*

**BYND** (Go Beyond Manual Data Entry) is the industry-leading, no-code bidirectional sync engine designed for the modern enterprise. We connect Excel, CRM, and Invoicing ecosystems with cryptographic precision, enabling global SMBs to reclaim their time and ensure 100% data parity.

---

## The Challenge

Global SMBs lose **16+ hours per week** to manual data entry between disconnected tools:

- **Excel/Sheets** → manually re-enter into CRM → re-enter into invoicing
- **Version conflicts** when multiple team members edit different copies
- **No bidirectional sync** tools exist that are affordable and easy enough for non-technical teams
- **Errors compound** — one mistake in one system propagates everywhere
- **Compliance complexity** — different countries have different tax rules, invoice requirements

### The Old Way: A Day in the Life

| Time | Action | Result / Bottleneck |
| :--- | :--- | :--- |
| **8:00 AM** | Export Excel sheet & manually create 247 contacts in HubSpot | High manual effort, error-prone (12 incorrect emails found) |
| **11:30 AM** | Export updated contacts to Excel, cross-reference with Xero | Data fragmentation, conflicts found requiring investigation |
| **2:00 PM** | Update Xero invoices manually based on HubSpot changes | Heavy QA required; high financial risk for simple mistakes |
| **4:30 PM** | Export Xero status back to Excel & share with team | Delayed visibility, version control issues |
| **TOTAL** | **8.5 Hours of Data Entry** | **Zero time spent on actual productive work** |

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

| Time | Action | Result / Benefit |
| :--- | :--- | :--- |
| **8:00 AM** | Click "New Sync", select tools, approve AI field mapping | Setup completed in under 5 minutes with zero code |
| **8:15 AM** | First sync runs automatically (247 contacts created) | System flags 12 conflicts; resolved via UI in 2 minutes |
| **8:30 AM** | All systems in perfect parity | Team focuses on core work and meetings |
| **12:00 PM** | Sales team updates 8 records in Excel | BYND syncs changes instantly in the background |
| **4:30 PM** | Weekly report generated (1,847 records synced) | **100% accuracy, zero errors, full audit trail** |
| **TOTAL** | **30 Minutes Setup** | **4+ hours of productive work reclaimed daily** |

---

## Impact

| Metric | Before BYND | After BYND |
| :--- | :--- | :--- |
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
| :--- | :--- | :--- |
| **React** | 18.x | UI framework |
| **Vite** | 5.x | Build tooling |
| **Tailwind CSS** | 3.x | Styling |
| **shadcn/ui** | latest | Component library |
| **Redux Toolkit** | 2.x | State management |
| **React Router** | 6.x | Routing |
| **React Hook Form**| 7.x | Form handling |
| **Axios** | 1.x | HTTP client |
| **Framer Motion** | 11.x | Animations |
| **Phosphor Icons** | latest | Icon set |
| **Recharts** | 2.x | Charts |
| **React Flow** | 11.x | Flow diagrams |
| **dnd-kit** | 6.x | Drag and drop |
| **Spline** | 3.x | 3D graphics |
| **Formik + Yup** | latest| Form validation |

### Integrations

| Integration | Purpose |
| :--- | :--- |
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
             │  HTTPS                │
             ▼                       ▼
┌────────────────────────────────────────────────────────────────────────────────┐
│                              BYND Backend (API)                                │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐        │
│  │   Auth API   │  │  Sync Engine │  │  AI/ML Core  │  │  Webhooks    │        │
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘        │
│                                                                                │
│  Integrations: HubSpot │ Salesforce │ QuickBooks │ Xero │ Google Sheets        │
└────────────────────────────────────────────────────────────────────────────────┘
```

---

## Folder Structure

### Backend (MVC Pattern)
```
backend/
├── src/
│   ├── config/          # DB connection & environment config
│   ├── controllers/     # Business logic & request handling
│   ├── middleware/      # Auth & Error handling middleware
│   ├── models/          # Mongoose schemas (User, Sync, etc.)
│   ├── routes/          # API route definitions
│   ├── utils/           # Validation schemas & helper functions
│   └── server.js        # Entry point
├── .env                 # Environment variables
└── package.json         # Backend dependencies
```

### Frontend
```
frontend/
├── public/              # Static assets (robots.txt, sitemap.xml)
├── src/
│   ├── assets/          # Images, logos, animations
│   ├── components/      # UI components (Navbar, Footer, SEO)
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Route-level components (Landing, Auth, Pricing)
│   ├── services/        # API communication logic
│   ├── store/           # Redux state management
│   ├── theme/           # UI theme configurations
│   ├── utils/           # Helper functions
│   ├── App.jsx          # Main application component
│   └── main.jsx         # Entry point
```

---

## Project Screenshots

### 1. Sovereign Node Dashboard (Hero)
*(Drag and drop hero.png from your Desktop here on GitHub.com)*

### 2. Secure Node Authentication
*(Drag and drop auth.png from your Desktop here on GitHub.com)*

### 3. Active Sync Protocols
*(Drag and drop contracts.png from your Desktop here on GitHub.com)*

### 4. Historical Sync Ledger
*(Drag and drop ledger.png from your Desktop here on GitHub.com)*


---

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+
- MongoDB (Local or Atlas)

### 1. Backend Setup
```bash
cd backend
npm install
# Create .env with MONGO_URI, JWT_SECRET, PORT
npm run dev
```

### 2. Frontend Setup
```bash
cd frontend
npm install
# Create .env with VITE_API_BASE_URL
npm run dev
```

The app will be available at `http://localhost:5173`

---

## Design System

### Color Palette

| Token | Hex | Usage |
| :--- | :--- | :--- |
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