export default [
  { path: "/", component: () => import("@/views/home") },
  { path: "/products", component: () => import("@/views/products") },
  { path: "/cart", component: () => import("@/views/cart") },
  { path: "/checkout", component: () => import("@/views/checkout") },
  { path: "/gratitude", component: () => import("@/views/gratitude") },
];
