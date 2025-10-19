import Vue from "vue";

// These will be set by main.js before applying the mixin
let statusBarHeight = 0;
let navigator = null;
let guid = null;
let laiketuiComm = null;
let zh_CN = null;
let zh_EN = null;
let i18n = null;
let getStatusBarHeight = null;

// Function to set dependencies from main.js
export function setGlobalMixinDependencies(deps) {
  statusBarHeight = deps.statusBarHeight || 0;
  navigator = deps.navigator;
  guid = deps.guid;
  laiketuiComm = deps.laiketuiComm;
  zh_CN = deps.zh_CN;
  zh_EN = deps.zh_EN;
  i18n = deps.i18n;
  getStatusBarHeight = deps.getStatusBarHeight;
  
  console.log('GlobalMixin dependencies set:', {
    statusBarHeight: statusBarHeight,
    hasNavigator: !!navigator,
    hasGuid: !!guid,
    hasLaiketuiComm: !!laiketuiComm,
    hasGetStatusBarHeight: !!getStatusBarHeight
  });
}

// Helper function to check if we're in mall subpackage
function isMallPage(instance) {
  if (!instance) return false;
  
  try {
    // Check route path for mall pages
    if (instance.$route && instance.$route.path && instance.$route.path.includes('/mall/')) {
      return true;
    }
    
    // Check page path for uni-app pages
    const pages = getCurrentPages();
    if (pages && pages.length > 0) {
      const currentPage = pages[pages.length - 1];
      if (currentPage && currentPage.route && currentPage.route.includes('mall/')) {
        return true;
      }
    }
    
    // Check if component name indicates mall page
    const componentName = instance.$options && instance.$options.name;
    if (componentName && componentName.toLowerCase().includes('mall')) {
      return true;
    }
  } catch (error) {
    // If any check fails, assume it's not a mall page to be safe
    console.warn('Error checking if page is mall page:', error);
  }
  
  return false;
}

