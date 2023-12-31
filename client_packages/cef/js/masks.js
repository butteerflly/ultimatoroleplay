﻿var masks = new Vue({
    el: '.masks',
    data: {
        active: false,
        index: 0,
        indexS: 0,
        selected: 0,
        indexC: 0,
        styles: ["Style-1", "Styles-2", "Styles-2", "Styles-2", "Styles-2", "Styles-2", "Styles-2", "Styles-2", "Styles-2", "Styles-2", "Styles-2", "Styles-2", "Styles-2"],
        colors: ["Colors-1", "Colors-2"],
        prices: [9, 99, 99, 99, 99, 34, 99, 265, 99, 78, 99, 99, 99, 99],
        btns: [true, false, false, false],
    },
    methods: {
        left: function (type) {
            if (type == 0) { //style
                this.indexS--
                if (this.indexS < 0) this.indexS = this.styles.length - 1
                //console.log(this.indexS)
                mp.trigger('masks', 'style', this.indexS)
            } else { //color
                this.indexC--
                if (this.indexC < 0) this.indexC = this.colors.length - 1
                //console.log(this.indexC)
                mp.trigger('masks', 'color', this.indexC)
            }
        },
        right: function (type) {
            if (type == 0) { //style
                this.indexS++
                if (this.indexS == this.styles.length) this.indexS = 0
                //console.log(this.indexS)
                mp.trigger('masks', 'style', this.indexS)
            } else { //color
                this.indexC++
                if (this.indexC == this.colors.length) this.indexC = 0
                //console.log(this.indexC)
                mp.trigger('masks', 'color', this.indexC)
            }
        },
        masks: function (index) {
            this.indexS = index
            mp.trigger('masks','style', index)
        },
        buy: function () {
            //console.log('buy')
            mp.trigger('buyMasks')
        },
        exit: function () {
            //console.log('exit')
            this.reset()
            mp.trigger('closeMasks')
        },
        reset: function () {
            this.price = -1
            this.indexS = 0
            this.indexC = 0
            this.styles = []
            this.colors = []
            this.prices = []
        },
        btn: function (id, event) {
            //console.log(event.target)
            let ind = this.btns.indexOf(true);
            if (ind > -1) this.btns[ind] = false;
            this.btns[id] = true;
            //console.log(event.target.classList)
            this.index = id;
            //bullshit
            this.active = false;
            this.active = true;
            mp.trigger('masks', 'cat', id);
        },
    }
})