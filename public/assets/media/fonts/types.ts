export type Font = {
    family(): string
    style(): 'Regular' | 'Italic'
    weight(): 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
    url(): string | null
    css(): string
}
