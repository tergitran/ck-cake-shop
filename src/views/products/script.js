import Product from '@/components/product'

export default {
  name: 'Home',
  components: {
    Product
  },
  data() {
    return {
      products: []
    };
  },
  computed: {
  },
  created() {
    fetch('products.json').then(res => res.json()).then(data => {
      this.products = data;
    })
  },
  methods: {
  }
};