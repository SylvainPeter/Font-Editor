    const app = new Vue({
        el: '#app',
        data: {
            isBold: false,
            isItalic: false,
            isUnderline: false,
            isShadow: false,
            isNegative: false,
            fontSize: 4,
            fontFamily: "",
            textColor: "black",
            backgroundColor: "white",
            alphabet: false,
            textContent: "Texte"
        },
        computed: {
            myClass: function() {
                return {
                    bold: this.isBold,
                    italic: this.isItalic,
                    underline: this.isUnderline,
                    shadow: this.isShadow,
                    negative: this.isNegative
                }
            }

        }
    })


