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
            textColor: "",
            backgroundColor: ""
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


const styledTextArea = document.getElementsByClassName('styled-text-area')[0],
    alphabet = document.getElementById('alphabet')


alphabet.addEventListener('click', function() {
    styledTextArea.textContent = "AZERTY azerty \r123456 &#?!$%";
});

