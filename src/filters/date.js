export default value => {
    const date = new Date(value);
    return date.toLocaleString(['es-ES'], {
        month: 'short',
        day: '2-digit',
        year: 'numeric'
    })
}