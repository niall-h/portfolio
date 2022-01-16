const findOffsetTop = (el) => {
    if(!el.current) return;
    const rect = el.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return rect.top + scrollTop;
};

export default findOffsetTop;