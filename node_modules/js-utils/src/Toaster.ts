import {error, info, success, warning} from '../assets/icons';
import anime from 'animejs/lib/anime.es.js';

let instance;

export default class Toaster {
    protected element: HTMLElement;
    protected messageElement: HTMLElement;
    protected iconElement: HTMLElement;

    constructor(element: HTMLElement) {
        this.element = element;
        instance = this;
        this.prepareToast();
    }

    protected config = {
        success: {
            icon: success,
            bgColor: '#57cc99',
            textColor: '#333333'
        },
        warning: {
            icon: warning,
            bgColor: '#ffd166',
            textColor: '#1e1e1e'
        },
        error: {
            icon: error,
            bgColor: '#e56b6f',
            textColor: '#f6f6f6'
        },
        info: {
            icon: info,
            bgColor: '#4361ee',
            textColor: '#ffffff'
        }
    };

    public setConfigOfType(type: String, config: Object) {
        if (!this.config.hasOwnProperty(type as PropertyKey)) {
            return false;
        }
        Object.keys(config).forEach((key) => {
            if (this.config[type as PropertyKey].hasOwnProperty(key as PropertyKey)) {
                this.config[type as PropertyKey][key] = config[key];
            }
        })
        return this;
    }

    protected setStylesToParent() {
        const setStyleIfNotSet = (attribute, value) => {
            if (!this.element.style[attribute]) {
                this.element.style[attribute] = value;
            }
        }
        setStyleIfNotSet('position', 'fixed');
        setStyleIfNotSet('top', '2vh');
        setStyleIfNotSet('right', '1vw');
        setStyleIfNotSet('zIndex', '9999');
        setStyleIfNotSet('borderRadius', '5px');
        setStyleIfNotSet('padding', '10px');
        setStyleIfNotSet('transform', 'translateX(30%)');
        setStyleIfNotSet('opacity', '0');
        setStyleIfNotSet('boxShadow', '0 0 10px rgba(0,0,0,0.2)');
        setStyleIfNotSet('display', 'flex');
        setStyleIfNotSet('alignItems', 'center');
        setStyleIfNotSet('color', 'white');
        setStyleIfNotSet('border', '0.2px solid white');
    }

    protected prepareIconElement() {
        this.iconElement = document.createElement('div');
        this.iconElement.style.padding = '5px';
        this.iconElement.style.width = '2rem';
        this.iconElement.style.height = '2rem';
        this.element.appendChild(this.iconElement);
    }

    protected prepareMessageElement() {
        this.messageElement = document.createElement('div');
        this.messageElement.style.padding = '5px';
        this.element.appendChild(this.messageElement);
    }

    protected prepareToast() {
        this.setStylesToParent();
        this.prepareIconElement();
        this.prepareMessageElement();
    }

    protected appendRelatedIcon(type) {
        if (!type) type = 'info';
        this.element.style.backgroundColor = this.config[type].bgColor;
        this.element.style.color = this.config[type].textColor;
        this.iconElement.innerHTML = this.config[type].icon;
    }

    static toast(message, type, duration = 2000) {
        if (!instance) {
            throw new Error('Toaster not initialized');
        }
        instance.messageElement.innerText = message;
        instance.appendRelatedIcon(type);
        instance.element.style.zIndex = 2147484002;
        anime({
            targets: instance.element,
            translateX: 0,
            opacity: 1,
            easing: 'easeOutExpo',
            complete: function (anim) {
                anime({
                    targets: instance.element,
                    translateX: '30%',
                    easing: 'easeOutExpo',
                    opacity: 0,
                    duration: 800,
                    delay: duration, // in milliseconds,
                    complete: function () {
                        instance.element.style.zIndex = -1;
                    }
                });
            }
        });
    }
}
