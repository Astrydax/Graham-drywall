export default function runOnImageLoad (className, callback) {
  let isLoading = true;

  while (isLoading) {
    const loading = [].slice.call(document.querySelectorAll(className)).filter(img => img.complete !== true);
    if (!loading.length > 0) {
      isLoading = true;
      callback();
      return;
    }
  }
}