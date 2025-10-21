import EnrollmentPage from "../Pages/Enrollment/Enroll";
import Home from "../Pages/Home/Home";

// email routes
export const homePath = "/";
export const enrollmentPath = "/enrollment";

export interface IRouteConfig {
  path: string;
  component: React.ElementType;
  layout?: React.ElementType;
  isProtected?: boolean;
}
export const routesConfig: IRouteConfig[] = [
  {
    path: homePath,
    component: Home,
    isProtected: false,
  },
  {
    path: enrollmentPath,
    component: EnrollmentPage,
    isProtected: true,
  },
  
];
