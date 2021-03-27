function applyStyle(el) {
  try {
    s = getComputedStyle(el);

    for (let key in s) {
      let prop = key.replace(/\-([a-z])/g, (v) => v[1].toUpperCase());
      el.style[prop] = s[key];
    }
    for (let child in el.children) {
      applyStyle(el.children[child]);
    }
  } catch (err) {
    console.log(err.message);
  }
}
