// ----------------------------------------------------------------------

export type IUserSocialLink = {
  facebookLink: string;
  instagramLink: string;
  linkedinLink: string;
  twitterLink: string;
};

export type IUserProfileFollowers = {
  follower: number;
  following: number;
};

export type IUserProfileCover = {
  name: string;
  cover: string;
  role: string;
};

export type IUserProfileAbout = {
  quote: string;
  country: string;
  email: string;
  role: string;
  company: string;
  school: string;
};

export type IUserProfile = IUserProfileFollowers &
  IUserProfileAbout & {
    id: string;
    socialLinks: IUserSocialLink;
  };

export type IUserProfileFollower = {
  id: string;
  avatarUrl: string;
  name: string;
  country: string;
  isFollowed: boolean;
};

export type IUserProfileGallery = {
  id: string;
  title: string;
  postAt: Date | string | number;
  imageUrl: string;
};

export type IUserProfileFriend = {
  id: string;
  avatarUrl: string;
  name: string;
  role: string;
};

export type IUserProfilePost = {
  id: string;
  author: {
    id: string;
    avatarUrl: string;
    name: string;
  };
  isLiked: boolean;
  createdAt: Date | string | number;
  media: string;
  message: string;
  personLikes: {
    name: string;
    avatarUrl: string;
  }[];
  comments: {
    id: string;
    author: {
      id: string;
      avatarUrl: string;
      name: string;
    };
    createdAt: Date | string | number;
    message: string;
  }[];
};

// ----------------------------------------------------------------------

export type IUserCard = {
  id: string;
  avatarUrl: string;
  cover: string;
  name: string;
  follower: number;
  following: number;
  totalPosts: number;
  role: string;
};

// ----------------------------------------------------------------------

export type IUserAccountGeneral = {
  id: string;
  avatarUrl: string;
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  country: string;
  state: string;
  city: string;
  zipCode: string;
  company: string;
  isVerified: boolean;
  status: string;
  role: string;
};

export type IUserAccountBillingCreditCard = {
  id: string;
  cardNumber: string;
  cardType: string;
};

export type IUserAccountBillingInvoice = {
  id: string;
  createdAt: Date | string | number;
  price: number;
};

export type IUserAccountBillingAddress = {
  id: string;
  name: string;
  phone: string;
  country: string;
  state: string;
  city: string;
  street: string;
  zipCode: string;
};

export type IUserAccountChangePassword = {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
};

// ----------------------------------------------------------------------

export type IUserAccountNotificationSettings = {
  activityComments: boolean;
  activityAnswers: boolean;
  activityFollows: boolean;
  applicationNews: boolean;
  applicationProduct: boolean;
  applicationBlog: boolean;
};

// ----------------------------------------------------------------------

export enum UserStatusTypes {
  ACTIVATE = 'ACTIVATE',
  PENDING = 'PENDING',
  DELETED = 'DELETED',
}

export enum UserStatusTypesCode {
  ACTIVATE = '101-001',
  PENDING = '101-002',
  DELETED = '101-003',
}

export interface ServiceType {
  itemNo: number;
  lev1?: any;
  lev2?: any;
  name: string;
  nameEng?: any;
}

export interface DeviceType {
  itemNo: number;
  lev1?: any;
  lev2?: any;
  name: string;
  nameEng?: any;
}

export interface Category {
  categoryNo: number;
  name: string;
  description?: any;
}

export interface Estimate {
  estimateId: string;
  title: string;
  serviceTypeName: string;
  serviceTypeNo: number;
  serviceType: ServiceType;
  deviceTypeName: string;
  deviceTypeNo: number;
  deviceType: DeviceType;
  categoryNo: number;
  categoryName: string;
  category: Category;
  createdAt: Date;
  updatedAt: Date;
}

export interface Item {
  lev2: string;
  lev1Code: number;
  lev1: string;
  item: string;
  itemCode: number;
  lev2Code: number;
}

export interface Timeline {
  branding: number;
  design: number;
  backendServer: number;
  backendDb: number;
  backendApi: number;
  frontendPub: number;
  frontendLogic: number;
  qa: number;
}

export interface Labor {
  serviceTypePrice: number;
  deviceTypePrice: number;
  workingTimePm: number;
  workingTimeDesign: number;
  workingTimeFrontend: number;
  workingTimeBackend: number;
  workingPricePm: number;
  workingPriceDesign: number;
  workingPriceFrontend: number;
  workingPriceBackend: number;
  officePricePm: number;
  officePriceDesign: number;
  officePriceFrontend: number;
  officePriceBackend: number;
  techPricePm: number;
  techPriceDesign: number;
  techPriceFrontend: number;
  techPriceBackend: number;
}

export interface EstimateComplete {
  estimate: Estimate;
  title: string;
  price: number;
  serviceTypeNo: number;
  deviceTypeNo: number;
  categoryNo: number;
  items: Item[];
  timeline: Timeline;
  month: number;
  labor: Labor;
}

export interface IEstimates {
  estimateId: string;
  title: string;
  serviceTypeName: string;
  serviceTypeNo?: number;
  serviceType: ServiceType;
  deviceTypeName: string;
  deviceTypeNo?: number;
  deviceType: DeviceType;
  categoryNo?: number;
  categoryName: string;
  category: Category;
  createdAt: Date;
  updatedAt: Date;
}
//------------------------------------------------------

export enum UserStatusType {
  ACTIVATE = 'ACTIVATE',
  PENDING = 'PENDING',
  DELETED = 'DELETED',
}

export enum UserStatusTypeCode {
  ACTIVATE = '101-001',
  PENDING = '101-002',
  DELETED = '101-003',
}

export enum MainMarketTypes {
  DOMESTIC = 'DOMESTIC',
  OVERSEAS = 'OVERSEAS',
}

export interface IUserInfo {
  name: string;
  nameEng?: any;
  establishedAt: Date;
  mainMarketType?: MainMarketTypes;
  mainMarketTypeCode?: MainMarketTypes;
  employeeCountType?: any;
  employeeCnt?: any;
  salesVolumeType?: any;
  salesVolume?: any;
  industry1?: any;
  industry2?: any;
  industry3?: any;
  industry1Type?: any;
  industry2Type?: any;
  industry3Type?: any;
}

export interface IUser {
  userId: string;
  username: string;
  email: string;
  phone: string;
  userStatusType: UserStatusType;
  userStatusTypeCode: UserStatusTypeCode;
  createdAt: string;
  userInfo: IUserInfo;
  userAddress?: Array<{ addressMap: any }>;
}
