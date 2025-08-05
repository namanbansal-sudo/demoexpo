import { router } from 'expo-router';

const ROUTES = {
  LOGIN: '/(screens)/login',
  SETTINGS1: '/(screens)/(settings)/settings1',
  SETTINGS2: '/(screens)/(settings)/settings2',
  SETTINGS3: '/(screens)/(settings)/settings3',
  SETTINGS4: '/(screens)/(settings)/settings4',
  TABS_HOME: '/(tabs)',
  TABS_PROFILE: '/(tabs)/profile',
} as const;

const NavigationService = {
  ROUTES,
  
  navigate: (path: string, params?: Record<string, any>) => {
    if (params) {
      router.push({ pathname: path as any, params });
    } else {
      router.push(path as any);
    }
  },
  
  replace: (path: string, params?: Record<string, any>) => {
    if (params) {
      router.replace({ pathname: path as any, params });
    } else {
      router.replace(path as any);
    }
  },
  
  push: (path: string, params?: Record<string, any>) => {
    if (params) {
      router.push({ pathname: path as any, params });
    } else {
      router.push(path as any);
    }
  },
  
  back: () => {
    router.back();
  },
  
  canGoBack: () => {
    return router.canGoBack();
  },
  
  goToLogin: () => {
    (global as any).userName = null;
    router.replace(ROUTES.LOGIN);
  },
  
  goToHome: () => {
    router.replace(ROUTES.TABS_HOME);
  },
  
  goToProfile: (name?: string) => {
    if (name) {
      router.replace(`${ROUTES.TABS_PROFILE}?name=${encodeURIComponent(name)}`);
    } else {
      router.replace(ROUTES.TABS_PROFILE);
    }
  },

  goToSettings1: () => {
    router.navigate(ROUTES.SETTINGS1);
  },

  goToSettings2: () => {
    router.navigate(ROUTES.SETTINGS2);
  },

  goToSettings3: () => {
    router.navigate(ROUTES.SETTINGS3);
  },

  goToSettings4: () => {
    router.navigate(ROUTES.SETTINGS4);
  },

};

export default NavigationService;