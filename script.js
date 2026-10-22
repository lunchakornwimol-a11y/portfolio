
/* ===== เมนูนำทาง ===== */
document.addEventListener("DOMContentLoaded", () => {
  // เลื่อนหน้าอย่างนุ่มนวลเมื่อกดเมนู
  document.querySelectorAll('nav a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // แสดงแอนิเมชันเมื่อเลื่อนมาถึงส่วนต่าง ๆ
  const animatedElements = document.querySelectorAll(
    ".card, .education-item, .skill"
  );

  animatedElements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  animatedElements.forEach((element) => observer.observe(element));

  // อัปเดตปีที่ส่วนท้ายเว็บไซต์อัตโนมัติ
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // ปุ่มกลับขึ้นด้านบน
  const backToTop = document.getElementById("back-to-top");

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});
