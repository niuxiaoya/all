Vue.component('model-select',{
    template:`<div>
<input type="hidden" :value="value" @input="value = $event.target.value">
<el-select v-model="val" :placeholder="seltext" @change="changeVal">
                <el-option
                        v-for="item in option"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
</div>`,
    props: {
        value: String,
        seltext: String,
        option: Array,
    },
    data () {
        return {
            val: ''
        }
    },
    mounted () {
        this.val = this.value || ''
    },
    methods: {
        changeVal (val) {
            this.$emit('input', val)
        }
    }
})