// ----------------------------------------------------------------------

export function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = '/auth';
export const MAIN_DASHBOARD = '/main';
const ROOTS_DASHBOARD = '/dashboard';
export const ROOTS_DIAGNOSIS = '/evaluations';
export const ROOTS_REPORT = '/report';
export const ROOTS_MATERIAL = '/material';
// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
  register: path(ROOTS_AUTH, '/register'),
  loginUnprotected: path(ROOTS_AUTH, '/login-unprotected'),
  registerUnprotected: path(ROOTS_AUTH, '/register-unprotected'),
  verify: path(ROOTS_AUTH, '/verify'),
  resetPassword: path(ROOTS_AUTH, '/reset-password'),
  newPassword: path(ROOTS_AUTH, '/new-password'),
};

export const PATH_PAGE = {
  comingSoon: '/coming-soon',
  maintenance: '/maintenance',
  pricing: '/pricing',
  payment: '/payment',
  about: '/about-us',
  contact: '/contact-us',
  faqs: '/faqs',
  page403: '/403',
  page404: '/404',
  page500: '/500',
  components: '/components',
  legacyDashboard: 'https://solution.nearu.io/',
  legacyImport: 'https://solution.nearu.io/important/issue',
  legacyImportNew: 'https://solution.nearu.io/important/select_issue',
  legacyReport: 'https://solution.nearu.io/report',
  legacyReportNew: 'https://solution.nearu.io/report/new_report',
  legacySupply: 'https://solution.nearu.io/supply/supply_management',
  legacySupplyNew: 'https://solution.nearu.io/supply/poll_edit',
  startupDoor: '/startup/startup-door',
  startupDiagnosis: '/startup/startup',
  startupDashboard: '/startup/startup-dashboard',
  userAccountBilling: '/main/user/account/account-billing',
  userAccountPaymentMethod: '/main/user/account/payment-method',
  userAccount: '/main/user/account',
  evalDashboard: '/main',
};

export const PATH_DIAGNOSIS = {
  root: ROOTS_DIAGNOSIS,
  evalForm: path(ROOTS_DIAGNOSIS, '/form'),
  evalList: path(ROOTS_DIAGNOSIS, '/list'),
  evalDashboard: path(ROOTS_DIAGNOSIS, '/dashboard'),
};

export const PATH_REPORT = {
  list: path(ROOTS_REPORT, `/list`),
  add: path(ROOTS_REPORT, '/add'),
  detail: path(ROOTS_REPORT, '/details'),
  user: path(ROOTS_REPORT, '/user'),
  attachments: path(ROOTS_REPORT, '/attachments'),
  design: path(ROOTS_REPORT, '/design'),
  details: path(ROOTS_REPORT, '/details'),
  contents: path(ROOTS_REPORT, '/contents'),
  collaborator: path(ROOTS_REPORT, '/collaborator'),
  approver: path(ROOTS_REPORT, '/approver'),
  verification: {
    main: path(ROOTS_REPORT, '/verification'),
    apply: {
      main: path(ROOTS_REPORT, '/verification/apply'),
    },
    opinion: {
      main: path(ROOTS_REPORT, '/verification/opinion'),
      progress: path(ROOTS_REPORT, '/verification/opinion/progress'),
      confirm: path(ROOTS_REPORT, '/verification/opinion/confirm'),
    },
    finalConfirm: {
      main: path(ROOTS_REPORT, '/verification/final-confirm'),
    },
  },
  eval: {
    main: path(ROOTS_REPORT, '/eval'),
    select: path(ROOTS_REPORT, '/eval/select'),
  },
  deploy: {
    main: path(ROOTS_REPORT, '/deploy'),
    kor: path(ROOTS_REPORT, '/deploy/kor'),
    eng: path(ROOTS_REPORT, '/deploy/eng'),
  },
  english: {
    main: path(ROOTS_REPORT, '/english'),
    contents: path(ROOTS_REPORT, '/english/contents'),
    certification: path(ROOTS_REPORT, '/english/certification'),
  },
  public: {
    main: path(ROOTS_REPORT, '/public'),
    kor: path(ROOTS_REPORT, '/public/kor'),
    eng: path(ROOTS_REPORT, '/public/eng'),
  },
};

