export default {
  name: "Home",
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
  computed: {},
  created() {},
  methods: {},
};
