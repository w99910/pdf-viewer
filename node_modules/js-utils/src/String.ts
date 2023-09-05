export default class String {
    static truncate(text, cutoff = 20) {
        return text.length > cutoff ? text.substring(0, 6) + '...' + text.substring(text.length - 6, text.length) : text;
    }
}
