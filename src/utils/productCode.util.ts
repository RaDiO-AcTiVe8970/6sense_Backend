import crypto from 'crypto';

export const generateProductCode = (productName: string): string => {
    const hash = crypto.createHash('md5').update(productName).digest('hex').slice(0, 8);

    let longestSubstring = '';
    let currentSubstring = '';
    for (let i = 0; i < productName.length; i++) {
        if (i === 0 || productName[i] > productName[i - 1]) {
            currentSubstring += productName[i];
        } else {
            if (currentSubstring.length > longestSubstring.length) {
                longestSubstring = currentSubstring;
            }
            currentSubstring = productName[i];
        }
    }
    if (currentSubstring.length > longestSubstring.length) {
        longestSubstring = currentSubstring;
    }

    const startIndex = productName.toLowerCase().indexOf(longestSubstring.toLowerCase());
    const endIndex = startIndex + longestSubstring.length - 1;

    return `${hash}-${startIndex}${longestSubstring}${endIndex}`;
};
