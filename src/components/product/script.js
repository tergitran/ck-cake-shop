export default {
  name: "Product",
  props: {
    product: {
      type: Object,
      default() {
        return {
          id: null,
          name: "",
          image_url: "",
          description: "",
          original_price: null,
          is_on_discount: false,
          discounted_price: null,
          stock_count: null,
        };
      },
    },
  },
  components: {},
  data() {
    return {};
  },
  computed: {
    isIncart() {
      return this.$store.getters.isIncart(this.product.id);
    },
  },
  created() {},
  methods: {
    addToCart() {
      this.$store.dispatch("addProduct", this.product);
    },
  },
};
