// === Nạp danh sách bài viết vào trang blog ===
window.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("post-list");
  if (container && window.posts) {
    container.innerHTML = posts
      .map(
        (p, i) => `
        <div class="post-card fade-section" style="animation-delay: ${i * 0.15}s">
          <h2>${p.title}</h2>
          <p>${p.description}</p>
          <div class="post-footer">
            <span class="tag">${p.tag}</span>
            <a href="${p.link}" class="btn">Đọc thêm</a>
          </div>
        </div>
      `
      )
      .join("");
  }

  // === Hiệu ứng fade-in khi cuộn ===
  const fadeSections = document.querySelectorAll(".fade-section");

  // Sử dụng IntersectionObserver để phát hiện khi phần tử hiện trong khung nhìn
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // chỉ kích hoạt 1 lần
      }
    });
  }, { threshold: 0.15 });

  fadeSections.forEach((section) => observer.observe(section));
});
