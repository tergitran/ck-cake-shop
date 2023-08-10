import NumberInput from "@/components/NumberInput";
import TextInput from "@/components/TextInput";
import Table from "@/components/Table";

export default {
  name: "Cart",
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
          key: "price",
          label: "Price",
        },
        {
          key: "quantity",
          label: "Quantity",
        },
        {
          key: "subtotal",
          label: "Subtotal",
        },
        {
          key: "action",
          label: "",
        },
      ],
      inputTest: 0,
    };
  },
  computed: {
    products() {
      return this.$store.state.productsIncart;
    },
  },
  created() {},
  methods: {
    handleChangeQuantity(id, quantity) {
      this.$store.dispatch("updateProductByID", { id, items: { quantity } });
    },
    handleChangeNote(id, note) {
      this.$store.dispatch("updateProductByID", { id, items: { note } });
    },
    handleDeleteProduct(id) {
      this.$store.dispatch("removeProduct", id);
    },
  },
};
