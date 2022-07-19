export function useDark() {
    const dark = useState('dark', () => false);
    return dark;
}