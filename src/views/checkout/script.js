import NumberInput from "@/components/NumberInput";
import TextInput from "@/components/TextInput";
import Table from "@/components/Table";
import { formatCurrency } from "@/utils";

export default {
  name: "Checkout",
  components: {
    Table,
    NumberInput,
    TextInput,
  },
  data() {
    return {
      fields: [
        {
          key: "item",
          label: "Item",
        },
        {
          key: "subtotal",
          label: "Subtotal",
        },
      ],
      inputTest: 0,
    };
  },
  computed: {
    products() {
      return this.$store.state.productsIncart;
    },
    totalPrice() {
      return this.$store.getters.totalPrice;
    },
  },
  created() {},
  methods: {
    checkout() {
      //TODO: process checkout
      this.$router.push("/gratitude");
    },
    formatValue(val) {
      return formatCurrency(val);
    },
  },
};