export default {
  data() {
    // Get current language from storage to initialize properly
    const currentLang = uni.getStorageSync('language') || 'zh';
    const initialLanguage = currentLang === 'zh' ? (zh_CN || {}) : (zh_EN || {});
    
    return {
      access_id:
        (Vue.prototype.$store && Vue.prototype.$store.state && Vue.prototype.$store.state.access_id) || uni.getStorageSync("access_id"),
      language: initialLanguage,
      languageType: currentLang,
      hasGrade: "",
    };
  },
  created() {
    // Only apply mixin logic to mall subpackage pages
    if (!isMallPage(this)) {
      return;
    }

    // Only run setLang once and only for page/component instances that need it
    if (this.$options && this.$options.name && 
        (this.$options.name.includes('Page') || this.$route)) {
      this.setLang();
    }
    
    // Update access_id from storage to ensure it's current - check multiple sources
    const storeAccessId = this.$store && this.$store.state && this.$store.state.access_id;
    const storageAccessId = uni.getStorageSync("access_id");
    
    this.access_id = this.access_id || storageAccessId || storeAccessId;

    // Reduced logging - only log for main components
    if (this.$options && this.$options.name && this.$options.name.includes('Page')) {
      console.log('Global mixin created for mall page:', this.$options.name);
    }

    // #ifdef H5
    if (!window._onbeforeunloadSet) {
      window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      };
      window._onbeforeunloadSet = true;
    }
    // #endif

    this.hasGrade = uni.getStorageSync("hasGrade");
  },
  onLoad: function (option) {
    // Only apply mixin logic to mall subpackage pages
    if (!isMallPage(this)) {
      return;
    }

    if (option.fatherId) {
      uni.setStorageSync("fatherId", option.fatherId);
      if (option.isfx && laiketuiComm) {
        laiketuiComm.bindPID(option.isfx, option.fatherId);
      }
    }

    // #ifdef H5
    uni.removeStorageSync("url");
    console.log("##main.js##");
    let storeID = option.store_id;
    if (!storeID) {
      storeID = uni.getStorageSync("store_id");
    }
    console.log("112112112112", storeID);
    if (laiketuiComm) {
      laiketuiComm.initStoreID(storeID);
    }
    // #endif
  },
  onShow() {
    // Only apply mixin logic to mall subpackage pages
    if (!isMallPage(this)) {
      return;
    }

    // let data2 = {
    //   api: "app.index.getUserTell",
    // };
    // this.$req.post({ data: data2 }).then((res2) => {
    //   if (res2.code == 200) {
    //     if (res2.data.systemMsgType == 1) {
    //       uni.navigateTo({ url: "/pages/index/index" });
    //     }
    //   }
    // });

    this.setLang();
    
    // Refresh access_id from storage to ensure it's current
    const storeAccessId = this.$store && this.$store.state && this.$store.state.access_id;
    const storageAccessId = uni.getStorageSync("access_id");
    
    this.access_id = this.access_id || storageAccessId || storeAccessId;
    
    console.log('Global mixin onShow - refreshing access_id for mall page:', {
      currentAccessId: this.access_id,
      storageAccessId: storageAccessId,
      storeAccessId: storeAccessId
    });
  },
  computed: {
    halfWidth() {
      // Only apply to mall pages and safely handle statusBarHeight
      if (!isMallPage(this)) {
        return '0px';
      }
      
      try {
        // Use the injected statusBarHeight from main.js or try to get it dynamically
        let height = 0;
        
        if (typeof statusBarHeight !== 'undefined' && statusBarHeight !== null) {
          height = statusBarHeight;
        } else if (typeof getStatusBarHeight === 'function') {
          try {
            height = getStatusBarHeight() || 0;
          } catch (e) {
            height = 0;
          }
        }
        
        return `${height}px`;
      } catch (error) {
        console.warn('Error in halfWidth computed property:', error);
        return '0px';
      }
    },
  },
  methods: {
    setLang() {
      // Only apply to mall pages
      if (!isMallPage(this)) {
        return;
      }

      // Get current language from storage
      let currentLang = uni.getStorageSync('language')
      
      // If no language is set, default to Chinese
      if (!currentLang) {
        currentLang = 'zh'
        uni.setStorageSync('language', 'zh')
        uni.setStorageSync('locale', 'zh')
      }
      
      // Sync locale storage
      uni.setStorageSync('locale', currentLang)
      if (i18n) {
        i18n.setLocale(currentLang)
      }
      
      // Update LaiKeTui language system
      if (currentLang == "zh") {
        this.language = zh_CN || {};
      } else {
        this.language = zh_EN || {};
      }
      
      // Update tab bar text
      if (this.language && this.language.tabBar) {
        for (let i = 0; i < this.language.tabBar.length; i++) {
          uni.setTabBarItem({
            index: i,
            text: this.language.tabBar[i].text
          });
        }
      }
      this.languageType = currentLang;

      // Update tab bar
      if (this.language && this.language.tabBar) {
        let tabArr = this.language.tabBar;
        for (let i in tabArr) {
          uni.setTabBarItem({
            index: Number(i),
            text: tabArr[i],
          });
        }
      }
    },
    // 检测登录
    isLogin(callback) {
      // Only apply to mall pages
      if (!isMallPage(this)) {
        if (callback) {
          callback();
        }
        return;
      }

      this.$nextTick(() => {
        // First check if user has a valid access_id locally
        const accessId = this.access_id || 
                        uni.getStorageSync('access_id') || 
                        (this.$store && this.$store.state && this.$store.state.access_id);
        
        const isOnline = uni.getStorageSync('online');
        
        console.log('isLogin check:', {
          accessId: accessId,
          isOnline: isOnline,
          hasAccessId: !!accessId,
          accessIdType: typeof accessId,
          hasLktAuthorizeComp: !!(this.$refs.lktAuthorizeComp && this.$refs.lktAuthorizeComp.handleAfterAuth)
        });
        
        // If we have a valid access_id, proceed directly without server check
        // This prevents unnecessary redirects for users who should be logged in
        if (accessId && 
            accessId !== '' && 
            accessId !== 'null' && 
            accessId !== 'undefined' && 
            accessId !== null && 
            accessId !== undefined) {
          console.log('User has valid access_id, proceeding without server check');
          // Update component's access_id and store state to ensure consistency
          this.access_id = accessId;
          if (this.$store && this.$store.state) {
            this.$store.state.access_id = accessId;
          }
          // User appears to be logged in locally, proceed with callback
          if (callback) {
            callback();
          }
          return;
        }
        
        console.log('No valid access_id found, proceeding with server check');
        // Otherwise, do the full authentication check
        if (this.$refs.lktAuthorizeComp && this.$refs.lktAuthorizeComp.handleAfterAuth) {
          this.$refs.lktAuthorizeComp.handleAfterAuth(
            this,
            "/?landing_code=1",
            function () {
              callback && callback();
            }
          );
        } else {
          console.log('lktAuthorizeComp not available, skipping login check');
          // Execute callback directly if authorization component is not available
          if (callback) {
            callback();
          }
        }
      });
    },
    guid() {
      return guid ? guid() : '';
    },
    navTo(url, checkLogin = false, me = null) {
      // Only apply to mall pages
      if (!isMallPage(this)) {
        return null;
      }
      return navigator ? navigator.to(url, checkLogin, me) : null;
    },
    navToHome() {
      // Only apply to mall pages
      if (!isMallPage(this)) {
        return null;
      }
      return navigator ? navigator.toHome() : null;
    },
    navBack() {
      // Only apply to mall pages
      if (!isMallPage(this)) {
        return null;
      }
      return navigator ? navigator.back() : null;
    },
    navSwitchTab(url) {
      // Only apply to mall pages
      if (!isMallPage(this)) {
        return null;
      }
      return navigator ? navigator.switchTab(url) : null;
    },
  },
};
