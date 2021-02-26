    const app = new Vue({
        el: '#app',
        data: {
            isBold: false,
            isItalic: false,
            isUnderline: false,
            isShadow: false,
            isNegative: false,
            isSepia: false,
            fontSize: 4,
            fontFamily: "",
            textColor: "",
            backgroundColor: "",
            alphabet: false,
            textContent: "AZERTY azerty \r123456 &#?!$%"
        },
        computed: {
            myClass: function() {
                return {
                    bold: this.isBold,
                    italic: this.isItalic,
                    underline: this.isUnderline,
                    shadow: this.isShadow,
                    negative: this.isNegative,
                    sepia: this.isSepia
                }
            }

        }
    })


