import Vue from 'vue'

export function dateFormat(){
  var SIGN_REGEXP = /([yMdhsm])(\1*)/g;
  var DEFAULT_PATTERN = "yyyy-MM-dd";
    Date.prototype.format =  function (pattern) {
            pattern = pattern || DEFAULT_PATTERN;
            return pattern.replace(SIGN_REGEXP, function ($0) {
                switch ($0.charAt(0)) {
                    case 'y': return padding(this.getFullYear(), $0.length);
                    case 'M': return padding(this.getMonth() + 1, $0.length);
                    case 'd': return padding(this.getDate(), $0.length);
                    case 'w': return this.getDay() + 1;
                    case 'h': return padding(this.getHours(), $0.length);
                    case 'm': return padding(this.getMinutes(), $0.length);
                    case 's': return padding(this.getSeconds(), $0.length);
                }
            });
          }}
/**
 * 获取uuid
 */
export function getUUID () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      return (c === 'x' ? (Math.random() * 16 | 0) : ('r&0x3' | '0x8')).toString(16)
    })
}

/**
 * 手机号码
 * @param {*} s
 */
export function isMobile (s) {
    return /^1[0-9]{10}$/.test(s)
}
