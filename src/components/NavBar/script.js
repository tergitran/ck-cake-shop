export default {
  name: "NavBar",
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {
    counter() {
      return this.$store.getters.numberOfProductsInCart;
    },
  },
  created() {},
  methods: {},
};
