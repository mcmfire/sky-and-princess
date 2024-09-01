export const toPossessiveForm = (name: string) => {
    return name.endsWith("s") ? `${name}'` : `${name}'s`;
}