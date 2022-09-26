export const window = (text: string, n: number): string[] => {
    const windowArray: string[] = [];
    for (let i = 0; i < text.length; i += n) {
        windowArray.push(text.substring(i, i + n))
    }
    return windowArray;
}
