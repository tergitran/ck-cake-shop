import PATH from "./paths";
export default [
  { path: PATH.ROOT, component: () => import("@/views/home") },
  { path: PATH.PRODUCTS, component: () => import("@/views/products") },
  { path: PATH.CART, component: () => import("@/views/cart") },
  { path: PATH.CHECKOUT, component: () => import("@/views/checkout") },
  { path: PATH.GRATITUDE, component: () => import("@/views/gratitude") },
];
