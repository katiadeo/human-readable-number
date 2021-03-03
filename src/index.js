module.exports = function toReadable (number) {
    
    const units = [' ', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = [' ', ' ', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    
    let str = number.toString();
    let result = [];
    
    if (number === 0) return 'zero';
    if (number === 20) return 'twenty';
    if (number < 20) return units[number];
    if (number > 20 && number < 100) return result.concat(tens[str[0]], units[str[1]]).join(' ').trim();
    
    if (str[1] !== '0' && str[2] !== '0' && str[1] !== '1') return result.concat(units[str[0]], 'hundred', tens[str[1]], units[str[2]]).join(' ').trim();
    if (str[1] === '1') return result.concat(units[str[0]], 'hundred', teens[str[2]]).join(' ').trim();
    if (str[1] === '0' && str[2] === '0') return result.concat(units[str[0]], 'hundred').join(' ').trim();
    if (str[1] !== '0' || str[2] === '0') return result.concat(units[str[0]], 'hundred', tens[str[1]]).join(' ').trim();
    if (str[1] === '0' || str[2] !== '0') return result.concat(units[str[0]], 'hundred', units[str[2]]).join(' ').trim();
    if (str[1] !== '0' || str[2] !== '0') return result.concat(units[str[0]], 'hundred', tens[str[1]], units[str[2]]).join(' ').trim()

}
