let iconsData = require('./icons.json');

const ALI_STYLE_LINK = 'https://at.alicdn.com/t/font_con97srr0dvrhpvi.css';

;
(function(global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(function() {
            return (global.LinkIcon = factory(global, global.document));
        });
    } else if (typeof exports === 'object') {
        module.exports = factory(global, global.document);
    } else {
        global.LinkIcon = factory(global, global.document);
    }
})(typeof window !== 'undefined' ? window : this, function(window, document) {
    'use strict';

    function LinkIcon(element, type) {
        if (!element || !type || typeof(element) !== 'string' || typeof(type) !== 'string') {
            return;
        }

        if (type === 'id') {
            this.els = document.querySelectorAll('#' + element + ' a');
        } else if (type === 'class') {
            this.els = document.querySelectorAll('.' + element + ' a');
        } else {
            return;
        }

        this.init();
    }

    LinkIcon.prototype = {
        constructor: LinkIcon,
        init: function() {
            this.createStyle();
            this.setIcon(iconsData.icons, this.els);
        },
        createStyle: function() {
            let style = document.createElement('style');
            let link = document.createElement('link');
            link.rel = 'stylesheet';
            style.innerHTML = `
            .iconfont{
                display: inline-block;
                vertical-align: baseline;
                padding-right: 2px;
                font-size: inherit;
            }
            .iconfont:hover {
                opacity: .8
            }`;
            link.href = ALI_STYLE_LINK;
            document.head.append(link);
            document.head.append(style);

        },
        createEl: function(klass, hex) {
            let i = document.createElement('i');
            i.className = 'iconfont ' + 's-icon-' + klass;
            i.style.color = '#' + hex;
            return i;
        },
        setIcon: function(data, els) {
            els.forEach((el) => {
                let href = el.href;

                if (el.querySelectorAll('img').length !== 0) {
                    return true;
                }

                data.forEach((item) => {
                    if (!item.class) {
                        return true;
                    }

                    if (href.indexOf(item.class.replace(/-/g, '.')) !== -1) {
                        el.insertAdjacentElement('afterbegin', this.createEl(item.class, item.hex));
                    }
                })

            })
        }

    }

    return LinkIcon;
})
