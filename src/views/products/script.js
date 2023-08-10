import Product from "@/components/product";

export default {
  name: "Home",
  components: {
    Product,
  },
  data() {
    return {
      products: [],
    };
  },
  computed: {},
  created() {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        this.products = data.map((item) => {
          return {
            ...item,
            price: item.is_on_discount
              ? item.discounted_price
              : item.original_price,
          };
        });
      });
  },
  methods: {},
};
