export default [
  { path: "/", component: () => import("@/views/home") },
  { path: "/products", component: () => import("@/views/products") }
];
