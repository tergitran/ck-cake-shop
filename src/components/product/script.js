import NumberInput from "@/components/NumberInput";
import TextInput from "@/components/TextInput";

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
  components: {
    NumberInput,
    TextInput,
  },
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
      const myContent = (
        <div class="d-flex flex-column gap-4">
          <div>
            <img
              src={this.product.image_url}
              style="width: 32px; margin-right: 8px;"
            ></img>
            {this.product.name}
          </div>
          <div>Has been added to cart</div>
        </div>
      );

      this.$bvToast.toast([myContent], {
        variant: "success",
        toaster: "b-toaster-top-center",
        autoHideDelay: 2000,
        appendToast: false,
        noCloseButton: true,
      });
      this.$store.dispatch("addProduct", this.product);
    },
  },
};
