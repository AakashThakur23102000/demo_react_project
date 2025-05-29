// router.ts
import { createBrowserRouter, type RouteObject } from "react-router";
import { NavigationPaths } from "../config/NavigationPaths";
import Home from "../pages/home/Home";
import PageNotFound from "../pages/page_not_found/PageNotFound";
import { lazyWithPreload } from "../utils/lazyWithPreload"; // import your helper

// Wrap components with lazyWithPreload only once here
export const ProfileLazyRoute = lazyWithPreload(() => import("../pages/user/profile/Profile"));
export const ChangePasswordLazyRoute = lazyWithPreload(() => import("../pages/user/change_password/ChangePassword"));
export const ReportALazyRoute = lazyWithPreload(() => import("../pages/reports/report_a/ReportA"));
export const ReportBLazyRoute = lazyWithPreload(() => import("../pages/reports/report_b/ReportB"));

// Immediately loaded routes
const initialRoutesArr: RouteObject[] = [
    { path: NavigationPaths.HOME, Component: Home },
    { path: NavigationPaths.PAGE_NOT_FOUND, Component: PageNotFound },
];

// Lazy loaded routes
const lazyRoutesArr: RouteObject[] = [
    { path: NavigationPaths.PROFILE, Component: ProfileLazyRoute },
    { path: NavigationPaths.CHANGE_PASSWORD, Component: ChangePasswordLazyRoute },
    { path: NavigationPaths.REPORT_A, Component: ReportALazyRoute },
    { path: NavigationPaths.REPORT_B, Component: ReportBLazyRoute },
];

// Export router normally
export const router = createBrowserRouter([
    ...initialRoutesArr, ...lazyRoutesArr
]);