export const PATH_MATERIAL = {
  root: ROOTS_MATERIAL,
  list: path(ROOTS_MATERIAL, `/list`),
  new: path(ROOTS_MATERIAL, '/new'),
  detail: path(ROOTS_MATERIAL, '/details'),
  sendMail: path(ROOTS_MATERIAL, '/send-mail'),
  selectStakeholder: path(ROOTS_MATERIAL, '/select-stakeholder'),
  selectIssue: path(ROOTS_MATERIAL, '/select-issue'),
  issueReply: path(ROOTS_MATERIAL, '/issue-reply'),
  issueTerm: path(ROOTS_MATERIAL, '/issue-term'),
  dashboard: path(ROOTS_MATERIAL, '/dashboard'),
  manageStakeholder: path(ROOTS_MATERIAL, '/stakeholder'),
  materialList: path(ROOTS_MATERIAL, '/list'),
  materialIssueComplete: path(ROOTS_MATERIAL, '/reply-complete'),
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  kanban: path(ROOTS_DASHBOARD, '/kanban'),
  calendar: path(ROOTS_DASHBOARD, '/calendar'),
  fileManager: path(ROOTS_DASHBOARD, '/files-manager'),
  permissionDenied: path(ROOTS_DASHBOARD, '/permission-denied'),
  blank: path(ROOTS_DASHBOARD, '/blank'),
  general: {
    app: path(ROOTS_DASHBOARD, '/app'),
    ecommerce: path(ROOTS_DASHBOARD, '/ecommerce'),
    analytics: path(ROOTS_DASHBOARD, '/analytics'),
    banking: path(ROOTS_DASHBOARD, '/banking'),
    booking: path(ROOTS_DASHBOARD, '/booking'),
    file: path(ROOTS_DASHBOARD, '/file'),
  },
  mail: {
    root: path(ROOTS_DASHBOARD, '/mail'),
    all: path(ROOTS_DASHBOARD, '/mail/all'),
  },
  chat: {
    root: path(ROOTS_DASHBOARD, '/chat'),
    new: path(ROOTS_DASHBOARD, '/chat/new'),
    view: (name: string) => path(ROOTS_DASHBOARD, `/chat/${name}`),
  },
  user: {
    root: path(ROOTS_DASHBOARD, '/user'),
    new: path(ROOTS_DASHBOARD, '/user/new'),
    list: path(ROOTS_DASHBOARD, '/user/list'),
    cards: path(ROOTS_DASHBOARD, '/user/cards'),
    profile: path(ROOTS_DASHBOARD, '/user/profile'),
    account: path(ROOTS_DASHBOARD, '/user/account'),
    edit: (name: string) => path(ROOTS_DASHBOARD, `/user/${name}/edit`),
    demoEdit: path(ROOTS_DASHBOARD, `/user/reece-chung/edit`),
  },
  eCommerce: {
    root: path(ROOTS_DASHBOARD, '/e-commerce'),
    shop: path(ROOTS_DASHBOARD, '/e-commerce/shop'),
    list: path(ROOTS_DASHBOARD, '/e-commerce/list'),
    checkout: path(ROOTS_DASHBOARD, '/e-commerce/checkout'),
    new: path(ROOTS_DASHBOARD, '/e-commerce/product/new'),
    view: (name: string) => path(ROOTS_DASHBOARD, `/e-commerce/product/${name}`),
    edit: (name: string) => path(ROOTS_DASHBOARD, `/e-commerce/product/${name}/edit`),
    demoEdit: path(ROOTS_DASHBOARD, '/e-commerce/product/nike-blazer-low-77-vintage/edit'),
    demoView: path(ROOTS_DASHBOARD, '/e-commerce/product/nike-air-force-1-ndestrukt'),
  },
  invoice: {
    root: path(ROOTS_DASHBOARD, '/invoice'),
    list: path(ROOTS_DASHBOARD, '/invoice/list'),
    new: path(ROOTS_DASHBOARD, '/invoice/new'),
    view: (id: string) => path(ROOTS_DASHBOARD, `/invoice/${id}`),
    edit: (id: string) => path(ROOTS_DASHBOARD, `/invoice/${id}/edit`),
    demoEdit: path(ROOTS_DASHBOARD, '/invoice/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1/edit'),
    demoView: path(ROOTS_DASHBOARD, '/invoice/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5'),
  },
  blog: {
    root: path(ROOTS_DASHBOARD, '/blog'),
    posts: path(ROOTS_DASHBOARD, '/blog/posts'),
    new: path(ROOTS_DASHBOARD, '/blog/new'),
    view: (title: string) => path(ROOTS_DASHBOARD, `/blog/post/${title}`),
    demoView: path(ROOTS_DASHBOARD, '/blog/post/apply-these-7-secret-techniques-to-improve-event'),
  },
};

export const PATH_DOCS = {
  root: 'https://docs.minimals.cc',
  changelog: 'https://docs.minimals.cc/changelog',
};

export const PATH_ZONE_ON_STORE = 'https://mui.com/store/items/zone-landing-page/';

export const PATH_MINIMAL_ON_STORE = 'https://mui.com/store/items/minimal-dashboard/';

export const PATH_FREE_VERSION = 'https://mui.com/store/items/minimal-dashboard-free/';

export const PATH_FIGMA_PREVIEW =
  'https://www.figma.com/file/rWMDOkMZYw2VpTdNuBBCvN/%5BPreview%5D-Minimal-Web.26.11.22?node-id=0%3A1&t=ya2mDFiuhTXXLLF1-1';
