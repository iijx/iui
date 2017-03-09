
Vue.component('i-toast', {
    template: '#tpl_toast',
    data: function() {
        return {
            isShow: false,
            toastText: "this is a toast",
        }
    },
    props: {
        duration: {
            default: 2000,
            type: Number
        }
    },
    methods: {
        show: function(_text) {
            this._toast_text = _text;
            this.isShow = true;
            var _this = this;
            setTimeout(function(){
                _this.isShow = false;
            }, this.duration);
        }
    }
});

Vue.component('i-dialog-one', {
    template: '#tpl_dialog_one',
    props: {
        dialogHdText: {
            type: String,
            default: "标题部分",
        },
        dialogFtText: {
            type: String,
            default: "我知道了",
        },
        show: {
            type: Boolean,
            default: false,
        },
        hideOnBlur: {
            type: Boolean,
            default: false,
        },
        dialogTransition: {
            tyep: String,
            default: "i_dialog",
        },
    },
    methods: {
        onPrimary: function(){
            this.$emit('primary');
        },
        hide: function(){
            this.$emit('hide');
        },
        // show: function(_title, _hd_text, _ft_text, _primary_e) {
            
        // }
    }
});

Vue.component('i-radio', {
    template: '#tpl_radio',
    data: function() {
        return {
            curValue: this.value,
        }
    },
    props: {
        options: {
            type: Array,
            default: [],
        },
        value: String,
        title: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: 'radio'
        },
        checkedColor: {
            type: String,
            default: '#03a9f4'
        },
        uncheckedColor: {
            type: String,
            default: '#03a9f4'
        }
    },
    methods: {
        updateCurValue: function(_index) {
            this.curValue = this.options[Number(_index)];
        }
    }
})

Vue.component('i-checkbox', {
    template: '#tpl_checkbox',
    data: function() {
        return {
            curValue: this.values,

        }
    },
    props: {
        title: String,
        options: {
            type: Array,
            default: [],
        },
        values: {
            type: Array,
            default: [],
        },
        name: {
            type: String,
            default: 'checkbox',
        }
    },
    methods: {
        updateCurValue: function() {
            // this
        }
    },

})
var vm = new Vue({
    el: '#i_container',
    data: {
        isShowToast: false,
        toast_text: "this is a toast",
        options: [
            "male",
            "female"
        ]
    },
    methods: {
        show: function() {
            console.log(this.$refs);
            this.$refs.i_toast.show('12345');
        }
    },
    mounted: function() {
        console.log('23');
    }
});