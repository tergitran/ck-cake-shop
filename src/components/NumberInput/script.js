export default {
  name: "NumberInput",
  props: {
    value: {
      type: Number,
      default: 1,
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
