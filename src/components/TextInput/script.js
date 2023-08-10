export default {
  name: "TextInput",
  props: {
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "Input your content",
    },
    maxlength: {
      type: Number,
      default: 25,
    },
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    onChange(value) {
      this.$emit("input", value);
      this.$emit("onChange", value);
    },
  },
};
