export default (value, precision = 0) => {
    return (value * 100).toFixed(precision) + '%';
}