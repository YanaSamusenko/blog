export function className(classes) {
    let className = '';

    for (let key in classes) {
        if (classes[key]) {
            className += ` ${key}`;
        }   
    }

    return className.trim();
}