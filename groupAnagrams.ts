function groupAnagrams(strs: string[]): string[][] {
    const map: Map<string, string[]> = new Map();

    for (const str of strs) {
        const sortedStr = str.split('').sort().join('');
        if (!map.has(sortedStr)) {
            map.set(sortedStr, [str]);
        } else {
            map.get(sortedStr)?.push(str);
        }
    }

    return Array.from(map.values());
}
