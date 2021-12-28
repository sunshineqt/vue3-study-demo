
<script>
import {h} from 'vue';

// vue3中函数式组件只能用函数方式声明
function Heading(props, context) {
  console.log(context);
  return h(`h${props.level}`, context.attrs, context.slots)
}

// 静态属性
Heading.props = ['level']

export default Heading;
</script>

